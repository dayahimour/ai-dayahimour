import os
import re

blog_dir = 'src/content/blog/'
files = sorted([f for f in os.listdir(blog_dir) if f.endswith('.md')])

print('=' * 60)
print('1. المقالات الفارغة (أقل من 50 سطر وتحتوي على تعليقات هيكل)')
print('=' * 60)
empty_articles = []
for f in files:
    path = os.path.join(blog_dir, f)
    with open(path, 'r', encoding='utf-8') as fh:
        content = fh.read()
        lines = content.split('\n')
        line_count = len(lines)
        has_template_comments = bool(re.search(r'<!--.*(?:اكتب|أكمل|ضع|أضف|جروك|مقدمة|خاتمة|مقارنة|تجربة|رابط|هنا|اشرح|اكمل)', content))
        if line_count < 50 and has_template_comments:
            empty_articles.append(f)
            print(f'>> {f} - {line_count} سطر')

print()
print('=' * 60)
print('2. المقالات التي تخاطب القارئ مباشرة')
print('=' * 60)
reader_articles = []
for f in files:
    path = os.path.join(blog_dir, f)
    with open(path, 'r', encoding='utf-8') as fh:
        content = fh.read()
        patterns = [
            r'هل تعلم', r'هل تساءلت', r'هل جربت', r'هل فكرت',
            r'هل تريد', r'هل يمكنك', r'هل ترغب', r'هل تبحث',
            r'هل تحتاج', r'هل أنت مستعد', r'هل أنت جاهز', r'هل تعرف',
            r'هل سمعت', r'هل تستطيع', r'يمكنك أن', r'يجب عليك',
            r'عليك أن', r'لنبدأ', r'لنكتشف', r'دعنا', r'دعونا',
            r'إذا كنت', r'كيف يمكنك', r'ماذا يمكنك',
        ]
        matches = []
        for p in patterns:
            found = re.findall(p, content)
            if found:
                matches.extend(found)
        if len(matches) >= 5:
            reader_articles.append((f, len(matches)))
            print(f'>> {f} - {len(matches)} مرة مخاطبة مباشرة')

print()
print('=' * 60)
print('3. المقالات بدون صور محلية')
print('=' * 60)
no_local_images = []
for f in files:
    path = os.path.join(blog_dir, f)
    with open(path, 'r', encoding='utf-8') as fh:
        content = fh.read()
        has_local_image = bool(re.search(r'/images/', content))
        has_external_image = bool(re.search(r'https?://.*\.(jpg|png|webp|svg|gif|jpeg)', content))
        if not has_local_image:
            no_local_images.append((f, has_external_image))
            status = 'صورة خارجية' if has_external_image else 'بدون أي صورة'
            print(f'>> {f} - {status}')

print()
print('=' * 60)
print('الملخص النهائي:')
print('=' * 60)
print(f'\nالمقالات الفارغة: {len(empty_articles)}')
for a in empty_articles:
    print(f'  - {a}')
print(f'\nالمقالات التي تخاطب القارئ: {len(reader_articles)}')
for a, c in reader_articles:
    print(f'  - {a} ({c} مرة)')
print(f'\nالمقالات بدون صور محلية: {len(no_local_images)}')
for a, ext in no_local_images:
    status = 'صورة خارجية' if ext else 'بدون أي صورة'
    print(f'  - {a} ({status})')