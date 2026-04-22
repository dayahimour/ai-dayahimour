#!/usr/bin/env python3
"""
normalize_article_images.py
---------------------------
تطبيع أبعاد كل صور المقالات في public/images إلى النسبة القياسية 16:9
(1200x675) كي تظهر بدون أشرطة سوداء داخل حاوية ArticleLayout.astro
(aspect-[16/9] object-contain).

المنهجية:
- الصور المطابقة لـ 16:9 (± تسامح 2%) تُتجاهل.
- غير المطابقة:
    * تُصغَّر/تُكبَّر إلى "contain" داخل 1200x675 بدون قص المحتوى.
    * تُملأ الحواف (letterbox) بنسخة ممسوحة ومطموسة (Gaussian blur)
      من نفس الصورة — ذات ألوان متناسقة، فتختفي الأشرطة السوداء.
- تُحفظ بصيغة WebP بجودة 88 وضغط أمثل.
- تُنشأ نسخة احتياطية `.bak` قبل الاستبدال في حال الرغبة بالتراجع.

الاستخدام:
    python3 scripts/normalize_article_images.py            # كل الصور
    python3 scripts/normalize_article_images.py --dry-run  # تقرير فقط
    python3 scripts/normalize_article_images.py img1.webp  # ملفات محددة
    python3 scripts/normalize_article_images.py --no-backup
"""
from __future__ import annotations

import argparse
import os
import shutil
import sys
from pathlib import Path
from typing import Iterable

try:
    from PIL import Image, ImageFilter
except ImportError:
    sys.exit("Pillow مطلوب. ثبِّته بـ: pip install Pillow")

# ------------------------------------------------------------------
# الإعدادات القياسية
# ------------------------------------------------------------------
IMAGES_DIR   = Path(__file__).resolve().parent.parent / "public" / "images"
TARGET_W     = 1200
TARGET_H     = 675           # 1200 / (16/9)  → 16:9 تماماً
TARGET_RATIO = TARGET_W / TARGET_H
RATIO_TOL    = 0.02          # تسامح 2% يُعتبر معه الصورة "16:9 فعلاً"
BLUR_RADIUS  = 40            # شدة الطمس للخلفية
WEBP_QUALITY = 88
VALID_EXTS   = {".webp", ".png", ".jpg", ".jpeg"}
# صور مستثناة (ليست أغلفة مقالات حقيقية)
SKIP_NAMES   = {"og-default.png", "og-default.svg"}


# ------------------------------------------------------------------
# منطق المعالجة
# ------------------------------------------------------------------
def needs_normalization(w: int, h: int) -> bool:
    """هل الصورة تختلف عن 16:9 بقدر ملحوظ، أو أبعادها غير القياسية؟"""
    if (w, h) == (TARGET_W, TARGET_H):
        return False
    actual = w / h
    return abs(actual - TARGET_RATIO) / TARGET_RATIO > RATIO_TOL


def make_blurred_background(src: Image.Image) -> Image.Image:
    """خلفية ممسوحة تغطي 1200x675 بالكامل (cover)، مع طمس قوي."""
    src_ratio = src.width / src.height
    if src_ratio >= TARGET_RATIO:
        # الأصل أعرض → نأخذ ارتفاعاً كاملاً ثم نقص الجانبين
        new_h = TARGET_H
        new_w = int(round(new_h * src_ratio))
    else:
        # الأصل أطول → نأخذ عرضاً كاملاً ثم نقص الأعلى والأسفل
        new_w = TARGET_W
        new_h = int(round(new_w / src_ratio))

    bg = src.resize((new_w, new_h), Image.LANCZOS)
    # قص مركزي إلى 1200x675
    left = (new_w - TARGET_W) // 2
    top  = (new_h - TARGET_H) // 2
    bg = bg.crop((left, top, left + TARGET_W, top + TARGET_H))
    bg = bg.filter(ImageFilter.GaussianBlur(radius=BLUR_RADIUS))
    # طبقة داكنة خفيفة لتوحيد السطوع
    overlay = Image.new("RGB", bg.size, (15, 23, 42))  # #0f172a — نفس هوية الموقع
    bg = Image.blend(bg, overlay, 0.25)
    return bg


