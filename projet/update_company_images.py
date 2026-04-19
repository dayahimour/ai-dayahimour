#!/usr/bin/env python3
"""
Update company articles to use the generated images.
"""

import os
import re

BLOG_EN_DIR = "/home/daya/Desktop/ai-dayahimour/src/content/blog-en"
IMAGE_BASE_PATH = "/images"

# Companies that have generated images
AVAILABLE_IMAGES = [
    "alibaba-qwen", "anthropic", "black-forest-labs", "bytedance",
    "cohere", "deepseek", "google-deepmind", "hugging-face",
    "kuaishou", "meta-ai", "microsoft", "midjourney",
    "minimax", "mistral-ai", "moonshot-ai", "nvidia",
    "openai", "perplexity-ai", "runwayml", "stability-ai",
    "stepfun", "xai", "xiaomi-mimo", "zhipu-ai"
]


def update_article_image(filepath, slug):
    """Update the image path in a company article."""
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Check if this company has a generated image
    if slug not in AVAILABLE_IMAGES:
        print(f"  No generated image for: {slug}")
        return False

    # Check if it's a company article
    if 'category: "companies"' not in content and "category: 'companies'" not in content:
        return False

    # Update image path
    new_image_path = f'{IMAGE_BASE_PATH}/{slug}.webp'

    # Replace image line in frontmatter
    # Match: image: "/images/og-default.png" or image: "/images/something.jpg"
    updated_content = re.sub(
        r'^image:\s*"[^"]*"',
        f'image: "{new_image_path}"',
        content,
        flags=re.MULTILINE
    )

    if updated_content != content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(updated_content)
        print(f"  Updated: {slug} -> {new_image_path}")
        return True
    else:
        print(f"  No change needed: {slug}")
        return False


def main():
    print("=" * 60)
    print("Updating Company Article Images")
    print("=" * 60)

    updated_count = 0

    for filename in os.listdir(BLOG_EN_DIR):
        if filename.endswith(".md"):
            filepath = os.path.join(BLOG_EN_DIR, filename)
            slug = filename.replace(".md", "")

            print(f"\nProcessing: {slug}")

            if update_article_image(filepath, slug):
                updated_count += 1

    print("\n" + "=" * 60)
    print(f"Summary: {updated_count} articles updated")
    print("=" * 60)


if __name__ == "__main__":
    main()
