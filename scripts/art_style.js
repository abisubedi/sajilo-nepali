// The Sajilo Nepali picture style (from 2026-11-08): hand-drawn storybook sketches, brought to life by gentle CSS motion in the game.
// Based on the prompt for pandu-namaste, the first picture in this style.
const INK = "A warm, hand-drawn children's storybook illustration with textured dark navy-charcoal ink outlines (#1f2a44) and visible colored-pencil texture with soft watercolor wash fills in warm Himalayan colors: terracotta orange (#e8742a), marigold yellow (#f6b71c), crimson red (#e2453c), royal blue (#2f6fd6), leaf green (#2fa75a) and cream white. People and animals have friendly, gentle faces; objects and food stay simple without faces. Authentic Nepali details. Flat 2D children's book sketch style, no 3D gloss, no gradients, no text, no letters, no numbers, no watermark, cozy and authentic.";
const STICKER = INK + " Circular sticker icon composition: the subject centered inside a loose hand-drawn ink circle on cream paper, with a few tiny doodled leaves or flowers along the circle's edge, isolated on a clean pure white background outside the circle.";
const PLAIN = INK + " One clear subject centered with empty space around it, isolated on a clean pure white background.";
const FULL = INK;   // app icon, link preview and scenes keep their own background
const styleFor = file => /^cast-/.test(file) ? PLAIN : /^(app-icon|og-image)/.test(file) ? FULL : STICKER;
const SINCE = "2026-11-08";   // pictures added or redrawn from this day are in the new style
module.exports = { STICKER, PLAIN, FULL, styleFor, SINCE };
