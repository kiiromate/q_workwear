import os
import math
import random
from PIL import Image, ImageDraw, ImageFont, ImageFilter

os.makedirs('public/images/showcase', exist_ok=True)

def draw_twill_pattern(draw, width, height, base_color, line_color, angle=45, spacing=6):
    """Draws a fine tactile twill fabric weave pattern."""
    rad = math.radians(angle)
    dx = math.cos(rad) * spacing
    dy = math.sin(rad) * spacing
    diag = int(math.hypot(width, height))
    for i in range(-diag, diag, spacing):
        x0 = i
        y0 = 0
        x1 = i + int(height * math.tan(rad))
        y1 = height
        draw.line([(x0, y0), (x1, y1)], fill=line_color, width=1)

def draw_tape_measure(draw, x0, y0, length, angle=0, unit_width=12):
    """Draws a realistic yellow tailor's tape measure with inch and cm markings."""
    rad = math.radians(angle)
    cos_a = math.cos(rad)
    sin_a = math.sin(rad)
    tape_h = 28
    
    # Yellow tape body
    points = [
        (x0, y0),
        (x0 + length * cos_a, y0 + length * sin_a),
        (x0 + length * cos_a - tape_h * sin_a, y0 + length * sin_a + tape_h * cos_a),
        (x0 - tape_h * sin_a, y0 + tape_h * cos_a)
    ]
    draw.polygon(points, fill=(245, 195, 65, 240), outline=(210, 160, 40, 255))
    
    # Tick marks
    for i in range(0, length, unit_width):
        tx = x0 + i * cos_a
        ty = y0 + i * sin_a
        is_major = (i % (unit_width * 5) == 0)
        is_mid = (i % (unit_width * 2) == 0)
        tick_len = 14 if is_major else (10 if is_mid else 6)
        
        nx = tx - tick_len * sin_a
        ny = ty + tick_len * cos_a
        draw.line([(tx, ty), (nx, ny)], fill=(30, 30, 30, 230), width=2 if is_major else 1)

def draw_stitching(draw, points, color=(255, 255, 255, 220), stitch_len=8, gap=4):
    """Draws a basting / topstitch dashed line along path points."""
    for i in range(len(points) - 1):
        x1, y1 = points[i]
        x2, y2 = points[i + 1]
        dist = math.hypot(x2 - x1, y2 - y1)
        if dist == 0:
            continue
        dx = (x2 - x1) / dist
        dy = (y2 - y1) / dist
        curr = 0
        drawing = True
        while curr < dist:
            next_step = min(curr + (stitch_len if drawing else gap), dist)
            if drawing:
                draw.line([(x1 + dx * curr, y1 + dy * curr), 
                           (x1 + dx * next_step, y1 + dy * next_step)], 
                          fill=color, width=2)
            curr = next_step
            drawing = not drawing

