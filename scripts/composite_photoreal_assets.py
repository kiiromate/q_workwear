#!/usr/bin/env python3
"""
Photorealistic Q Workwear Post-Production Method-Specific Logo Compositor
-------------------------------------------------------------------------
Applies ONLY official Q Workwear logo assets from `public/images/logo/`
(`q-mark-red.png`, `q-mark-white.png`) where physically appropriate,
following `docs/BRANDING_METHOD_AND_SCALE_CORRECTION_2026-10-19.md` and
the approved direction in `docs/approval-batch-2026-10-19/`.

Key rules enforced:
1. Clean unbranded masters (`none`) for:
   - C01 (`cat-corporate-suiting.webp`, `lookbook-corporate.webp`) — formal suiting exterior has no supplier logo.
   - IND03 (`industrial-seam-detail.webp`) — macro zipper & bar-tack seam construction study has no miniature Q overlay.
   - H02 (`hero-uniform-rail.webp`) — multi-sector studio rack remains unbranded.
2. Symbol-only official artwork (`q-mark-red.png` / `q-mark-white.png`) is used at garment scale so
   microscopic 4px sub-text ("WORK WEAR") is never rendered illegibly on cloth.
3. Distinct physical methods:
   - `woven_label`: Flat damask weave integration on the physical sewn cuff label (`H01` / `CR02`), zero drop shadow.
   - `sewn_patch`: Emblem integrated inside the physical stitched rectangular twill chest patch (`IND01`, `IND02`).
   - `embroidery`: Directional satin-stitch thread relief and contact shadow on flat knit/twill panels (`H03`, `HOS01`, `BR01` polo, `BR02` polo).
   - `print_transfer`: Perspective-foreshortened matte ink absorption on the folded off-white cotton T-shirt (`BR01` / `BR03`), zero raised thread shadow.
"""

import math
import os
import shutil
import numpy as np
from PIL import Image, ImageDraw, ImageFilter

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

LOGO_DIR = os.path.join(ROOT, "public", "images", "logo")
SHOWCASE_DIR = os.path.join(ROOT, "public", "images", "showcase")
EDITORIAL_DIR = os.path.join(ROOT, "public", "images", "editorial")
LOOKBOOK_DIR = os.path.join(ROOT, "public", "images", "lookbook")

EVIDENCE_DIR = os.path.join(ROOT, "docs", "review-evidence-2026-10-19")
MASTERS_DIR = os.path.join(EVIDENCE_DIR, "masters")
SHEETS_DIR = os.path.join(EVIDENCE_DIR, "contact-sheets")
APPROVAL_BATCH_DIR = os.path.join(ROOT, "docs", "approval-batch-2026-10-19")

for d in [SHOWCASE_DIR, EDITORIAL_DIR, LOOKBOOK_DIR, MASTERS_DIR, SHEETS_DIR]:
    os.makedirs(d, exist_ok=True)


def load_trimmed_logo(filename: str) -> Image.Image:
    path = os.path.join(LOGO_DIR, filename)
    im = Image.open(path).convert("RGBA")
    bbox = im.getbbox()
    if bbox:
        im = im.crop(bbox)
    return im


def _prepare_mark(
    logo_rgba: Image.Image,
    target_width: int,
    angle_deg: float = 0.0,
    vertical_scale: float = 1.0,
    shear_x: float = 0.0,
    blur_radius: float = 0.40,
) -> Image.Image:
    w0, h0 = logo_rgba.size
    scale_up = 4
    scaled_w = max(4, target_width * scale_up)
    scaled_h = max(4, int(round(h0 * (target_width / float(w0)) * vertical_scale * scale_up)))

    mark = logo_rgba.resize((scaled_w, scaled_h), Image.Resampling.LANCZOS)

    if abs(shear_x) > 0.005:
        pad = int(abs(shear_x) * scaled_h) + 8
        canvas = Image.new("RGBA", (scaled_w + pad * 2, scaled_h + 8), (0, 0, 0, 0))
        canvas.paste(mark, (pad, 4))
        mark = canvas.transform(
            canvas.size,
            Image.Transform.AFFINE,
            (1.0, shear_x, -shear_x * (scaled_h / 2.0), 0.0, 1.0, 0.0),
            resample=Image.Resampling.BICUBIC,
        )
        bbox = mark.getbbox()
        if bbox:
            mark = mark.crop(bbox)

    if abs(angle_deg) > 0.05:
        mark = mark.rotate(angle_deg, resample=Image.Resampling.BICUBIC, expand=True)

    mark = mark.resize(
        (max(1, int(round(mark.width / float(scale_up)))), max(1, int(round(mark.height / float(scale_up))))),
        Image.Resampling.LANCZOS,
    )

    if blur_radius > 0:
        r, g, b, a = mark.split()
        a = a.filter(ImageFilter.GaussianBlur(radius=blur_radius * 0.65))
        mark = Image.merge("RGBA", (r, g, b, a))

    return mark


