"""Upload sounds and pictures to the Cloudflare KV namespace in scripts/kv_config.json (only new or changed files).
    python3 scripts/upload_media.py      (then: python3 scripts/bundle_worker.py && cd dist && npx wrangler deploy)
Key = the file's path on the site, e.g. /audio/abc123.mp3. scripts/kv_index.json remembers what is already uploaded."""
import base64, hashlib, json, os, subprocess, sys, tempfile
ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..")
PUBLIC = os.path.join(ROOT, "public"); CFG = json.load(open(os.path.join(ROOT, "scripts", "kv_config.json")))
IDX_PATH = os.path.join(ROOT, "scripts", "kv_index.json"); idx = json.load(open(IDX_PATH)) if os.path.exists(IDX_PATH) else {}
todo = []
for sub in ("audio", "img"):
    for n in sorted(os.listdir(os.path.join(PUBLIC, sub))):
        p = os.path.join(PUBLIC, sub, n); key = f"/{sub}/{n}"; h = hashlib.sha1(open(p, "rb").read()).hexdigest()
        if idx.get(key) != h: todo.append((key, p, h))
print(f"{len(todo)} files to upload")
batch, size = [], 0
def flush():
    global batch, size
    if not batch: return
    with tempfile.NamedTemporaryFile("w", suffix=".json", delete=False) as f:
        json.dump([{"key": k, "value": base64.b64encode(open(p, "rb").read()).decode(), "base64": True} for k, p, _ in batch], f)
    subprocess.run(["npx", "-y", "wrangler@4", "kv", "bulk", "put", f.name, "--namespace-id", CFG["namespace_id"], "--remote"], check=True, cwd=ROOT)
    for k, _, h in batch: idx[k] = h
    json.dump(idx, open(IDX_PATH, "w"), indent=0, sort_keys=True); os.unlink(f.name); batch, size = [], 0
for k, p, h in todo:
    batch.append((k, p, h)); size += os.path.getsize(p)
    if size > 40 * 2**20 or len(batch) >= 5000: flush()
flush(); print("done")
