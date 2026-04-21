#!/usr/bin/env python3
"""
Generate a professional 4K banner (16:9) for the article kimi-k2-6.md.

Features:
 - 16:9 at 4K (3840 x 2160)
 - Dark gradient background with subtle grid
 - Kimi color SVG logo (blue dot + white K) rendered as-is
 - Large, bold "Kimi K2.6" title
 - Smaller "Moonshot AI" subtitle below
 - Saved as public/images/kimi-k2-6.webp
"""

from PIL import Image, ImageDraw, ImageFont
import io
import os
import cairosvg

# Paths
PROJECT_ROOT = '/home/daya/Desktop/ai-dayahimour'
ICONS_DIR = os.path.join(PROJECT_ROOT, 'icons')
IMAGES_DIR = os.path.join(PROJECT_ROOT, 'public', 'images')
OUTPUT_PATH = os.path.join(IMAGES_DIR, 'kimi-k2-6.webp')

# Dimensions (16:9 at 4K)
WIDTH = 3840
HEIGHT = 2160

# Layout constants
# All content is packed tightly in the central safe zone of the banner,
# so card thumbnails that crop vertically (object-cover) still show it all.
LOGO_SIZE = 520          # final logo square size (the SVG canvas is 24x24, scales up)
TITLE_SIZE = 320         # "Kimi K2.6"
SUBTITLE_SIZE = 120      # "Moonshot AI"
LOGO_TO_TITLE_GAP = 40   # vertical gap between logo bottom and title top
TITLE_TO_SUB_GAP = 40    # vertical gap between title bottom and subtitle top

# Theme — dark (as requested)
BG_TOP = (10, 16, 32)          # deep navy
BG_BOTTOM = (18, 28, 56)       # slightly lighter navy
ACCENT_GLOW = (23, 131, 255)   # kimi brand blue (from the SVG #1783FF)
GRID_COLOR = (255, 255, 255, 10)  # very subtle white grid
TITLE_COLOR = (255, 255, 255)
SUBTITLE_COLOR = (148, 163, 184)  # slate-400


def get_font(size: int, bold: bool = True) -> ImageFont.FreeTypeFont:
    """Return the first available system font at the requested size."""
    candidates_bold = [
        '/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf',
        '/usr/share/fonts/truetype/liberation/LiberationSans-Bold.ttf',
        '/usr/share/fonts/truetype/noto/NotoSans-Bold.ttf',
        '/usr/share/fonts/truetype/freefont/FreeSansBold.ttf',
    ]
    candidates_regular = [
        '/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf',
        '/usr/share/fonts/truetype/liberation/LiberationSans-Regular.ttf',
        '/usr/share/fonts/truetype/noto/NotoSans-Regular.ttf',
        '/usr/share/fonts/truetype/freefont/FreeSans.ttf',
    ]
    for fp in (candidates_bold if bold else candidates_regular):
        if os.path.exists(fp):
            return ImageFont.truetype(fp, size)
    return ImageFont.load_default()


def make_vertical_gradient(width: int, height: int, top, bottom) -> Image.Image:
    base = Image.new('RGB', (width, height), top)
    draw = ImageDraw.Draw(base)
    for y in range(height):
        t = y / max(1, height - 1)
        r = int(top[0] + (bottom[0] - top[0]) * t)
        g = int(top[1] + (bottom[1] - top[1]) * t)
        b = int(top[2] + (bottom[2] - top[2]) * t)
        draw.line([(0, y), (width, y)], fill=(r, g, b))
    return base


def draw_grid(img: Image.Image, step: int = 160) -> None:
    overlay = Image.new('RGBA', img.size, (0, 0, 0, 0))
    d = ImageDraw.Draw(overlay)
    for x in range(0, img.width, step):
        d.line([(x, 0), (x, img.height)], fill=GRID_COLOR, width=2)
    for y in range(0, img.height, step):
        d.line([(0, y), (img.width, y)], fill=GRID_COLOR, width=2)
    img.alpha_composite(overlay)


