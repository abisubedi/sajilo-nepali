"""Turn an illustration on a white background into a transparent web image.
Usage: python3 scripts/cutout.py input.jpg public/img/name.webp [size] [lightness] [grayness]
(Use a higher lightness, e.g. 200, for pictures with light skies or snow near the edge.)
For a round sticker whose light sky leaks out, protect the circle: add  disk=CX,CY,R  (pixels in the original),
or  disk=auto  to use the circle that fits the drawing (the storybook sticker style).
Removes the white/light-grey background (and soft drop shadow) that touches the picture's edge,
keeps everything inside the dark outline, softens the cut edge and saves a small WebP."""
import sys
import numpy as np
from PIL import Image, ImageFilter

src, out = sys.argv[1], sys.argv[2]
im = Image.open(src).convert("RGB")
a = np.asarray(im).astype(np.int16)
mx, mn = a.max(axis=2), a.min(axis=2)
# background-like: very light and nearly colorless (white paper, light-grey shadow)
nums = [a for a in sys.argv[3:] if not a.startswith("disk=")]
size = int(nums[0]) if len(nums) > 0 else 384
light = int(nums[1]) if len(nums) > 1 else 168
gray = int(nums[2]) if len(nums) > 2 else 34
cand = (mn > light) & ((mx - mn) < gray)
for arg in sys.argv[1:]:
    if arg == "disk=auto":   # round sticker: protect the circle that fits the drawing's bounding box
        ys, xs = np.nonzero(mn < 225)
        x0, x1, y0, y1 = xs.min(), xs.max(), ys.min(), ys.max()
        arg = f"disk={(x0 + x1) / 2},{(y0 + y1) / 2},{max(x1 - x0, y1 - y0) / 2 + 4}"
    if arg.startswith("disk="):
        cx, cy, r = map(float, arg[5:].split(","))
        yy, xx = np.mgrid[0:cand.shape[0], 0:cand.shape[1]]
        cand &= (xx - cx) ** 2 + (yy - cy) ** 2 > r * r

# flood fill from the image border through background-like pixels
bg = np.zeros_like(cand)
bg[0, :], bg[-1, :], bg[:, 0], bg[:, -1] = cand[0, :], cand[-1, :], cand[:, 0], cand[:, -1]
while True:
    grow = bg.copy()
    grow[1:, :] |= bg[:-1, :]; grow[:-1, :] |= bg[1:, :]; grow[:, 1:] |= bg[:, :-1]; grow[:, :-1] |= bg[:, 1:]
    grow &= cand
    if (grow == bg).all(): break
    bg = grow

alpha = Image.fromarray(np.where(bg, 0, 255).astype(np.uint8))
alpha = alpha.filter(ImageFilter.MinFilter(3)).filter(ImageFilter.GaussianBlur(1.2))   # trim halo, soften edge
rgba = im.copy(); rgba.putalpha(alpha)
box = rgba.getbbox()
rgba = rgba.crop(box)
w, h = rgba.size; s = max(w, h)
sq = Image.new("RGBA", (s, s), (0, 0, 0, 0)); sq.paste(rgba, ((s - w) // 2, (s - h) // 2))
sq.resize((size, size), Image.LANCZOS).save(out, "WEBP", quality=88, method=6)
print(out, "kept", f"{100 - bg.mean() * 100:.0f}% of pixels")
