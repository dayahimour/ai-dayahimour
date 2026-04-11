#!/usr/bin/env python3
"""
Generate hero images for articles.
- White background
- 16:9 at 4K (3840x2160)
- Large logo centered
- Name below in black text
"""

from PIL import Image, ImageDraw, ImageFont
import io
import cairosvg
import os
import re

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

def make_logo_black(svg_data):
    """Replace currentColor with black for SVGs that use currentColor."""
    text = svg_data.decode('utf-8') if isinstance(svg_data, bytes) else svg_data
    text = text.replace('currentColor', '#000000')
    return text.encode('utf-8')

def generate_image(svg_filename, display_name, output_filename, use_color_svg=False):
    """Generate a white-background hero image with logo + name."""

    img = Image.new('RGB', (WIDTH, HEIGHT), color='white')
    draw = ImageDraw.Draw(img)

    # Determine SVG path
    if use_color_svg:
        svg_path = os.path.join(ICONS_DIR, svg_filename.replace('.svg', '-color.svg'))
        if not os.path.exists(svg_path):
            svg_path = os.path.join(ICONS_DIR, svg_filename)
    else:
        svg_path = os.path.join(ICONS_DIR, svg_filename)

    if not os.path.exists(svg_path):
        print(f"  SVG not found: {svg_path}")
        return None

    with open(svg_path, 'rb') as f:
        svg_data = f.read()

    # For non-color SVGs, replace currentColor with black
    if not use_color_svg or '-color' not in svg_path:
        svg_data = make_logo_black(svg_data)

    # Convert SVG to PNG
    png_data = cairosvg.svg2png(
        bytestring=svg_data,
        output_width=LOGO_SIZE,
        output_height=LOGO_SIZE
    )

    logo = Image.open(io.BytesIO(png_data))

    # Center logo (slightly above center)
    logo_x = (WIDTH - LOGO_SIZE) // 2
    logo_y = (HEIGHT - LOGO_SIZE) // 2 - 200

    if logo.mode == 'RGBA':
        img.paste(logo, (logo_x, logo_y), logo)
    else:
        img.paste(logo, (logo_x, logo_y))

    # Draw name text
    font = get_font(120)
    bbox = draw.textbbox((0, 0), display_name, font=font)
    text_w = bbox[2] - bbox[0]
    text_x = (WIDTH - text_w) // 2
    text_y = logo_y + LOGO_SIZE + 100

    draw.text((text_x, text_y), display_name, fill='black', font=font)

    # Save
    output_path = os.path.join(IMAGES_DIR, output_filename)
    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    img.save(output_path, 'WEBP', quality=95, method=6)
    print(f"  OK: {output_filename} ({WIDTH}x{HEIGHT})")
    return output_path


if __name__ == '__main__':
    # ── Companies with BLACK logos on dark backgrounds ──
    # These need white background + black logo + black text
    companies_black_logo = [
        ('openai.svg',       'OpenAI',            'openai.webp'),
        ('anthropic.svg',    'Anthropic',         'anthropic.webp'),
        ('xai.svg',          'xAI',               'xai.webp'),
        ('midjourney.svg',   'Midjourney',        'midjourney.webp'),
        ('runway.svg',       'Runway',            'runwayml.webp'),
        ('moonshot.svg',     'Moonshot AI',       'moonshot-ai.webp'),
        ('notebooklm.svg',   'NotebookLM',        'notebooklm.webp'),
    ]

    # ── Companies that HAVE color SVGs ──
    # Use color version on white background
    companies_color_logo = [
        ('meta.svg',         'Meta AI',           'meta-ai.webp',        True),
        ('microsoft.svg',    'Microsoft',         'microsoft.webp',      True),
        ('nvidia.svg',       'NVIDIA',            'nvidia.webp',         True),
        ('deepmind.svg',     'Google DeepMind',   'google-deepmind.webp', True),
        ('deepseek.svg',     'DeepSeek',          'deepseek.webp',       True),
        ('huggingface.svg',  'Hugging Face',      'hugging-face.webp',   True),
        ('stability.svg',    'Stability AI',      'stability-ai.webp',   True),
        ('mistral.svg',      'Mistral AI',        'mistral-ai.webp',     True),
        ('perplexity.svg',   'Perplexity AI',     'perplexity-ai.webp',  True),
        ('cohere.svg',       'Cohere',            'cohere.webp',         True),
        ('bytedance.svg',    'ByteDance',         'bytedance.webp',      True),
        ('minimax.svg',      'MiniMax',           'minimax.webp',        True),
        ('stepfun.svg',      'StepFun',           'stepfun.webp',        True),
        ('zhipu.svg',        'Zhipu AI',          'zhipu-ai.webp',      True),
        ('kwaikat.svg',      'Kuaishou',          'kuaishou.webp',       True),
        ('alibaba.svg',      'Alibaba (Qwen)',    'alibaba-qwen.webp',   True),
        ('xiaomimimo.svg',   'Xiaomi',            'xiaomi-mimo.webp',    True),
    ]

    print("=== Generating BLACK logo images (white bg) ===")
    for svg, name, out in companies_black_logo:
        generate_image(svg, name, out, use_color_svg=False)

    print("\n=== Generating COLOR logo images (white bg) ===")
    for svg, name, out, color in companies_color_logo:
        generate_image(svg, name, out, use_color_svg=color)

    # ── Also regenerate black-forest-labs ──
    print("\n=== Extra ===")
    generate_image('bfl.svg', 'Black Forest Labs', 'black-forest-labs.webp', use_color_svg=False)
