"""
ARCHIVED / RETIRED (2026-10-19 — Issue #3 Corrective Build):
This procedural Pillow geometric art generator was retired after client visual review
rejected 2D polygon garment illustrations.
Production assets in `public/images/lookbook/` and `public/images/editorial/` are now
photorealistic photographs processed by `scripts/composite_photoreal_assets.py`.
Do NOT run this script against `public/images/`.
"""
import sys
sys.exit("ARCHIVED: Use scripts/composite_photoreal_assets.py for photorealistic assets.")

import os
import math
from PIL import Image, ImageDraw, ImageFilter

os.makedirs('public/images/lookbook', exist_ok=True)

def draw_twill(draw, w, h, bg_color, line_color, spacing=5, angle=45):
    rad = math.radians(angle)
    for i in range(-w, w + h, spacing):
        draw.line([(i, 0), (i + int(h * math.tan(rad)), h)], fill=line_color, width=1)

def create_chef_lookbook():
    w, h = 1200, 900
    img = Image.new('RGB', (w, h), (18, 16, 14))
    draw = ImageDraw.Draw(img, 'RGBA')
    # Soft warm kitchen/dining ambient background
    for y in range(0, h, 20):
        c = int(22 + 12 * math.sin(y / 150.0))
        draw.rectangle([(0, y), (w, y + 20)], fill=(c + 6, c + 2, c))
    
    # Crisp white executive chef coat torso
    draw.polygon([(250, 0), (950, 0), (820, 900), (180, 900)], fill=(245, 246, 248))
    # Elegant black piping down asymmetrical front placket
    draw.line([(620, 0), (520, 900)], fill=(20, 20, 22), width=8)
    
    # Cloth knot buttons
    for by in [160, 290, 420, 550, 680]:
        bx = int(580 - (by / 900.0) * 80)
        draw.ellipse([(bx - 14, by - 14), (bx + 14, by + 14)], fill=(28, 28, 30))
        draw.ellipse([(bx - 8, by - 8), (bx + 8, by + 8)], fill=(45, 45, 50))
        
    # Cool-vent breathable mesh panel along shoulder/side
    draw.polygon([(250, 0), (380, 0), (320, 450), (220, 450)], fill=(228, 230, 235))
    for my in range(0, 450, 6):
        for mx in range(220, 380, 6):
            draw.ellipse([(mx, my), (mx + 2, my + 2)], fill=(190, 195, 200))

    # Embroidered chef name & Kigali hotel monogram on left chest
    cx, cy = 380, 280
    draw.line([(cx, cy), (cx + 120, cy)], fill=(224, 72, 58), width=3)
    draw.line([(cx, cy + 12), (cx + 90, cy + 12)], fill=(100, 100, 105), width=2)

    # Vignette
    overlay = Image.new('RGBA', (w, h), (0, 0, 0, 0))
    odraw = ImageDraw.Draw(overlay)
    for r in range(0, 200, 10):
        odraw.rectangle([(r, r), (w - r, h - r)], outline=(0, 0, 0, int(180 * (1 - r/200.0))), width=10)
    img = Image.alpha_composite(img.convert('RGBA'), overlay)
    img.convert('RGB').save('public/images/lookbook/lookbook-chef.webp', 'WEBP', quality=88)
    print('Generated lookbook-chef.webp')

def create_apron_lookbook():
    w, h = 1200, 900
    img = Image.new('RGB', (w, h), (24, 22, 20))
    draw = ImageDraw.Draw(img, 'RGBA')
    
    # Heavy washed duck canvas in artisan charcoal-olive
    draw.rectangle([(0, 0), (w, h)], fill=(40, 44, 42))
    draw_twill(draw, w, h, (40, 44, 42), (48, 52, 50), spacing=4)
    
    # Genuine tan leather cross-back harness straps
    draw.polygon([(400, 0), (470, 0), (750, 900), (680, 900)], fill=(168, 102, 52))
    draw.polygon([(800, 0), (730, 0), (450, 900), (520, 900)], fill=(168, 102, 52))
    
    # Solid antique brass grommets
    for gx, gy in [(435, 180), (765, 180)]:
        draw.ellipse([(gx - 26, gy - 26), (gx + 26, gy + 26)], fill=(210, 168, 85), outline=(130, 95, 40), width=4)
        draw.ellipse([(gx - 14, gy - 14), (gx + 14, gy + 14)], fill=(25, 25, 25))
        
    # Kangaroo waist pocket with pen slots and brass rivets
    px0, py0, px1, py1 = 300, 480, 900, 840
    draw.rectangle([(px0, py0), (px1, py1)], fill=(48, 52, 50), outline=(62, 68, 65), width=2)
    # Pocket partition lines
    draw.line([(550, py0), (550, py1)], fill=(35, 38, 36), width=3)
    draw.line([(650, py0), (650, py1)], fill=(35, 38, 36), width=3)
    # Red bar-tack reinforcement
    for rx in [px0 + 8, 550, 650, px1 - 8]:
        draw.line([(rx - 6, py0 + 6), (rx + 6, py0 + 6)], fill=(224, 72, 58), width=4)

    img.save('public/images/lookbook/lookbook-apron.webp', 'WEBP', quality=88)
    print('Generated lookbook-apron.webp')