def create_hero_atelier():
    """Generates the main cinematic tailor's cutting table banner."""
    w, h = 1920, 1080
    img = Image.new('RGB', (w, h), (18, 16, 15))
    draw = ImageDraw.Draw(img, 'RGBA')
    
    # Dark workshop wood grain / cutting board background
    for y in range(0, h, 60):
        shade = 18 + int(10 * math.sin(y / 120.0))
        draw.rectangle([(0, y), (w, y + 60)], fill=(shade, shade - 2, shade - 4))
        draw.line([(0, y), (w, y)], fill=(10, 8, 7), width=2)
        
    # Cutting mat grid lines
    for x in range(0, w, 80):
        draw.line([(x, 0), (x, h)], fill=(45, 40, 38, 70), width=1)
    for y in range(0, h, 80):
        draw.line([(0, y), (w, y)], fill=(45, 40, 38, 70), width=1)
        
    # Layer 1: Charcoal suiting fabric bolt on left
    draw.polygon([(0, 200), (750, 0), (950, 1080), (0, 1080)], fill=(32, 34, 38))
    draw_twill_pattern(draw, 950, 1080, (32, 34, 38), (42, 44, 48), angle=35, spacing=5)
    draw_stitching(draw, [(730, 0), (930, 1080)], color=(180, 180, 180, 180))
    
    # Layer 2: Signature Q Workwear Brand Red Cloth Layer
    draw.polygon([(400, 1080), (1100, 250), (1450, 1080)], fill=(224, 72, 58))
    # Red fabric twill texture
    for i in range(-500, 2000, 6):
        draw.line([(i, 250), (i + 400, 1080)], fill=(200, 55, 42), width=1)
    draw_stitching(draw, [(400, 1080), (1100, 250), (1450, 1080)], color=(255, 235, 230, 230), stitch_len=10, gap=5)
    
    # Tailor's chalk mark on red cloth: "Q-WORKWEAR // LOT 01"
    draw.line([(950, 480), (1280, 620)], fill=(255, 255, 255, 140), width=2)
    draw.line([(930, 520), (1220, 650)], fill=(255, 255, 255, 90), width=1)
    
    # Layer 3: Heavy Navy Industrial Twill on right
    draw.polygon([(1200, 0), (1920, 0), (1920, 1080), (1350, 1080)], fill=(24, 32, 48))
    for i in range(1100, 2200, 7):
        draw.line([(i, 0), (i - 300, 1080)], fill=(34, 44, 64), width=1)
    # High-vis reflective silver tape across navy fabric
    draw.polygon([(1380, 500), (1920, 360), (1920, 430), (1400, 570)], fill=(220, 225, 230, 240))
    draw_stitching(draw, [(1380, 500), (1920, 360)], color=(255, 255, 255, 255), stitch_len=8, gap=4)
    draw_stitching(draw, [(1400, 570), (1920, 430)], color=(255, 255, 255, 255), stitch_len=8, gap=4)
    
    # Yellow tape measure curving across the table
    draw_tape_measure(draw, 100, 720, 1750, angle=6, unit_width=14)
    
    # Vignette and cinematic atmospheric lighting overlay
    overlay = Image.new('RGBA', (w, h), (0, 0, 0, 0))
    o_draw = ImageDraw.Draw(overlay)
    # Dark vignette border
    for r in range(0, 300, 10):
        alpha = int(220 * (1 - r / 300.0))
        o_draw.rectangle([(r, r), (w - r, h - r)], outline=(12, 10, 9, alpha), width=10)
    
    # Warm spotlight in upper-center
    img = Image.alpha_composite(img.convert('RGBA'), overlay)
    img = img.filter(ImageFilter.SMOOTH_MORE)
    img.convert('RGB').save('public/images/showcase/hero-atelier-table.webp', 'WEBP', quality=88)
    print('Generated hero-atelier-table.webp')

def create_corporate_showcase():
    """Generates the Corporate Uniforms visual showcase."""
    w, h = 1200, 900
    img = Image.new('RGB', (w, h), (26, 28, 32))
    draw = ImageDraw.Draw(img, 'RGBA')
    
    # Fine poly-wool suiting texture background
    draw_twill_pattern(draw, w, h, (26, 28, 32), (36, 38, 44), angle=40, spacing=4)
    
    # Oxford cotton shirt layer (sky blue & crisp white placket)
    draw.polygon([(350, 0), (850, 0), (700, 900), (250, 900)], fill=(225, 235, 245))
    # Oxford pinpoint weave
    for y in range(0, h, 3):
        draw.line([(250, y), (850, y)], fill=(210, 222, 235), width=1)
        
    # Dark Charcoal Suiting Lapel overlapping
    draw.polygon([(0, 0), (450, 0), (280, 900), (0, 900)], fill=(34, 36, 40))
    draw.polygon([(1200, 0), (750, 0), (880, 900), (1200, 900)], fill=(34, 36, 40))
    
    # Pick stitching on lapels
    draw_stitching(draw, [(450, 0), (280, 900)], color=(140, 140, 140, 180), stitch_len=5, gap=4)
    draw_stitching(draw, [(750, 0), (880, 900)], color=(140, 140, 140, 180), stitch_len=5, gap=4)
    
    # White mother-of-pearl buttons on shirt placket
    for by in [220, 380, 540, 700]:
        bx = int(500 + (by / 900.0) * 15)
        draw.ellipse([(bx - 14, by - 14), (bx + 14, by + 14)], fill=(250, 250, 248), outline=(190, 190, 185), width=2)
        draw.ellipse([(bx - 5, by - 5), (bx + 5, by + 5)], fill=(220, 220, 215))
        # Thread cross
        draw.line([(bx - 3, by), (bx + 3, by)], fill=(120, 120, 120), width=1)
        draw.line([(bx, by - 3), (bx, by + 3)], fill=(120, 120, 120), width=1)

    # Q Workwear brand woven label pinned on chest
    tag_x, tag_y = 120, 480
    draw.rectangle([(tag_x, tag_y), (tag_x + 280, tag_y + 110)], fill=(248, 246, 242), outline=(210, 205, 195), width=2)
    # Red accent stripe on label
    draw.rectangle([(tag_x, tag_y), (tag_x + 12, tag_y + 110)], fill=(224, 72, 58))
    # Stitch border around label
    draw_stitching(draw, [
        (tag_x + 4, tag_y + 4), (tag_x + 276, tag_y + 4),
        (tag_x + 276, tag_y + 106), (tag_x + 4, tag_y + 106), (tag_x + 4, tag_y + 4)
    ], color=(160, 150, 140, 240), stitch_len=6, gap=3)
    
    # Tape measure diagonal
    draw_tape_measure(draw, 80, 800, 1050, angle=-12, unit_width=12)
    
    img.save('public/images/showcase/cat-corporate-suiting.webp', 'WEBP', quality=88)
    print('Generated cat-corporate-suiting.webp')