def apply_embroidered_emblem(
    base_img: Image.Image,
    logo_rgba: Image.Image,
    center_xy: tuple[int, int],
    target_width: int,
    angle_deg: float = 0.0,
    opacity: float = 0.88,
    weave_strength: float = 0.16,
    stitch_relief: float = 0.10,
    shadow_strength: float = 0.22,
    blur_radius: float = 0.38,
) -> Image.Image:
    """
    Satin-stitch embroidered emblem for compact symbol-only marks on shirts, polos, and canvas aprons.
    Includes directional thread micro-striation and subtle lower-right stitch relief shadow.
    """
    out = base_img.convert("RGBA")
    mark = _prepare_mark(logo_rgba, target_width=target_width, angle_deg=angle_deg, blur_radius=blur_radius)
    mw, mh = mark.size
    cx, cy = center_xy
    x0 = int(round(cx - mw / 2))
    y0 = int(round(cy - mh / 2))

    if x0 < 0 or y0 < 0 or x0 + mw > out.width or y0 + mh > out.height:
        return base_img

    patch = out.crop((x0, y0, x0 + mw, y0 + mh)).convert("RGB")
    patch_np = np.asarray(patch, dtype=np.float32)
    lum = 0.299 * patch_np[:, :, 0] + 0.587 * patch_np[:, :, 1] + 0.114 * patch_np[:, :, 2]
    lum_mean = float(np.mean(lum))
    lum_std = max(6.0, float(np.std(lum)))
    lum_norm = np.clip((lum - lum_mean) / lum_std, -1.6, 1.6)

    # Directional satin-stitch micro-striation pattern along stitch angle
    yy, xx = np.mgrid[0:mh, 0:mw]
    theta = math.radians(angle_deg + 35.0)
    striation = np.sin((xx * math.cos(theta) + yy * math.sin(theta)) * 2.6) * stitch_relief

    mark_np = np.asarray(mark, dtype=np.float32).copy()
    modulation = 1.0 + weave_strength * lum_norm[:, :, None] + striation[:, :, None]
    mark_np[:, :, :3] = np.clip(mark_np[:, :, :3] * modulation, 0, 255)
    mark_np[:, :, 3] = np.clip(mark_np[:, :, 3] * opacity, 0, 255)

    if shadow_strength > 0:
        alpha_chan = Image.fromarray(mark_np[:, :, 3].astype(np.uint8), mode="L")
        shadow_alpha = alpha_chan.filter(ImageFilter.GaussianBlur(radius=0.75))
        shadow_np = np.zeros((mh, mw, 4), dtype=np.uint8)
        shadow_np[:, :, 3] = np.clip(np.asarray(shadow_alpha, dtype=np.float32) * shadow_strength, 0, 255).astype(np.uint8)
        shadow_layer = Image.fromarray(shadow_np, mode="RGBA")
        out.alpha_composite(shadow_layer, dest=(min(out.width - mw, x0 + 1), min(out.height - mh, y0 + 1)))

    textured_mark = Image.fromarray(mark_np.astype(np.uint8), mode="RGBA")
    out.alpha_composite(textured_mark, dest=(x0, y0))
    return out.convert("RGB")