def create_corporate_lookbook():
    w, h = 1200, 900
    img = Image.new('RGB', (w, h), (16, 18, 22))
    draw = ImageDraw.Draw(img, 'RGBA')
    
    # Executive banking boardroom backdrop
    draw_twill(draw, w, h, (16, 18, 22), (24, 26, 32), spacing=4)
    
    # Oxford cotton white & blue collared shirt
    draw.polygon([(350, 0), (850, 0), (740, 900), (280, 900)], fill=(235, 242, 250))
    # Tailored Suiting Blazer in Midnight Navy
    draw.polygon([(0, 0), (450, 0), (320, 900), (0, 900)], fill=(20, 28, 44))
    draw.polygon([(1200, 0), (750, 0), (840, 900), (1200, 900)], fill=(20, 28, 44))
    
    # Silk pocket square fold in burgundy red
    draw.polygon([(260, 320), (340, 280), (360, 340), (280, 350)], fill=(165, 38, 30))
    # Pick stitching detail along lapel
    for ly in range(0, 900, 10):
        lx = int(450 - (ly / 900.0) * 130)
        draw.line([(lx, ly), (lx - 2, ly + 5)], fill=(100, 120, 150), width=1)
        
    img.save('public/images/lookbook/lookbook-corporate.webp', 'WEBP', quality=88)
    print('Generated lookbook-corporate.webp')

def create_industrial_lookbook():
    w, h = 1200, 900
    img = Image.new('RGB', (w, h), (14, 18, 24))
    draw = ImageDraw.Draw(img, 'RGBA')
    
    # 300 GSM heavy cotton drill navy canvas
    draw.rectangle([(0, 0), (w, h)], fill=(18, 28, 46))
    draw_twill(draw, w, h, (18, 28, 46), (24, 38, 62), spacing=5)
    
    # Diagonal high-vis fluorescent lime panel
    draw.polygon([(0, 180), (1200, 100), (1200, 380), (0, 460)], fill=(225, 235, 30))
    # 50mm silver reflective tape
    draw.polygon([(0, 270), (1200, 190), (1200, 310), (0, 390)], fill=(235, 240, 245))
    
    # Heavy brass industrial zipper
    zx = 600
    for zy in range(0, h, 10):
        draw.rectangle([(zx - 10, zy), (zx + 10, zy + 5)], fill=(200, 160, 60))
    draw.line([(zx, 0), (zx, h)], fill=(10, 15, 25), width=3)
    
    # Radio / mic loop and pen slot
    draw.rectangle([(320, 320), (380, 400)], fill=(18, 28, 46), outline=(225, 235, 30), width=2)
    
    img.save('public/images/lookbook/lookbook-industrial.webp', 'WEBP', quality=88)
    print('Generated lookbook-industrial.webp')

def create_tailor_hands_lookbook():
    w, h = 1200, 900
    img = Image.new('RGB', (w, h), (20, 16, 14))
    draw = ImageDraw.Draw(img, 'RGBA')
    
    # Workshop wooden cutting table
    for y in range(0, h, 60):
        draw.rectangle([(0, y), (w, y + 60)], fill=(26 + (y % 120)//20, 20, 17))
        draw.line([(0, y), (w, y)], fill=(10, 8, 7), width=2)
        
    # Fabric being measured and cut with shears
    draw.polygon([(100, 150), (900, 80), (820, 850), (40, 750)], fill=(224, 72, 58))
    draw_twill(draw, w, h, (224, 72, 58), (200, 55, 42), spacing=5)
    
    # Tailor's chalk curve lines
    draw.line([(250, 300), (750, 450)], fill=(255, 255, 255, 180), width=3)
    draw.line([(280, 350), (700, 520)], fill=(255, 255, 255, 140), width=2)
    
    # Tailor shears cutting along chalk line
    draw.polygon([(650, 350), (950, 220), (980, 260), (700, 400)], fill=(210, 215, 225))
    draw.polygon([(630, 420), (940, 520), (960, 480), (670, 390)], fill=(180, 185, 195))
    draw.ellipse([(930, 180), (1050, 300)], outline=(190, 195, 205), width=14)
    draw.ellipse([(920, 450), (1040, 570)], outline=(190, 195, 205), width=14)
    
    # Yellow measuring tape
    draw.polygon([(50, 700), (1150, 620), (1150, 660), (50, 740)], fill=(245, 195, 65))
    for tx in range(60, 1140, 15):
        draw.line([(tx, 680), (tx, 710)], fill=(25, 25, 25), width=2 if tx % 60 == 0 else 1)

    img.save('public/images/lookbook/lookbook-hands.webp', 'WEBP', quality=88)
    print('Generated lookbook-hands.webp')

if __name__ == '__main__':
    create_chef_lookbook()
    create_apron_lookbook()
    create_corporate_lookbook()
    create_industrial_lookbook()
    create_tailor_hands_lookbook()
    print('All lookbook images generated successfully!')