def create_hospitality_showcase():
    """Generates the Hospitality & Culinary showcase."""
    w, h = 1200, 900
    img = Image.new('RGB', (w, h), (38, 32, 28))
    draw = ImageDraw.Draw(img, 'RGBA')
    
    # Heavy Washed Olive/Espresso Duck Canvas Apron Body
    draw.rectangle([(0, 0), (w, h)], fill=(44, 40, 36))
    draw_twill_pattern(draw, w, h, (44, 40, 36), (54, 50, 44), angle=45, spacing=4)
    
    # Crisp Chef White Double-Breasted Jacket Insert on Left
    draw.polygon([(0, 0), (520, 0), (320, 900), (0, 900)], fill=(245, 246, 248))
    # Chef black piping along edge
    draw.line([(520, 0), (320, 900)], fill=(25, 25, 25), width=6)
    
    # Cloth knot chef buttons
    for by in [180, 320, 460, 600, 740]:
        bx = int(220 + (by / 900.0) * 40)
        draw.ellipse([(bx - 16, by - 16), (bx + 16, by + 16)], fill=(30, 30, 30))
        draw.ellipse([(bx - 12, by - 12), (bx + 12, by + 12)], fill=(50, 50, 50))
        
    # Cross-back genuine leather apron harness strap
    draw.polygon([(550, 0), (630, 0), (1050, 900), (970, 900)], fill=(160, 95, 45))
    draw_stitching(draw, [(560, 0), (980, 900)], color=(240, 210, 160, 220), stitch_len=6, gap=3)
    draw_stitching(draw, [(620, 0), (1040, 900)], color=(240, 210, 160, 220), stitch_len=6, gap=3)
    
    # Solid antique brass grommet
    gx, gy = 800, 360
    draw.ellipse([(gx - 32, gy - 32), (gx + 32, gy + 32)], fill=(195, 155, 75), outline=(130, 95, 35), width=4)
    draw.ellipse([(gx - 18, gy - 18), (gx + 18, gy + 18)], fill=(35, 30, 25))
    
    # Split kangaroo apron pocket with reinforced bar-tacks
    px0, py0, px1, py1 = 580, 520, 1150, 880
    draw.rectangle([(px0, py0), (px1, py1)], fill=(50, 46, 40), outline=(65, 60, 52), width=2)
    draw_stitching(draw, [(px0 + 4, py0 + 4), (px1 - 4, py0 + 4), (px1 - 4, py1 - 4), (px0 + 4, py1 - 4), (px0 + 4, py0 + 4)], color=(220, 180, 120, 200), stitch_len=7, gap=4)
    # Red bar-tack reinforcement at pocket corners
    draw.line([(px0 + 2, py0 + 8), (px0 + 16, py0 + 8)], fill=(224, 72, 58), width=5)
    draw.line([(px1 - 16, py0 + 8), (px1 - 2, py0 + 8)], fill=(224, 72, 58), width=5)
    
    # Tape measure diagonally across apron
    draw_tape_measure(draw, 100, 780, 1050, angle=-8, unit_width=12)
    
    img.save('public/images/showcase/cat-hospitality-culinary.webp', 'WEBP', quality=88)
    print('Generated cat-hospitality-culinary.webp')

