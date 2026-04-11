#!/usr/bin/env python3
"""
Generate high-quality (4K, 16:9, 1920x1080) company article images.
Includes large centered logos and proper company names underneath.
"""

import os
import re
import cairosvg
from PIL import Image, ImageDraw, ImageFont, ImageFilter
import io

# Configuration
BASE_DIR = "/home/daya/Desktop/ai-dayahimour"
ICONS_DIR = os.path.join(BASE_DIR, "icons")
OUTPUT_DIR = os.path.join(BASE_DIR, "public", "images")
BLOG_EN_DIR = os.path.join(BASE_DIR, "src", "content", "blog-en")

# Image dimensions (16:9 ratio, high quality)
WIDTH = 1920
HEIGHT = 1080

# Logo size and text configuration
LOGO_SIZE = 500
FONT_PATH = "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf"
FONT_SIZE = 100

# Company to logo mapping
COMPANY_LOGOS = {
    # Major AI Companies
    "openai": ("openai.svg", "dark", "OpenAI"),
    "anthropic": ("anthropic.svg", "light", "Anthropic"),
    "google-deepmind": ("deepmind-color.svg", "dark", "Google"),
    "meta-ai": ("meta-color.svg", "dark", "Meta"),
    "deepseek": ("deepseek-color.svg", "dark", "DeepSeek"),
    "xai": ("xai.svg", "dark", "xAI"),

    # Chinese Companies
    "alibaba-qwen": ("qwen-color.svg", "dark", "Alibaba"),
    "bytedance": ("bytedance-color.svg", "light", "ByteDance"),
    "xiaomi-mimo": ("xiaomi-brand.svg", "dark", "Xiaomi"),
    "minimax": ("minimax-color.svg", "dark", "MiniMax"),
    "zhipu-ai": ("zhipu-color.svg", "dark", "Zhipu AI"),
    "moonshot-ai": ("moonshot.svg", "dark", "Moonshot AI"),
    "stepfun": ("stepfun-color.svg", "dark", "StepFun"),
    "kuaishou": ("kling-color.svg", "dark", "Kuaishou"),

    # Creative/Media AI
    "stability-ai": ("stability-color.svg", "dark", "Stability AI"),
    "midjourney": ("midjourney.svg", "dark", "Midjourney"),
    "black-forest-labs": ("bfl.svg", "dark", "Black Forest Labs"),
    "runwayml": ("runway.svg", "dark", "Runway"),

    # Other Major Companies
    "microsoft": ("microsoft-color.svg", "dark", "Microsoft"),
    "nvidia": ("nvidia-color.svg", "dark", "NVIDIA"),
    "mistral-ai": ("mistral-color.svg", "dark", "Mistral AI"),
    "perplexity-ai": ("perplexity-color.svg", "dark", "Perplexity"),
    "cohere": ("cohere-color.svg", "dark", "Cohere"),
    "hugging-face": ("huggingface-color.svg", "light", "Hugging Face"),
}

BG_DARK = "#0f172a"
BG_LIGHT = "#f8fafc"

def ensure_directories():
    os.makedirs(OUTPUT_DIR, exist_ok=True)

def modify_svg_for_size(svg_content, target_size):
    svg_content = re.sub(r'width="[^"]*"', '', svg_content, count=1)
    svg_content = re.sub(r'height="[^"]*"', '', svg_content, count=1)
    if 'viewBox' not in svg_content:
        svg_content = svg_content.replace('<svg', '<svg viewBox="0 0 24 24"', 1)
    return svg_content

def svg_to_png(svg_path, size):
    with open(svg_path, 'rb') as f:
        svg_content = f.read().decode('utf-8')

    svg_content = modify_svg_for_size(svg_content, size)
    try:
        png_data = cairosvg.svg2png(
            bytestring=svg_content.encode('utf-8'),
            output_width=size,
            output_height=size,
            background_color='transparent'
        )
        return Image.open(io.BytesIO(png_data))
    except Exception as e:
        print(f"Error converting SVG: {e}")
        return None

def create_background(width, height, bg_type):
    if bg_type == "dark":
        img = Image.new('RGB', (width, height), BG_DARK)
        draw = ImageDraw.Draw(img)
        for i in range(height):
            ratio = i / height
            r = int(15 + (30 - 15) * ratio)
            g = int(23 + (41 - 23) * ratio)
            b = int(42 + (59 - 42) * ratio)
            draw.line([(0, i), (width, i)], fill=(r, g, b))
    else:
        img = Image.new('RGB', (width, height), BG_LIGHT)
        draw = ImageDraw.Draw(img)
        for i in range(100):
            alpha = int(248 + (7 * (i/100)))  # f8 to ff transition
            draw.rectangle([0, i, width, i+1], fill=(alpha, alpha, alpha))
            draw.rectangle([0, height-i-1, width, height-i], fill=(alpha, alpha, alpha))
    return img

def generate_company_image(company_slug, logo_file, bg_type, display_name):
    logo_path = os.path.join(ICONS_DIR, logo_file)
    if not os.path.exists(logo_path):
        print(f"  Warning: Logo not found: {logo_path}")
        return False

    logo_img = svg_to_png(logo_path, LOGO_SIZE)
    if logo_img is None:
        return False
    if logo_img.mode != 'RGBA':
        logo_img = logo_img.convert('RGBA')

    img = create_background(WIDTH, HEIGHT, bg_type).convert('RGBA')
    draw = ImageDraw.Draw(img)

    try:
        font = ImageFont.truetype(FONT_PATH, FONT_SIZE)
    except Exception:
        font = ImageFont.load_default()

    # Get text bounding box
    bbox = font.getbbox(display_name) if hasattr(font, 'getbbox') else font.getrect(display_name)
    text_width = bbox[2] - bbox[0]
    text_height = bbox[3] - bbox[1]

    # Calculate total height of logo + gap + text
    gap = 80
    total_content_height = logo_img.height + gap + text_height

    # Center block vertically
    start_y = (HEIGHT - total_content_height) // 2

    # Draw logo
    logo_x = (WIDTH - logo_img.width) // 2
    logo_y = start_y
    img.paste(logo_img, (logo_x, logo_y), logo_img)

    # Draw text
    text_x = (WIDTH - text_width) // 2
    text_y = logo_y + logo_img.height + gap
    
    text_color = "white" if bg_type == "dark" else "#1e293b"
    draw.text((text_x, text_y), display_name, font=font, fill=text_color)

    final_img = img.convert('RGB')
    
    output_path = os.path.join(OUTPUT_DIR, f"{company_slug}.webp")
    final_img.save(output_path, 'WEBP', quality=95, optimize=True)
    
    print(f"  Generated: {output_path}")
    return True

def main():
    print("=" * 60)
    print("HQ Company Image Generator (with text)")
    print("=" * 60)
    ensure_directories()
    
    success, skip, error = 0, 0, 0
    for company, (logo_file, bg_type, display_name) in COMPANY_LOGOS.items():
        if generate_company_image(company, logo_file, bg_type, display_name):
            success += 1
        else:
            error += 1

    print("\n" + "=" * 60)
    print(f"Summary: {success} generated, {error} errors")
    print("=" * 60)

if __name__ == "__main__":
    main()