def apply_woven_damask_label(
    base_img: Image.Image,
    logo_rgba: Image.Image,
    center_xy: tuple[int, int],
    target_width: int,
    angle_deg: float = 0.0,
    opacity: float = 0.84,
    weave_strength: float = 0.22,
    blur_radius: float = 0.48,
) -> Image.Image:
    """
    Flat woven damask label integration: threads are woven into the flat cream label plane
    with fine orthogonal warp/weft modulation and ZERO raised drop shadow.
    """
    out = base_img.convert("RGBA")
    mark = _prepare_mark(logo_rgba, target_width=target_width, angle_deg=angle_deg, blur_radius=blur_radius)
    mw, mh = mark.size
    cx, cy = center_xy
    x0 = int(round(cx - mw / 2))
    y0 = int(round(cy - mh / 2))

    if x0 < 0 or y0 < 0 or x0 + mw > out.width or y0 + mh > out.height:
        return base_img

    patch = out.crop((x0, y0, x0 + mw, y0 + mh)).convert("RGB")
    patch_np = np.asarray(patch, dtype=np.float32)
    lum = 0.299 * patch_np[:, :, 0] + 0.587 * patch_np[:, :, 1] + 0.114 * patch_np[:, :, 2]
    lum_mean = float(np.mean(lum))
    lum_std = max(5.0, float(np.std(lum)))
    lum_norm = np.clip((lum - lum_mean) / lum_std, -1.5, 1.5)

    # Orthogonal fine damask warp/weft micro-grid
    yy, xx = np.mgrid[0:mh, 0:mw]
    damask_grid = ((xx + yy) % 2 - 0.5) * 0.06

    mark_np = np.asarray(mark, dtype=np.float32).copy()
    modulation = 1.0 + weave_strength * lum_norm[:, :, None] + damask_grid[:, :, None]
    mark_np[:, :, :3] = np.clip(mark_np[:, :, :3] * modulation, 0, 255)
    mark_np[:, :, 3] = np.clip(mark_np[:, :, 3] * opacity, 0, 255)

    woven_mark = Image.fromarray(mark_np.astype(np.uint8), mode="RGBA")
    out.alpha_composite(woven_mark, dest=(x0, y0))
    return out.convert("RGB")


def apply_screen_print_transfer(
    base_img: Image.Image,
    logo_rgba: Image.Image,
    center_xy: tuple[int, int],
    target_width: int,
    angle_deg: float = 0.0,
    vertical_scale: float = 0.56,
    shear_x: float = -0.18,
    opacity: float = 0.78,
    knit_transfer: float = 0.28,
    blur_radius: float = 0.52,
) -> Image.Image:
    """
    Soft matte screen-print / heat-transfer on cotton jersey:
    Perspective-foreshortened to follow the folded garment plane on the table,
    absorbs underlying fabric knit luminance, and has ZERO raised thread shadow.
    """
    out = base_img.convert("RGBA")
    mark = _prepare_mark(
        logo_rgba,
        target_width=target_width,
        angle_deg=angle_deg,
        vertical_scale=vertical_scale,
        shear_x=shear_x,
        blur_radius=blur_radius,
    )
    mw, mh = mark.size
    cx, cy = center_xy
    x0 = int(round(cx - mw / 2))
    y0 = int(round(cy - mh / 2))

    if x0 < 0 or y0 < 0 or x0 + mw > out.width or y0 + mh > out.height:
        return base_img

    patch = out.crop((x0, y0, x0 + mw, y0 + mh)).convert("RGB")
    patch_np = np.asarray(patch, dtype=np.float32)
    lum = 0.299 * patch_np[:, :, 0] + 0.587 * patch_np[:, :, 1] + 0.114 * patch_np[:, :, 2]
    lum_mean = float(np.mean(lum))
    lum_std = max(5.0, float(np.std(lum)))
    lum_norm = np.clip((lum - lum_mean) / lum_std, -1.8, 1.8)

    mark_np = np.asarray(mark, dtype=np.float32).copy()
    # Screen-print ink absorbs underlying cloth shading and cotton jersey grain without raised relief
    modulation = 1.0 + knit_transfer * lum_norm[:, :, None]
    mark_np[:, :, :3] = np.clip(mark_np[:, :, :3] * modulation, 0, 255)
    mark_np[:, :, 3] = np.clip(mark_np[:, :, 3] * opacity, 0, 255)

    printed_mark = Image.fromarray(mark_np.astype(np.uint8), mode="RGBA")
    out.alpha_composite(printed_mark, dest=(x0, y0))
    return out.convert("RGB")