def fit_into_frame(src: Image.Image) -> Image.Image:
    """يلائم الصورة داخل 1200x675 مع حفظ النسبة (contain)."""
    src_ratio = src.width / src.height
    if src_ratio >= TARGET_RATIO:
        new_w = TARGET_W
        new_h = int(round(new_w / src_ratio))
    else:
        new_h = TARGET_H
        new_w = int(round(new_h * src_ratio))
    return src.resize((new_w, new_h), Image.LANCZOS)


def normalize_image(path: Path, *, backup: bool = True, dry_run: bool = False) -> bool:
    """يُطبّع صورة واحدة. يُرجع True إذا عُدّلت فعلاً."""
    with Image.open(path) as im:
        im = im.convert("RGB")
        w, h = im.size
        if not needs_normalization(w, h):
            print(f"  ✓ سليمة  : {path.name} ({w}x{h})")
            return False

        print(f"  ⟳ تطبيع  : {path.name} ({w}x{h}) → {TARGET_W}x{TARGET_H}")
        if dry_run:
            return True

        bg      = make_blurred_background(im)
        content = fit_into_frame(im)
        pos = ((TARGET_W - content.width) // 2, (TARGET_H - content.height) // 2)
        bg.paste(content, pos)

        if backup:
            bak = path.with_suffix(path.suffix + ".bak")
            if not bak.exists():
                shutil.copy2(path, bak)

        save_kwargs = {}
        if path.suffix.lower() == ".webp":
            save_kwargs = dict(quality=WEBP_QUALITY, method=6)
        elif path.suffix.lower() in (".jpg", ".jpeg"):
            save_kwargs = dict(quality=92, optimize=True)
        elif path.suffix.lower() == ".png":
            save_kwargs = dict(optimize=True)

        bg.save(path, **save_kwargs)
        return True


# ------------------------------------------------------------------
# واجهة سطر الأوامر
# ------------------------------------------------------------------
def collect_files(argv: list[str]) -> list[Path]:
    if argv:
        out = []
        for a in argv:
            p = Path(a)
            if not p.is_absolute():
                p = IMAGES_DIR / p
            if p.exists():
                out.append(p)
            else:
                print(f"  ! غير موجود: {p}", file=sys.stderr)
        return out
    return [
        p for p in sorted(IMAGES_DIR.iterdir())
        if p.suffix.lower() in VALID_EXTS and p.name not in SKIP_NAMES
    ]


def main() -> int:
    parser = argparse.ArgumentParser(description="تطبيع صور المقالات إلى 16:9 (1200x675).")
    parser.add_argument("files", nargs="*", help="ملفات محددة (اختياري).")
    parser.add_argument("--dry-run", action="store_true", help="اعرض ما سيُعدَّل دون كتابة.")
    parser.add_argument("--no-backup", action="store_true", help="لا تُنشئ ملفات .bak.")
    args = parser.parse_args()

    if not IMAGES_DIR.is_dir():
        sys.exit(f"مجلد الصور غير موجود: {IMAGES_DIR}")

    files = collect_files(args.files)
    print(f"الهدف: {TARGET_W}x{TARGET_H} (16:9)  —  عدد الملفات: {len(files)}\n")

    changed = 0
    for f in files:
        try:
            if normalize_image(f, backup=not args.no_backup, dry_run=args.dry_run):
                changed += 1
        except Exception as e:
            print(f"  ✗ فشل {f.name}: {e}", file=sys.stderr)

    verb = "سيُعدَّل" if args.dry_run else "عُدِّل"
    print(f"\nتم. {verb} {changed} من {len(files)} ملفاً.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