def create_industrial_showcase():
    """Generates the Industrial & Safety Workwear showcase."""
    w, h = 1200, 900
    img = Image.new('RGB', (w, h), (18, 24, 38))
    draw = ImageDraw.Draw(img, 'RGBA')
    
    # Heavy Cotton Drill Navy Overall Fabric
    draw.rectangle([(0, 0), (w, h)], fill=(22, 32, 50))
    draw_twill_pattern(draw, w, h, (22, 32, 50), (28, 42, 66), angle=35, spacing=5)
    
    # High-Visibility Fluorescent Neon Yellow / Orange panel across chest
    draw.polygon([(0, 120), (1200, 80), (1200, 360), (0, 400)], fill=(230, 240, 40))
    
    # 50mm Silver Micro-Prismatic Reflective Tape
    draw.polygon([(0, 220), (1200, 180), (1200, 290), (0, 330)], fill=(235, 240, 245))
    draw_stitching(draw, [(0, 220), (1200, 180)], color=(60, 60, 60, 240), stitch_len=6, gap=3)
    draw_stitching(draw, [(0, 330), (1200, 290)], color=(60, 60, 60, 240), stitch_len=6, gap=3)
    
    # Heavy-duty industrial brass zipper down center
    zx = 600
    draw.rectangle([(zx - 16, 0), (zx + 16, h)], fill=(18, 22, 28))
    for zy in range(0, h, 8):
        draw.rectangle([(zx - 12, zy), (zx + 12, zy + 4)], fill=(205, 165, 75))
    draw.line([(zx, 0), (zx, h)], fill=(12, 14, 18), width=3)
    
    # Triple-needle contrast stitching along shoulder and sleeve
    for offset in [-12, -4, 4]:
        draw_stitching(draw, [(100 + offset, 0), (350 + offset, 900)], color=(235, 140, 40, 220), stitch_len=6, gap=3)
        
    # Reinforced knee pad panel in Cordura black
    draw.rectangle([(150, 520), (480, 850)], fill=(28, 30, 34), outline=(45, 48, 55), width=3)
    draw_stitching(draw, [(155, 525), (475, 525), (475, 845), (155, 845), (155, 525)], color=(224, 72, 58), stitch_len=8, gap=4)
    
    # Brass snap button on chest pocket
    draw.ellipse([(850, 480), (890, 520)], fill=(210, 170, 80), outline=(150, 110, 40), width=3)
    draw.ellipse([(862, 492), (878, 508)], fill=(160, 120, 50))
    
    # Tape measure at bottom
    draw_tape_measure(draw, 60, 820, 1100, angle=-4, unit_width=12)
    
    img.save('public/images/showcase/cat-industrial-safety.webp', 'WEBP', quality=88)
    print('Generated cat-industrial-safety.webp')

def create_branded_showcase():
    """Generates the Branded Apparel & Custom Merchandise showcase."""
    w, h = 1200, 900
    img = Image.new('RGB', (w, h), (20, 20, 22))
    draw = ImageDraw.Draw(img, 'RGBA')
    
    # Combed cotton piqué polo mesh texture (honeycomb micro-piqué)
    draw.rectangle([(0, 0), (w, h)], fill=(26, 26, 30))
    for y in range(0, h, 6):
        for x in range(0, w, 6):
            if (x + y) % 12 == 0:
                draw.ellipse([(x, y), (x + 3, y + 3)], fill=(38, 38, 44))
                
    # High-density ribbed knit collar (Brand Red with double white tipping)
    draw.polygon([(0, 0), (1200, 0), (850, 240), (350, 240)], fill=(224, 72, 58))
    draw.line([(360, 210), (840, 210)], fill=(255, 255, 255), width=5)
    draw.line([(370, 225), (830, 225)], fill=(255, 255, 255), width=3)
    
    # Placket with laser-engraved buttons
    draw.polygon([(520, 240), (680, 240), (680, 680), (520, 680)], fill=(32, 32, 36), outline=(48, 48, 54), width=2)
    for by in [320, 440, 560]:
        draw.ellipse([(580, by), (620, by + 40)], fill=(230, 230, 235), outline=(170, 170, 175), width=2)
        draw.ellipse([(590, by + 10), (610, by + 30)], fill=(200, 200, 205))
        draw.line([(594, by + 20), (606, by + 20)], fill=(80, 80, 80), width=1)
        draw.line([(600, by + 14), (600, by + 26)], fill=(80, 80, 80), width=1)
        
    # Structured 6-panel twill cap visor overlapping on right
    draw.polygon([(820, 450), (1200, 320), (1200, 900), (740, 820)], fill=(36, 40, 46))
    for i in range(5):
        offset = i * 14
        draw_stitching(draw, [(820 + offset, 460 + offset), (1200, 340 + offset)], color=(224, 72, 58), stitch_len=6, gap=3)

    # 3D Raised Puff Embroidery Emblem on Left Chest
    ex, ey = 280, 460
    draw.ellipse([(ex - 50, ey - 50), (ex + 50, ey + 50)], fill=(224, 72, 58), outline=(255, 255, 255), width=4)
    # White embroidered Q symbol
    draw.ellipse([(ex - 28, ey - 28), (ex + 28, ey + 28)], outline=(255, 255, 255), width=8)
    draw.line([(ex + 6, ey + 6), (ex + 34, ey + 34)], fill=(255, 255, 255), width=9)
    
    # Tape measure at bottom
    draw_tape_measure(draw, 120, 820, 1000, angle=-6, unit_width=12)
    
    img.save('public/images/showcase/cat-branded-apparel.webp', 'WEBP', quality=88)
    print('Generated cat-branded-apparel.webp')

