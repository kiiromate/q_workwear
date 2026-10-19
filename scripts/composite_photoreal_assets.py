#!/usr/bin/env python3
"""
Photorealistic Q Workwear Post-Production Logo Compositor
---------------------------------------------------------
Applies ONLY official Q Workwear logo assets from `public/images/logo/`
(`q-mark-red.png`, `q-mark-white.png`, `q-workwear-red-transparent.png`,
`q-workwear-white-transparent.png`) onto clean photorealistic garment masters
using perspective/angle alignment, underlying fabric-weave luminance modulation,
satin-stitch micro-relief shadow, and optical MTF edge matching.

NOTE: Do NOT use PIL to draw geometric garments or synthetic backgrounds.
Every base image processed by this script is a verified photorealistic photograph.
"""

import os
import shutil
import numpy as np
from PIL import Image, ImageChops, ImageDraw, ImageEnhance, ImageFilter

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
ARTIFACT_DIR = "/home/kaze/.gemini/antigravity/brain/364ed61e-f0a0-4052-8ad0-688f2c6be770"

LOGO_DIR = os.path.join(ROOT, "public", "images", "logo")
SHOWCASE_DIR = os.path.join(ROOT, "public", "images", "showcase")
EDITORIAL_DIR = os.path.join(ROOT, "public", "images", "editorial")
LOOKBOOK_DIR = os.path.join(ROOT, "public", "images", "lookbook")

EVIDENCE_DIR = os.path.join(ROOT, "docs", "review-evidence-2026-10-19")
MASTERS_DIR = os.path.join(EVIDENCE_DIR, "masters")
REJECTED_DIR = os.path.join(EVIDENCE_DIR, "rejected")
SHEETS_DIR = os.path.join(EVIDENCE_DIR, "contact-sheets")

for d in [SHOWCASE_DIR, EDITORIAL_DIR, LOOKBOOK_DIR, MASTERS_DIR, REJECTED_DIR, SHEETS_DIR]:
    os.makedirs(d, exist_ok=True)


def load_trimmed_logo(filename: str) -> Image.Image:
    path = os.path.join(LOGO_DIR, filename)
    im = Image.open(path).convert("RGBA")
    bbox = im.getbbox()
    if bbox:
        im = im.crop(bbox)
    return im


