import os
import re

blog_dir = 'src/content/blog/'
images_dir = 'public/images/'

# قائمة الصور المتاحة
available_images = [f for f in os.listdir(images_dir) if f.endswith(('.webp', '.png', '.jpg', '.svg'))]
print("الصور المتاحة:", available_images)

# خريطة المقالات للصور المناسبة
article_image_map = {
    'agentic-ai-2026.md': 'og-default.svg',
    'ai-ethics.md': 'og-default.svg',
    'ai-future-2030.md': 'og-default.svg',
    'ai-models-comparison.md': 'og-default.svg',
    'best-ai-tools-2026.md': 'og-default.svg',
    'claude-code.md': 'og-default.svg',
    'claude-opus-4-6.md': 'og-default.svg',
    'claude-sonnet-4-6.md': 'og-default.svg',
    'cline.md': 'og-default.svg',
    'cursor.md': 'og-default.svg',
    'deepseek-v3-2.md': 'og-default.svg',
    'descript.md': 'og-default.svg',
    'gemini-3-1-pro.md': 'og-default.svg',
    'gemini-3-pro-image.md': 'og-default.svg',
    'gpt-5-4.md': 'og-default.svg',
    'gpt5-analysis.md': 'og-default.svg',
    'grok-4-20-multi-agent-xai.md': 'og-default.svg',
    'hermes-agent.md': 'og-default.svg',
    'isekai-zero.md': 'og-default.svg',
    'janitor-ai.md': 'og-default.svg',
    'kimi-k2-5.md': 'og-default.svg',
    'lemonade.md': 'og-default.svg',
    'llama-4-maverick.md': 'og-default.svg',
    'lovable.md': 'og-default.svg',
    'midjourney-v8.md': 'og-default.svg',
    'mimo-v2-pro-xiaomi.md': 'og-default.svg',
    'minimax-m2-7.md': 'og-default.svg',
    'openclaw-kimiclaw-2026.md': 'og-default.svg',
    'perplexity-ai.md': 'og-default.svg',
    'qwen-3-6-plus.md': 'og-default.svg',
    'roo-code.md': 'og-default.svg',
    'runway-gen-4-5.md': 'og-default.svg',
    'seedance-2-0.md': 'og-default.svg',
    'seedream-5-0.md': 'og-default.svg',
    'step-3-5-flash.md': 'og-default.svg',
    'veo-3-1.md': 'og-default.svg',
}

# المقالات التي لها صور محددة
specific_images = {
    'elevenlabs.md': 'elevenlabs.webp',
    'flux-2-pro.md': 'flux-2-pro.webp',
    'gemma-4.md': 'gemma4.webp',
    'glm-5.md': 'GLM5.webp',
    'gpt-image-1-5.md': 'GPT-Image-1-5.webp',
    'kling-3-0.md': 'kling3.webp',
    'openclaw.md': 'openclaw.webp',
    'sora-2-pro.md': 'sora-2-pro.webp',
    'zapier-ai.md': 'zapier-ai.webp',
}

# دمج الخريطتين
article_image_map.update(specific_images)

updated_count = 0
for filename, image_name in article_image_map.items():
    filepath = os.path.join(blog_dir, filename)
    if not os.path.exists(filepath):
        print(f"⚠️ الملف غير موجود: {filename}")
        continue
    
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # التحقق مما إذا كان يحتوي على صورة خارجية
    has_external_image = bool(re.search(r'image:\s*"https?://', content))
    has_local_image = bool(re.search(r'image:\s*"/images/', content))
    has_empty_image = bool(re.search(r'image:\s*""', content))
    
    if has_external_image or has_empty_image or not has_local_image:
        # استبدال الصورة الخارجية أو الفارغة بالصورة المحلية
        new_content = re.sub(
            r'image:\s*"[^"]*"',
            f'image: "/images/{image_name}"',
            content,
            count=1
        )
        
        if new_content != content:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(new_content)
            updated_count += 1
            print(f"✅ تم تحديث: {filename} -> /images/{image_name}")
        else:
            print(f"⚠️ لم يتم تحديث: {filename}")

print(f"\n📊 تم تحديث {updated_count} مقالة بصور محلية")