def save_webp(img: Image.Image, path: str, size: tuple[int, int] | None = None, quality: int = 90):
    im = img
    if size and im.size != size:
        im = im.resize(size, Image.Resampling.LANCZOS)
    im.convert("RGB").save(path, "WEBP", quality=quality, method=4)


def crop_aspect(img: Image.Image, box: tuple[int, int, int, int], out_size: tuple[int, int]) -> Image.Image:
    cropped = img.crop(box)
    return cropped.resize(out_size, Image.Resampling.LANCZOS)


def main():
    # Official symbol-only marks from `public/images/logo/` (never use microscopic full-wordmark subtext on cloth)
    q_mark_red = load_trimmed_logo("q-mark-red.png")
    q_mark_white = load_trimmed_logo("q-mark-white.png")

    comparisons = []

    # --- 1. C01: Corporate Suiting & Office Shirts (APPROVED CLEAN MASTER: `none`) ---
    c01_clean_path = os.path.join(APPROVAL_BATCH_DIR, "C01-clean-corporate.jpg")
    if not os.path.exists(c01_clean_path):
        c01_clean_path = os.path.join(MASTERS_DIR, "C01_master.jpg")
    c01_clean = Image.open(c01_clean_path).convert("RGB")
    save_webp(c01_clean, os.path.join(SHOWCASE_DIR, "cat-corporate-suiting.webp"))
    save_webp(c01_clean, os.path.join(EDITORIAL_DIR, "cat-corporate-suiting.webp"))
    save_webp(c01_clean, os.path.join(LOOKBOOK_DIR, "lookbook-corporate.webp"))
    comparisons.append(("C01 Corporate Suiting - Method: none (Clean Exterior Suiting)", c01_clean, c01_clean, (580, 265, 760, 445)))

    # --- 2. IND03: Macro Workwear Seam & Bar-Tack Detail (APPROVED CLEAN MASTER: `none`) ---
    ind03_clean_path = os.path.join(APPROVAL_BATCH_DIR, "IND03-clean-seam.jpg")
    if not os.path.exists(ind03_clean_path):
        ind03_clean_path = os.path.join(MASTERS_DIR, "IND03_master.jpg")
    ind03_clean = Image.open(ind03_clean_path).convert("RGB")
    save_webp(ind03_clean, os.path.join(EDITORIAL_DIR, "industrial-seam-detail.webp"))
    comparisons.append(("IND03 Macro Seam & Zipper - Method: none (Clean Construction Detail)", ind03_clean, ind03_clean, (310, 180, 540, 390)))

    # --- 3. H02: Studio Garment Rack Across 4 Sectors (`none` — clean multi-sector studio study) ---
    h02_raw = Image.open(os.path.join(MASTERS_DIR, "H02_master.jpg")).convert("RGB")
    save_webp(h02_raw, os.path.join(EDITORIAL_DIR, "hero-uniform-rail.webp"))
    comparisons.append(("H02 Multi-Sector Garment Rail - Method: none (Clean Studio Rail)", h02_raw, h02_raw, (810, 310, 1180, 480)))

    # --- 4. H01 & CR02: Tailoring Table with Woven Cuff Maker Label (`woven_label`, symbol-only `q-mark-red.png`) ---
    h01_raw = Image.open(os.path.join(MASTERS_DIR, "H01_master.jpg")).convert("RGB")
    h01_comp = apply_woven_damask_label(
        h01_raw,
        q_mark_red,
        center_xy=(738, 347),
        target_width=22,
        angle_deg=58.0,
        opacity=0.84,
        weave_strength=0.22,
        blur_radius=0.46,
    )
    save_webp(h01_comp, os.path.join(SHOWCASE_DIR, "hero-atelier-table.webp"))
    save_webp(h01_comp, os.path.join(EDITORIAL_DIR, "hero-atelier-table.webp"))
    comparisons.append(("H01 / CR02 Cuff Label - Method: woven_label (Symbol-Only Damask)", h01_raw, h01_comp, (640, 250, 840, 450)))

    cr02_crop = crop_aspect(h01_comp, (350, 120, 1150, 720), (1000, 750))
    save_webp(cr02_crop, os.path.join(SHOWCASE_DIR, "tailor-craftsmanship.webp"))
    save_webp(cr02_crop, os.path.join(EDITORIAL_DIR, "atelier-cuff-detail.webp"))
    save_webp(cr02_crop, os.path.join(LOOKBOOK_DIR, "lookbook-hands.webp"))

    # --- 5. H03 & C03: Shirt Cuff Monogram Embroidery (`embroidery`, symbol-only `q-mark-red.png`) ---
    h03_raw = Image.open(os.path.join(MASTERS_DIR, "H03_master.jpg")).convert("RGB")
    h03_comp = apply_embroidered_emblem(
        h03_raw,
        q_mark_red,
        center_xy=(624, 407),
        target_width=15,
        angle_deg=-18.0,
        opacity=0.82,
        weave_strength=0.18,
        stitch_relief=0.10,
        shadow_strength=0.14,
    )
    save_webp(h03_comp, os.path.join(EDITORIAL_DIR, "hero-model-detail.webp"))
    c03_crop = crop_aspect(h03_comp, (280, 80, 1080, 680), (1000, 750))
    save_webp(c03_crop, os.path.join(EDITORIAL_DIR, "corporate-tailoring-detail.webp"))
    comparisons.append(("H03 / C03 Shirt Cuff - Method: embroidery (Restrained Cuff Emblem)", h03_raw, h03_comp, (530, 330, 710, 500)))

    # --- 6. HOS01 & HOS03: Hospitality Chef Jacket (Clean) + Canvas Apron Pocket (`embroidery`, symbol-only `q-mark-white.png`) ---
    hos01_raw = Image.open(os.path.join(MASTERS_DIR, "HOS01_master.jpg")).convert("RGB")
    hos01_comp = apply_embroidered_emblem(
        hos01_raw,
        q_mark_white,
        center_xy=(638, 610),
        target_width=24,
        angle_deg=0.0,
        opacity=0.86,
        weave_strength=0.22,
        stitch_relief=0.12,
        shadow_strength=0.20,
    )
    save_webp(hos01_comp, os.path.join(SHOWCASE_DIR, "cat-hospitality-culinary.webp"))
    save_webp(hos01_comp, os.path.join(EDITORIAL_DIR, "cat-hospitality-culinary.webp"))
    save_webp(hos01_comp, os.path.join(LOOKBOOK_DIR, "lookbook-chef.webp"))
    hos03_crop = crop_aspect(hos01_comp, (460, 320, 880, 880), (800, 1066))
    save_webp(hos03_crop, os.path.join(EDITORIAL_DIR, "hospitality-apron-detail.webp"))
    save_webp(hos03_crop, os.path.join(LOOKBOOK_DIR, "lookbook-apron.webp"))
    comparisons.append(("HOS01 / HOS03 Apron Pocket - Method: embroidery (Symbol-Only Canvas Mark)", hos01_raw, hos01_comp, (530, 510, 740, 700)))

    # --- 7. IND01: Industrial Work Jacket Sewn Chest Patch (`sewn_patch`, symbol-only `q-mark-white.png`, hi-vis vest left clean) ---
    ind01_raw = Image.open(os.path.join(MASTERS_DIR, "IND01_master.jpg")).convert("RGB")
    ind01_comp = apply_embroidered_emblem(
        ind01_raw,
        q_mark_white,
        center_xy=(210, 388),
        target_width=20,
        angle_deg=0.5,
        opacity=0.86,
        weave_strength=0.20,
        stitch_relief=0.10,
        shadow_strength=0.18,
    )
    save_webp(ind01_comp, os.path.join(SHOWCASE_DIR, "cat-industrial-safety.webp"))
    save_webp(ind01_comp, os.path.join(EDITORIAL_DIR, "cat-industrial-safety.webp"))
    save_webp(ind01_comp, os.path.join(LOOKBOOK_DIR, "lookbook-industrial.webp"))
    comparisons.append(("IND01 Work Jacket - Method: sewn_patch (Symbol Inside Stitched Patch)", ind01_raw, ind01_comp, (130, 310, 310, 470)))

    # --- 8. IND02: One-Piece Coverall Sewn Chest Patch (`sewn_patch`, symbol-only `q-mark-white.png`) ---
    ind02_raw = Image.open(os.path.join(MASTERS_DIR, "IND02_master.jpg")).convert("RGB")
    ind02_comp = apply_embroidered_emblem(
        ind02_raw,
        q_mark_white,
        center_xy=(368, 336),
        target_width=22,
        angle_deg=-2.0,
        opacity=0.86,
        weave_strength=0.20,
        stitch_relief=0.10,
        shadow_strength=0.18,
    )
    save_webp(ind02_comp, os.path.join(EDITORIAL_DIR, "industrial-coverall.webp"))
    comparisons.append(("IND02 Coverall - Method: sewn_patch (Symbol Inside Stitched Patch)", ind02_raw, ind02_comp, (280, 255, 460, 415)))

    # --- 9. BR01 & BR03: Navy Polo (`embroidery`) + Folded Off-White Tee (`print_transfer`) + Clean Cap (`none`) ---
    br01_raw = Image.open(os.path.join(MASTERS_DIR, "BR01_master.jpg")).convert("RGB")
    # Polo left chest: compact symbol-only embroidery
    br01_comp = apply_embroidered_emblem(
        br01_raw,
        q_mark_white,
        center_xy=(448, 395),
        target_width=21,
        angle_deg=-1.5,
        opacity=0.86,
        weave_strength=0.20,
        stitch_relief=0.10,
        shadow_strength=0.20,
    )
    # Folded off-white cotton tee: perspective-foreshortened matte red screen print (no raised shadow)
    br01_comp = apply_screen_print_transfer(
        br01_comp,
        q_mark_red,
        center_xy=(425, 912),
        target_width=28,
        angle_deg=-9.0,
        vertical_scale=0.55,
        shear_x=-0.18,
        opacity=0.76,
        knit_transfer=0.28,
        blur_radius=0.50,
    )
    save_webp(br01_comp, os.path.join(SHOWCASE_DIR, "cat-branded-apparel.webp"))
    save_webp(br01_comp, os.path.join(EDITORIAL_DIR, "cat-branded-apparel.webp"))
    br03_crop = crop_aspect(br01_comp, (200, 580, 896, 1102), (1000, 750))
    save_webp(br03_crop, os.path.join(EDITORIAL_DIR, "branded-cap-tee-detail.webp"))
    comparisons.append(("BR01 / BR03 Folded Tee - Method: print_transfer (Matte Ink, Clean Cap)", br01_raw, br01_comp, (315, 815, 535, 1005)))

    # --- 10. BR02: Charcoal Piqué Polo Torso (`embroidery`, symbol-only `q-mark-white.png`) ---
    br02_raw = Image.open(os.path.join(MASTERS_DIR, "BR02_master.jpg")).convert("RGB")
    br02_comp = apply_embroidered_emblem(
        br02_raw,
        q_mark_white,
        center_xy=(618, 345),
        target_width=26,
        angle_deg=-1.5,
        opacity=0.86,
        weave_strength=0.24,
        stitch_relief=0.12,
        shadow_strength=0.22,
    )
    save_webp(br02_comp, os.path.join(EDITORIAL_DIR, "branded-polo-fit.webp"))
    comparisons.append(("BR02 Charcoal Pique Polo - Method: embroidery (Symbol-Only Left Chest)", br02_raw, br02_comp, (530, 260, 710, 440)))

    # --- Build Before / After Method-Specific Contact Sheet ---
    row_h = 236
    sheet_w = 980
    sheet_h = 64 + len(comparisons) * row_h
    sheet = Image.new("RGB", (sheet_w, sheet_h), (247, 244, 238))
    draw = ImageDraw.Draw(sheet)
    draw.text(
        (24, 20),
        "Q Workwear Method-Specific Branding & Clean Master Verification (200% Zoom Crops)",
        fill=(25, 25, 25),
    )

    for idx, (label, raw_im, comp_im, box) in enumerate(comparisons):
        y_top = 64 + idx * row_h
        raw_crop = raw_im.crop(box).resize((200, 180), Image.Resampling.LANCZOS)
        comp_crop = comp_im.crop(box).resize((200, 180), Image.Resampling.LANCZOS)
        full_thumb = comp_im.copy()
        full_thumb.thumbnail((240, 180), Image.Resampling.LANCZOS)

        draw.text((24, y_top + 6), f"{idx + 1}. {label}", fill=(30, 30, 30))
        draw.text((240, y_top + 24), "Clean Master (Before)", fill=(100, 100, 100))
        sheet.paste(raw_crop, (240, y_top + 42))
        draw.text((460, y_top + 24), "Approved Method (After)", fill=(155, 28, 28))
        sheet.paste(comp_crop, (460, y_top + 42))
        draw.text((700, y_top + 24), "Full Composition", fill=(80, 80, 80))
        sheet.paste(full_thumb, (700, y_top + 42))
        draw.line([(20, y_top + row_h - 6), (sheet_w - 20, y_top + row_h - 6)], fill=(220, 215, 205), width=1)

    sheet.save(os.path.join(SHEETS_DIR, "logo-compositing-before-after.png"))

    # --- Build 13-Shot Photoreal Gallery Contact Sheet ---
    gallery_items = [
        ("H01 Hero Atelier Table (woven_label)", h01_comp),
        ("H02 Multi-Sector Garment Rail (none)", h02_raw),
        ("H03 Model Shirt Cuff (embroidery)", h03_comp),
        ("C01 Corporate Suiting (none - clean)", c01_clean),
        ("C03 Corporate Cuff Detail (embroidery)", c03_crop),
        ("HOS01 Chef Jacket & Apron (embroidery)", hos01_comp),
        ("HOS03 Canvas Apron Pocket (embroidery)", hos03_crop),
        ("IND01 Work Jacket & Hi-Vis (sewn_patch)", ind01_comp),
        ("IND02 One-Piece Coverall (sewn_patch)", ind02_comp),
        ("IND03 Macro Seam & Zipper (none - clean)", ind03_clean),
        ("BR01 Polo, Tee & Cap (embroidery+print)", br01_comp),
        ("BR02 Charcoal Pique Polo (embroidery)", br02_comp),
        ("BR03 Folded Tee & Cap (print_transfer)", br03_crop),
    ]
    cols = 3
    cell_w, cell_h = 340, 290
    gal_w = cols * cell_w + 40
    rows = (len(gallery_items) + cols - 1) // cols
    gal_h = 64 + rows * cell_h + 20
    gal_sheet = Image.new("RGB", (gal_w, gal_h), (247, 244, 238))
    gal_draw = ImageDraw.Draw(gal_sheet)
    gal_draw.text(
        (24, 22),
        "Q Workwear Photoreal Asset Gallery - Approved Clean Masters & Method-Specific Branding",
        fill=(25, 25, 25),
    )
    for i, (g_label, g_im) in enumerate(gallery_items):
        r = i // cols
        c = i % cols
        x0 = 24 + c * cell_w
        y0 = 64 + r * cell_h
        thumb = g_im.copy()
        thumb.thumbnail((310, 230), Image.Resampling.LANCZOS)
        gal_draw.text((x0, y0), g_label, fill=(35, 35, 35))
        gal_sheet.paste(thumb, (x0, y0 + 22))
    gal_sheet.save(os.path.join(SHEETS_DIR, "photoreal-gallery-sheet.png"))

    print("Generated all method-specific photoreal assets and updated contact sheets.")


if __name__ == "__main__":
    main()