def create_craftsmanship_showcase():
    """Generates the Workshop & Tailor Craftsmanship showcase."""
    w, h = 1200, 900
    img = Image.new('RGB', (w, h), (20, 18, 16))
    draw = ImageDraw.Draw(img, 'RGBA')
    
    # Dark Oak Tailor Cutting Table Planks
    for y in range(0, h, 90):
        draw.rectangle([(0, y), (w, y + 90)], fill=(24 + (y % 180)//30, 20, 18))
        draw.line([(0, y), (w, y)], fill=(12, 10, 8), width=2)
        
    # Paper Garment Pattern (Kraft paper brown with chalk markings)
    draw.polygon([(180, 80), (820, 40), (950, 780), (120, 720)], fill=(195, 165, 125))
    # Chalk dashed cut line on kraft pattern
    draw_stitching(draw, [(220, 120), (780, 80), (900, 740), (160, 680), (220, 120)], color=(255, 255, 255, 240), stitch_len=12, gap=6)
    # Chalk notes: "Q WORKWEAR // PATTERN A-4 // SEAM +1.5CM"
    draw.line([(300, 300), (650, 300)], fill=(255, 255, 255, 180), width=2)
    draw.line([(300, 360), (580, 360)], fill=(255, 255, 255, 140), width=2)
    
    # Layered fabric sample swatches pinned to pattern
    # Red swatch
    draw.polygon([(450, 380), (750, 340), (730, 680), (430, 640)], fill=(224, 72, 58))
    draw_stitching(draw, [(450, 380), (750, 340), (730, 680), (430, 640), (450, 380)], color=(255, 235, 230), stitch_len=8, gap=4)
    
    # Blue Oxford swatch overlapping
    draw.polygon([(520, 450), (820, 420), (800, 750), (500, 720)], fill=(40, 85, 140))
    draw_stitching(draw, [(520, 450), (820, 420), (800, 750), (500, 720), (520, 450)], color=(220, 240, 255), stitch_len=8, gap=4)
    
    # Brass push pin through swatches
    draw.ellipse([(550, 470), (576, 496)], fill=(230, 185, 80), outline=(160, 120, 40), width=3)
    draw.ellipse([(558, 478), (568, 488)], fill=(255, 240, 180))
    
    # Heavy tailor shears silhouette on right
    # Handle loops
    draw.ellipse([(980, 220), (1080, 380)], outline=(180, 185, 195), width=16)
    draw.ellipse([(1020, 360), (1140, 520)], outline=(180, 185, 195), width=16)
    # Blades
    draw.polygon([(990, 350), (680, 680), (720, 700)], fill=(190, 195, 205))
    draw.polygon([(1040, 420), (710, 740), (750, 760)], fill=(160, 165, 175))
    
    # Tape measure curving across table
    draw_tape_measure(draw, 50, 780, 1120, angle=-5, unit_width=12)
    
    img.save('public/images/showcase/tailor-craftsmanship.webp', 'WEBP', quality=88)
    print('Generated tailor-craftsmanship.webp')

if __name__ == '__main__':
    create_hero_atelier()
    create_corporate_showcase()
    create_hospitality_showcase()
    create_industrial_showcase()
    create_branded_showcase()
    create_craftsmanship_showcase()
    print('All atelier visual assets created successfully!')