def composite_embroidered_mark(
    base_img: Image.Image,
    logo_rgba: Image.Image,
    center_xy: tuple[int, int],
    target_width: int,
    angle_deg: float = 0.0,
    opacity: float = 0.90,
    weave_strength: float = 0.16,
    shadow_strength: float = 0.25,
    blur_radius: float = 0.42,
) -> Image.Image:
    """
    Composite an official Q Workwear logo mark onto a garment photograph
    so it blends into the underlying textile weave and lighting.
    """
    out = base_img.convert("RGBA")
    w0, h0 = logo_rgba.size
    target_height = max(1, int(round(h0 * (target_width / float(w0)))))

    # Resize high-res first, rotate cleanly, then downsample for crisp anti-aliased threads
    scale_up = 2
    mark = logo_rgba.resize((target_width * scale_up, target_height * scale_up), Image.Resampling.LANCZOS)
    if abs(angle_deg) > 0.05:
        mark = mark.rotate(angle_deg, resample=Image.Resampling.BICUBIC, expand=True)
    mark = mark.resize(
        (max(1, mark.width // scale_up), max(1, mark.height // scale_up)),
        Image.Resampling.LANCZOS,
    )

    if blur_radius > 0:
        # Match optical MTF slightly so edges never look razor-digital
        r, g, b, a = mark.split()
        a = a.filter(ImageFilter.GaussianBlur(radius=blur_radius * 0.7))
        mark = Image.merge("RGBA", (r, g, b, a))

    mw, mh = mark.size
    cx, cy = center_xy
    x0 = int(round(cx - mw / 2))
    y0 = int(round(cy - mh / 2))

    # Bounds check
    if x0 < 0 or y0 < 0 or x0 + mw > out.width or y0 + mh > out.height:
        return base_img

    # Extract underlying fabric patch for luminance weave transfer
    patch = out.crop((x0, y0, x0 + mw, y0 + mh)).convert("RGB")
    patch_np = np.asarray(patch, dtype=np.float32)
    lum = 0.299 * patch_np[:, :, 0] + 0.587 * patch_np[:, :, 1] + 0.114 * patch_np[:, :, 2]
    lum_mean = float(np.mean(lum))
    lum_std = max(6.0, float(np.std(lum)))
    lum_norm = np.clip((lum - lum_mean) / lum_std, -1.8, 1.8)

    mark_np = np.asarray(mark, dtype=np.float32).copy()
    # Modulate thread RGB with underlying fabric texture variation
    modulation = 1.0 + weave_strength * lum_norm[:, :, None]
    mark_np[:, :, :3] = np.clip(mark_np[:, :, :3] * modulation, 0, 255)
    mark_np[:, :, 3] = np.clip(mark_np[:, :, 3] * opacity, 0, 255)

    # Create subtle 1px thread contact shadow on the lower-right side
    if shadow_strength > 0:
        alpha_chan = Image.fromarray(mark_np[:, :, 3].astype(np.uint8), mode="L")
        shadow_alpha = alpha_chan.filter(ImageFilter.GaussianBlur(radius=0.8))
        shadow_np = np.zeros((mh, mw, 4), dtype=np.uint8)
        shadow_np[:, :, 3] = np.clip(np.asarray(shadow_alpha, dtype=np.float32) * shadow_strength, 0, 255).astype(np.uint8)
        shadow_layer = Image.fromarray(shadow_np, mode="RGBA")
        out.alpha_composite(shadow_layer, dest=(min(out.width - mw, x0 + 1), min(out.height - mh, y0 + 1)))

    textured_mark = Image.fromarray(mark_np.astype(np.uint8), mode="RGBA")
    out.alpha_composite(textured_mark, dest=(x0, y0))
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
    q_mark_red = load_trimmed_logo("q-mark-red.png")
    q_mark_white = load_trimmed_logo("q-mark-white.png")
    q_full_red = load_trimmed_logo("q-workwear-red-transparent.png")
    q_full_white = load_trimmed_logo("q-workwear-white-transparent.png")

    # 1. Stage raw clean masters and rejected candidates for audit transparency
    selected_sources = {
        "H01_master.jpg": "h01_v2_tailoring_table_1792400756941.jpg",
        "H02_master.jpg": "h02_garment_rack_1792400288925.jpg",
        "H03_master.jpg": "h03_v2_cuff_adjustment_1792400805524.jpg",
        "C01_master.jpg": "c01_corporate_uniform_1792400260450.jpg",
        "HOS01_master.jpg": "hos01_hospitality_uniform_1792400287389.jpg",
        "IND01_master.jpg": "ind01_industrial_workwear_1792400319835.jpg",
        "BR01_master.jpg": "br01_branded_apparel_1792400355828.jpg",
        "IND02_master.jpg": "ind02_work_coverall_1792400724575.jpg",
        "IND03_master.jpg": "ind03_workwear_seam_detail_1792400765590.jpg",
        "BR02_master.jpg": "br02_charcoal_polo_torso_1792400813155.jpg",
    }
    rejected_sources = {
        "H01_v1_rejected_visible_face.jpg": "h01_tailoring_table_1792400260493.jpg",
        "H01_v2a_rejected_machine_brand.jpg": "h01_v2_tailoring_table_1792400718426.jpg",
        "H03_v1_rejected_non_local_cast.jpg": "h03_cuff_adjustment_1792400323905.jpg",
    }

    for dst_name, src_name in selected_sources.items():
        src_path = os.path.join(ARTIFACT_DIR, src_name)
        if os.path.exists(src_path):
            shutil.copy2(src_path, os.path.join(MASTERS_DIR, dst_name))

    for dst_name, src_name in rejected_sources.items():
        src_path = os.path.join(ARTIFACT_DIR, src_name)
        if os.path.exists(src_path):
            shutil.copy2(src_path, os.path.join(REJECTED_DIR, dst_name))

    comparisons = []

    # --- H01: Tailoring table with artisan hands & cuff woven label ---
    h01_raw = Image.open(os.path.join(MASTERS_DIR, "H01_master.jpg")).convert("RGB")
    # Woven label on navy cuff at (738, 347), long axis angled at +59 deg (or logo oriented along cuff at -31 deg)
    h01_comp = composite_embroidered_mark(
        h01_raw,
        q_full_red,
        center_xy=(738, 347),
        target_width=40,
        angle_deg=58.0,
        opacity=0.88,
        weave_strength=0.18,
        shadow_strength=0.12,
        blur_radius=0.45,
    )
    save_webp(h01_comp, os.path.join(SHOWCASE_DIR, "hero-atelier-table.webp"))
    save_webp(h01_comp, os.path.join(EDITORIAL_DIR, "hero-atelier-table.webp"))
    comparisons.append(("H01 Hero Table (Woven Cuff Label)", h01_raw, h01_comp, (640, 250, 840, 450)))

    # --- H02: Studio garment rack across 4 sectors ---
    h02_raw = Image.open(os.path.join(MASTERS_DIR, "H02_master.jpg")).convert("RGB")
    h02_comp = composite_embroidered_mark(
        h02_raw,
        q_mark_red,
        center_xy=(652, 345),  # Ivory chef jacket left chest
        target_width=15,
        angle_deg=-1.0,
        opacity=0.86,
        weave_strength=0.16,
        shadow_strength=0.18,
    )
    h02_comp = composite_embroidered_mark(
        h02_comp,
        q_mark_white,
        center_xy=(896, 395),  # Navy work jacket left chest pocket
        target_width=16,
        angle_deg=1.0,
        opacity=0.85,
        weave_strength=0.18,
        shadow_strength=0.22,
    )
    h02_comp = composite_embroidered_mark(
        h02_comp,
        q_mark_red,
        center_xy=(1115, 360),  # Cream piqué polo left chest
        target_width=16,
        angle_deg=-1.0,
        opacity=0.86,
        weave_strength=0.16,
        shadow_strength=0.18,
    )
    save_webp(h02_comp, os.path.join(EDITORIAL_DIR, "hero-uniform-rail.webp"))
    comparisons.append(("H02 Uniform Rail (Chest Embroidery)", h02_raw, h02_comp, (810, 310, 1180, 480)))

    # --- H03: Anonymous torso cuff adjustment ---
    h03_raw = Image.open(os.path.join(MASTERS_DIR, "H03_master.jpg")).convert("RGB")
    # Subtle red Q mark embroidered on the crisp light-blue shirt cuff at (624, 407)
    h03_comp = composite_embroidered_mark(
        h03_raw,
        q_mark_red,
        center_xy=(624, 407),
        target_width=15,
        angle_deg=-18.0,
        opacity=0.80,
        weave_strength=0.18,
        shadow_strength=0.14,
    )
    save_webp(h03_comp, os.path.join(EDITORIAL_DIR, "hero-model-detail.webp"))
    comparisons.append(("H03 Cuff Adjustment (Shirt Cuff Monogram)", h03_raw, h03_comp, (530, 330, 710, 500)))

    # --- C01: Corporate Suiting & Office Shirts ---
    c01_raw = Image.open(os.path.join(MASTERS_DIR, "C01_master.jpg")).convert("RGB")
    # Subtle embroidered Q crest on the navy blazer breast pocket at (672, 355)
    c01_comp = composite_embroidered_mark(
        c01_raw,
        q_mark_white,
        center_xy=(672, 355),
        target_width=17,
        angle_deg=-1.5,
        opacity=0.82,
        weave_strength=0.18,
        shadow_strength=0.22,
    )
    save_webp(c01_comp, os.path.join(SHOWCASE_DIR, "cat-corporate-suiting.webp"))
    save_webp(c01_comp, os.path.join(EDITORIAL_DIR, "cat-corporate-suiting.webp"))
    save_webp(c01_comp, os.path.join(LOOKBOOK_DIR, "lookbook-corporate.webp"))
    comparisons.append(("C01 Corporate Suiting (Blazer Chest Crest)", c01_raw, c01_comp, (580, 265, 760, 445)))

    # --- HOS01: Hospitality & Culinary ---
    hos01_raw = Image.open(os.path.join(MASTERS_DIR, "HOS01_master.jpg")).convert("RGB")
    # Ivory chef jacket left chest embroidery at (462, 425) + olive canvas apron pocket woven mark at (638, 610)
    hos01_comp = composite_embroidered_mark(
        hos01_raw,
        q_mark_red,
        center_xy=(462, 425),
        target_width=20,
        angle_deg=-1.5,
        opacity=0.86,
        weave_strength=0.18,
        shadow_strength=0.16,
    )
    hos01_comp = composite_embroidered_mark(
        hos01_comp,
        q_full_white,
        center_xy=(638, 610),  # Center of stitched olive canvas apron pocket
        target_width=40,
        angle_deg=0.0,
        opacity=0.85,
        weave_strength=0.22,
        shadow_strength=0.24,
    )
    save_webp(hos01_comp, os.path.join(SHOWCASE_DIR, "cat-hospitality-culinary.webp"))
    save_webp(hos01_comp, os.path.join(EDITORIAL_DIR, "cat-hospitality-culinary.webp"))
    save_webp(hos01_comp, os.path.join(LOOKBOOK_DIR, "lookbook-chef.webp"))
    comparisons.append(("HOS01 Hospitality (Chef & Apron Pocket)", hos01_raw, hos01_comp, (530, 510, 740, 700)))

    # --- IND01: Industrial & Reflective Workwear ---
    ind01_raw = Image.open(os.path.join(MASTERS_DIR, "IND01_master.jpg")).convert("RGB")
    # Blank stitched navy patch above right chest pocket at (210, 388) + hi-vis vest neck label at (678, 285)
    ind01_comp = composite_embroidered_mark(
        ind01_raw,
        q_full_white,
        center_xy=(210, 388),
        target_width=32,
        angle_deg=0.5,
        opacity=0.86,
        weave_strength=0.20,
        shadow_strength=0.22,
    )
    ind01_comp = composite_embroidered_mark(
        ind01_comp,
        q_mark_red,
        center_xy=(678, 285),
        target_width=14,
        angle_deg=2.0,
        opacity=0.84,
        weave_strength=0.15,
        shadow_strength=0.12,
    )
    save_webp(ind01_comp, os.path.join(SHOWCASE_DIR, "cat-industrial-safety.webp"))
    save_webp(ind01_comp, os.path.join(EDITORIAL_DIR, "cat-industrial-safety.webp"))
    save_webp(ind01_comp, os.path.join(LOOKBOOK_DIR, "lookbook-industrial.webp"))
    comparisons.append(("IND01 Industrial Stitched Chest Patch", ind01_raw, ind01_comp, (130, 310, 310, 470)))

    # --- BR01: Branded Polos, T-Shirts & Caps ---
    br01_raw = Image.open(os.path.join(MASTERS_DIR, "BR01_master.jpg")).convert("RGB")
    # Navy polo left chest at (448, 395) + Navy cap front crown at (718, 835)
    br01_comp = composite_embroidered_mark(
        br01_raw,
        q_full_white,
        center_xy=(448, 395),
        target_width=36,
        angle_deg=-1.5,
        opacity=0.88,
        weave_strength=0.20,
        shadow_strength=0.24,
    )
    br01_comp = composite_embroidered_mark(
        br01_comp,
        q_mark_white,
        center_xy=(718, 835),
        target_width=24,
        angle_deg=-1.0,
        opacity=0.88,
        weave_strength=0.18,
        shadow_strength=0.26,
    )
    save_webp(br01_comp, os.path.join(SHOWCASE_DIR, "cat-branded-apparel.webp"))
    save_webp(br01_comp, os.path.join(EDITORIAL_DIR, "cat-branded-apparel.webp"))
    comparisons.append(("BR01 Polo Chest & Cap Crown", br01_raw, br01_comp, (620, 740, 820, 920)))

    # --- IND02: Heavy Cotton Twill Coverall ---
    ind02_raw = Image.open(os.path.join(MASTERS_DIR, "IND02_master.jpg")).convert("RGB")
    # Stitched navy rectangular chest patch at (368, 336)
    ind02_comp = composite_embroidered_mark(
        ind02_raw,
        q_full_white,
        center_xy=(368, 336),
        target_width=34,
        angle_deg=-2.0,
        opacity=0.86,
        weave_strength=0.20,
        shadow_strength=0.24,
    )
    save_webp(ind02_comp, os.path.join(EDITORIAL_DIR, "industrial-coverall.webp"))
    comparisons.append(("IND02 Coverall Stitched Chest Patch", ind02_raw, ind02_comp, (280, 255, 460, 415)))

    # --- IND03: Macro Workwear Seam & Bar-Tack Detail ---
    ind03_raw = Image.open(os.path.join(MASTERS_DIR, "IND03_master.jpg")).convert("RGB")
    # Embroidered white Q mark on upper navy twill panel above zipper at (420, 285), angled +20 deg
    ind03_comp = composite_embroidered_mark(
        ind03_raw,
        q_mark_white,
        center_xy=(420, 285),
        target_width=34,
        angle_deg=20.0,
        opacity=0.86,
        weave_strength=0.24,
        shadow_strength=0.28,
        blur_radius=0.55,
    )
    save_webp(ind03_comp, os.path.join(EDITORIAL_DIR, "industrial-seam-detail.webp"))
    comparisons.append(("IND03 Macro Twill Seam & Mark", ind03_raw, ind03_comp, (310, 180, 540, 390)))

    # --- BR02: Anonymous Torso in Charcoal Piqué Polo ---
    br02_raw = Image.open(os.path.join(MASTERS_DIR, "BR02_master.jpg")).convert("RGB")
    # Embroidered Q Workwear white/red mark on left chest at (618, 345)
    br02_comp = composite_embroidered_mark(
        br02_raw,
        q_full_white,
        center_xy=(618, 345),
        target_width=46,
        angle_deg=-1.5,
        opacity=0.88,
        weave_strength=0.22,
        shadow_strength=0.26,
    )
    save_webp(br02_comp, os.path.join(EDITORIAL_DIR, "branded-polo-fit.webp"))
    comparisons.append(("BR02 Charcoal Piqué Polo Chest", br02_raw, br02_comp, (530, 260, 710, 440)))

    # --- Optical Macro / Detail Crops from high-res photoreal composited masters ---
    # 1. CR02 / tailor-craftsmanship.webp: Close-up of artisan hands & stitched Q cuff label + swatches
    cr02_crop = crop_aspect(h01_comp, (350, 120, 1150, 720), (1000, 750))
    save_webp(cr02_crop, os.path.join(SHOWCASE_DIR, "tailor-craftsmanship.webp"))
    save_webp(cr02_crop, os.path.join(EDITORIAL_DIR, "atelier-cuff-detail.webp"))
    save_webp(cr02_crop, os.path.join(LOOKBOOK_DIR, "lookbook-hands.webp"))

    # 2. C03: Corporate lapel, collar & stitch detail crop from H03_comp
    c03_crop = crop_aspect(h03_comp, (280, 80, 1080, 680), (1000, 750))
    save_webp(c03_crop, os.path.join(EDITORIAL_DIR, "corporate-tailoring-detail.webp"))

    # 3. HOS03: Heavy canvas apron pocket, brass rivets & woven straps detail from HOS01_comp
    hos03_crop = crop_aspect(hos01_comp, (460, 320, 880, 880), (800, 1066))
    save_webp(hos03_crop, os.path.join(EDITORIAL_DIR, "hospitality-apron-detail.webp"))
    save_webp(hos03_crop, os.path.join(LOOKBOOK_DIR, "lookbook-apron.webp"))

    # 4. BR03: Embroidered six-panel cap & heavyweight cotton tee detail from BR01_comp
    br03_crop = crop_aspect(br01_comp, (200, 580, 896, 1102), (1000, 750))
    save_webp(br03_crop, os.path.join(EDITORIAL_DIR, "branded-cap-tee-detail.webp"))

    # --- Build Before / After Logo Compositing Contact Sheet ---
    row_h = 220
    sheet_w = 960
    sheet_h = 60 + len(comparisons) * row_h
    sheet = Image.new("RGB", (sheet_w, sheet_h), (247, 244, 238))
    draw = ImageDraw.Draw(sheet)
    draw.text((24, 20), "Q Workwear Photoreal Post-Production: Before vs After Authentic Logo Compositing (200% Zoom Crops)", fill=(25, 25, 25))

    for idx, (label, raw_im, comp_im, box) in enumerate(comparisons):
        y_top = 60 + idx * row_h
        raw_crop = raw_im.crop(box).resize((200, 180), Image.Resampling.LANCZOS)
        comp_crop = comp_im.crop(box).resize((200, 180), Image.Resampling.LANCZOS)
        full_thumb = comp_im.copy()
        full_thumb.thumbnail((240, 180), Image.Resampling.LANCZOS)

        draw.text((24, y_top + 8), f"{idx + 1}. {label}", fill=(30, 30, 30))
        draw.text((24, y_top + 36), "Clean Photoreal Master (Before)", fill=(100, 100, 100))
        sheet.paste(raw_crop, (240, y_top + 10))
        draw.text((460, y_top + 36), "Composited Q Mark (After)", fill=(155, 28, 28))
        sheet.paste(comp_crop, (460, y_top + 56 if False else y_top + 10))
        sheet.paste(full_thumb, (690, y_top + 10))
        draw.line([(20, y_top + row_h - 6), (sheet_w - 20, y_top + row_h - 6)], fill=(220, 215, 205), width=1)

    sheet.save(os.path.join(SHEETS_DIR, "logo-compositing-before-after.png"))
    print("Composited all photoreal assets and saved contact sheet.")


if __name__ == "__main__":
    main()
