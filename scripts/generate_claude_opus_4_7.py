#!/usr/bin/env python3
"""
Generate professional 4K banners for the article claude-opus-4-7.md
Features:
- 16:9 at 4K (3840x2160)
- Light and Dark variants
- Professional styling, Claude Logo, and text "Claude Opus 4.7"
"""

from PIL import Image, ImageDraw, ImageFont, ImageFilter
import io
import cairosvg
import os

ICONS_DIR = '/home/daya/Desktop/ai-dayahimour/public/icons'
IMAGES_DIR = '/home/daya/Desktop/ai-dayahimour/public/images'
WIDTH = 3840
HEIGHT = 2160
LOGO_SIZE = 800

def get_font(size=120):
    font_paths = [
        '/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf',
        '/usr/share/fonts/truetype/liberation/LiberationSans-Bold.ttf',
        '/usr/share/fonts/truetype/noto/NotoSans-Bold.ttf',
        '/usr/share/fonts/truetype/freefont/FreeSansBold.ttf',
    ]
    for fp in font_paths:
        if os.path.exists(fp):
            return ImageFont.truetype(fp, size)
    return ImageFont.load_default()

def draw_grid(draw, width, height, line_color, step=120):
    """Draws a subtle professional background grid."""
    for x in range(0, width, step):
        draw.line([(x, 0), (x, height)], fill=line_color, width=4)
    for y in range(0, height, step):
        draw.line([(0, y), (width, y)], fill=line_color, width=4)

def build_banner(theme='dark'):
    """Generates the banner based on theme ('dark' or 'light')"""
    
    # 1. Setup Theme colors
    if theme == 'dark':
        bg_color = (15, 23, 42) # Slate 900
        grid_color = (30, 41, 59, 100) # Slate 800 with alpha
        text_color = (255, 255, 255)
        sub_text_color = (148, 163, 184) # Slate 400
        logo_fill = '#FFFFFF'
        svg_filename = 'claude-color.svg' # Attempt color
        output_filename = 'claude-opus-4-7-dark.webp'
    else:
        bg_color = (255, 255, 255)
        grid_color = (241, 245, 249, 120) # Slate 100 with alpha
        text_color = (15, 23, 42) # Slate 900
        sub_text_color = (100, 116, 139) # Slate 500
        logo_fill = '#000000'
        svg_filename = 'claude-color.svg'
        output_filename = 'claude-opus-4-7-light.webp'
        
    img = Image.new('RGBA', (WIDTH, HEIGHT), color=bg_color)
    draw_bg = ImageDraw.Draw(img, 'RGBA')
    
    # 2. Draw subtle grid
    draw_grid(draw_bg, WIDTH, HEIGHT, grid_color, step=150)
    
    # Drop img back to RGB just in case
    img = img.convert('RGB')
    draw = ImageDraw.Draw(img)

    # 3. Load SVG
    svg_path = os.path.join(ICONS_DIR, svg_filename)
    if not os.path.exists(svg_path):
        # Fallback
        svg_path = os.path.join(ICONS_DIR, 'claude.svg')
        
    with open(svg_path, 'rb') as f:
        svg_data = f.read()

    # If it's the standard non-color svg, apply fill
    text = svg_data.decode('utf-8')
    if 'currentColor' in text:
        text = text.replace('currentColor', logo_fill)
    svg_data = text.encode('utf-8')

    # Convert SVG to PNG
    try:
        png_data = cairosvg.svg2png(
            bytestring=svg_data,
            output_width=LOGO_SIZE,
            output_height=LOGO_SIZE
        )
    except Exception as e:
        print(f"Error rendering SVG with cairosvg: {e}")
        return

    logo = Image.open(io.BytesIO(png_data))

    # Center logo 
    logo_x = (WIDTH - LOGO_SIZE) // 2
    logo_y = (HEIGHT - LOGO_SIZE) // 2 - 150

    if logo.mode == 'RGBA':
        img.paste(logo, (logo_x, logo_y), logo)
    else:
        img.paste(logo, (logo_x, logo_y))

    # 4. Draw Main Headings (Claude Opus 4.7)
    font_main = get_font(250)
    display_name = "Claude Opus 4.7"
    
    bbox = draw.textbbox((0, 0), display_name, font=font_main)
    text_w = bbox[2] - bbox[0]
    text_x = (WIDTH - text_w) // 2
    text_y = logo_y + LOGO_SIZE + 150

    draw.text((text_x, text_y), display_name, fill=text_color, font=font_main)

    # 5. Save output
    output_path = os.path.join(IMAGES_DIR, output_filename)
    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    img.save(output_path, 'WEBP', quality=95, method=6)
    print(f"✅ Generated: {output_path} ({WIDTH}x{HEIGHT})")
    return output_path

if __name__ == '__main__':
    print("Generating Claude Opus 4.7 Banners...")
    l_out = build_banner('light')
    
    # Save the light one as the default to the article's image path
    if l_out:
        final_dest = os.path.join(IMAGES_DIR, 'claude-opus-4-7.webp')
        import shutil
        shutil.copy2(l_out, final_dest)
        print(f"✅ Copied Light variant to default path: {final_dest}")