def draw_radial_glow(img: Image.Image, cx: int, cy: int, radius: int, color) -> None:
    """Soft radial glow behind the logo."""
    overlay = Image.new('RGBA', img.size, (0, 0, 0, 0))
    d = ImageDraw.Draw(overlay)
    steps = 60
    for i in range(steps, 0, -1):
        r = int(radius * i / steps)
        alpha = int(70 * (1 - i / steps) ** 2)  # fades out toward edge
        d.ellipse(
            (cx - r, cy - r, cx + r, cy + r),
            fill=(color[0], color[1], color[2], alpha),
        )
    img.alpha_composite(overlay)


def render_logo(size: int) -> Image.Image:
    """Render the Kimi color SVG to a transparent PNG at the given size."""
    svg_path = os.path.join(ICONS_DIR, 'kimi-color.svg')
    with open(svg_path, 'rb') as f:
        svg_bytes = f.read()
    png_bytes = cairosvg.svg2png(
        bytestring=svg_bytes,
        output_width=size,
        output_height=size,
    )
    return Image.open(io.BytesIO(png_bytes)).convert('RGBA')


def build_banner() -> str:
    # 1) Base gradient
    base = make_vertical_gradient(WIDTH, HEIGHT, BG_TOP, BG_BOTTOM).convert('RGBA')

    # 2) Subtle grid
    draw_grid(base, step=180)

    # --- Pre-measure fonts to compute a single centered content stack ---
    tmp = ImageDraw.Draw(base)
    title_font = get_font(TITLE_SIZE, bold=True)
    subtitle_font = get_font(SUBTITLE_SIZE, bold=False)

    title = 'Kimi K2.6'
    subtitle = 'Moonshot AI'

    tbbox = tmp.textbbox((0, 0), title, font=title_font)
    tw, th = tbbox[2] - tbbox[0], tbbox[3] - tbbox[1]
    sbbox = tmp.textbbox((0, 0), subtitle, font=subtitle_font)
    sw, sh = sbbox[2] - sbbox[0], sbbox[3] - sbbox[1]

    # Total stack height = logo + gap + title + gap + subtitle
    stack_h = LOGO_SIZE + LOGO_TO_TITLE_GAP + th + TITLE_TO_SUB_GAP + sh
    # Center the whole stack vertically in the banner
    stack_top = (HEIGHT - stack_h) // 2

    cx = WIDTH // 2
    logo_y = stack_top
    title_y = logo_y + LOGO_SIZE + LOGO_TO_TITLE_GAP - tbbox[1]  # compensate font top bearing
    sub_y = logo_y + LOGO_SIZE + LOGO_TO_TITLE_GAP + th + TITLE_TO_SUB_GAP - sbbox[1]

    # 3) Radial glow centered on the logo
    draw_radial_glow(base, cx, logo_y + LOGO_SIZE // 2, radius=820, color=ACCENT_GLOW)

    # 4) Logo (Kimi color SVG as-is)
    logo = render_logo(LOGO_SIZE)
    logo_x = cx - LOGO_SIZE // 2
    base.alpha_composite(logo, (logo_x, logo_y))

    # 5) Title + subtitle
    img = base.convert('RGB')
    draw = ImageDraw.Draw(img)

    title_x = (WIDTH - tw) // 2 - tbbox[0]
    draw.text((title_x, title_y), title, fill=TITLE_COLOR, font=title_font)

    sub_x = (WIDTH - sw) // 2 - sbbox[0]
    draw.text((sub_x, sub_y), subtitle, fill=SUBTITLE_COLOR, font=subtitle_font)

    # 6) Save
    os.makedirs(IMAGES_DIR, exist_ok=True)
    img.save(OUTPUT_PATH, 'WEBP', quality=92, method=6)
    print(f'✅ Generated: {OUTPUT_PATH} ({WIDTH}x{HEIGHT})')
    print(f'   Content stack height: {stack_h}px of {HEIGHT}px ({100*stack_h/HEIGHT:.0f}%)')
    return OUTPUT_PATH


if __name__ == '__main__':
    build_banner()
