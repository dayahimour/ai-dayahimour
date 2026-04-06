# دليل إنشاء صور المقالات بالذكاء الاصطناعي

## 📋 ملخص المشروع
- **إجمالي المقالات:** 46 مقالة
- **الصور الموجودة حاليًا (12 صورة):** elevenlabs, flux-2-pro, gemma4, GLM5, GPT-Image-1-5, kling3, openclaw, Seedance 2-0, zapier-ai, sora-2-pro
- **الصور المطلوبة:** 34 صورة جديدة (جميع المقالات التي تستخدم og-default.svg)
- **نمط الصور الموحد:** خلفية داكنة (أسود/أزرق داكن/رمادي غامق) + شعار الأداة/الشركة + اسم النموذج/الأداة بخط واضح وجذاب + عناصر بصرية تعكس الموضوع

---

## 🎨 نمط التصميم الموحد

### المواصفات العامة:
- **الأبعاد:** 1200×630 بكسل (نسبة 1.91:1 مثالية لـ OG images)
- **الخلفية:** تدرج لوني داكن (أسود ← أزرق داكن #0a1628 ← #1a1a2e)
- **العناصر الأساسية:**
  1. شعار الشركة/الأداة الرسمي (high-res)
  2. اسم النموذج/الأداة بخط كبير وواضح
  3. عنصر بصري يعكس التخصص (أيقونات/رسوم مجردة)
  4. تأثيرات إضاءة خفيفة (glow effects بالأزرق/البنفسجي)

### الألوان المسموحة:
- الخلفية: أسود، أزرق داكن (#0a1628، #1a1a2e)، رمادي غامق (#2d2d2d)
- التمييز: أزرق (#0066ff)، بنفسجي (#7c3aed)، أبيض للنصوص
- التأثيرات: توهج أزرق/بنفسجي خفيف

---

## 📝 البرومبت الأساسي (Master Prompt)

```
Create a professional tech article cover image, 1200x630 pixels. Dark gradient background from deep navy (#0a1628) to black. In the center, prominently display the [الشعار الرسمي] logo with the text "[اسم الأداة/النموذج]" in bold, modern white typography. Add subtle glowing effects in blue and purple around the logo. Include visual elements that reflect [موضوع/تخصص الأداة] - such as [عناصر بصرية محددة]. Clean, minimalist, professional design suitable for a tech blog article. No watermarks, no extra text.
```

---

## 📋 قائمة الصور المطلوبة

### 🔵 المقالات التي تحتاج صور جديدة (34 صورة)

---

#### 1. agentic-ai-2026.md
- **العنوان:** نظام الوكلاء (Agentic AI) في 2026
- **الموضوع:** وكلاء الذكاء الاصطناعي المستقلين، أطر عمل، أتمتة المهام
- **اسم الصورة المقترح:** `agentic-ai-2026.webp`
- **البرومبت:**
```
Create a professional tech article cover image, 1200x630 pixels. Dark gradient background from deep navy (#0a1628) to black. Central abstract graphic representing AI agents - interconnected nodes or robot-like icons working together. Text "Agentic AI 2026" in bold, modern white typography. Subtle blue and purple glowing lines connecting elements representing autonomous agents. Clean, minimalist, futuristic design. No watermarks or extra text.
```
- **كلمات بحث Google:** "AI agents autonomous illustration", "agentic AI concept art", "multi-agent system diagram futuristic"

---

#### 2. ai-ethics.md
- **العنوان:** أخلاقيات الذكاء الاصطناعي في 2026
- **الموضوع:** الأخلاقيات، التنظيم، التحيز، التزييف العميق
- **اسم الصورة المقترح:** `ai-ethics-2026.webp`
- **البرومبت:**
```
Create a professional tech article cover image, 1200x630 pixels. Dark gradient background. Central visual: a balanced scale icon merged with a digital brain or circuit pattern, representing AI ethics and justice. Text "AI Ethics 2026" in clean white typography. Subtle elements: European Union stars, privacy shield icon. Blue and white color scheme with soft glow effects. Clean, professional, thought-provoking design. No watermarks.
```
- **كلمات بحث Google:** "AI ethics illustration", "artificial intelligence regulation concept", "digital ethics scale"

---

#### 3. ai-future-2030.md
- **العنوان:** مستقبل الذكاء الاصطناعي 2026-2040
- **الموضوع:** التنبؤ بالمستقبل، AGI، سوق العمل، الطب الدقيق
- **اسم الصورة المقترح:** `ai-future-2030.webp`
- **البرومبت:**
```
Create a professional tech article cover image, 1200x630 pixels. Dark gradient background transitioning to a futuristic cityscape silhouette at the bottom. A timeline or arrow pointing from 2026 to 2040 with AI symbols along it. Text "AI Future 2030-2040" in bold white typography. Holographic-style elements suggesting future technology. Blue-purple gradient accents with subtle particle effects. Clean, visionary design. No watermarks.
```
- **كلمات بحث Google:** "future AI technology 2030", "AGI timeline concept", "artificial intelligence future visualization"

---

#### 4. ai-models-comparison.md
- **العنوان:** مقارنة شاملة لأقوى نماذج الذكاء الاصطناعي
- **الموضوع:** مقارنة نماذج AI، benchmarks، GPT vs Claude vs Gemini
- **اسم الصورة المقترح:** `ai-models-comparison.webp`
- **البرومبت:**
```
Create a professional tech article cover image, 1200x630 pixels. Dark background with a stylized comparison chart or ranking podium in the center. Five abstract AI model icons or nodes arranged horizontally, connected by comparison lines. Text "AI Models Comparison 2026" in bold white typography. Blue accent lighting. Clean infographic-style design suitable for tech article. No brand logos. No watermarks.
```
- **كلمات بحث Google:** "AI model comparison chart", "LLM benchmark visualization", "AI models ranking 2026"

---

#### 5. best-ai-tools-2026.md
- **العنوان:** أفضل 15 أداة ذكاء اصطناعي
- **الموضوع:** أدوات AI، تصنيفات، مراجعات، فئات متعددة
- **اسم الصورة المقترح:** `best-ai-tools-2026.webp`
- **البرومبت:**
```
Create a professional tech article cover image, 1200x630 pixels. Dark gradient background. Central grid or showcase of abstract tool/app icons arranged elegantly, with a crown or star badge indicating "best of". Text "Best AI Tools 2026" in bold, modern typography. Subtle glowing effects on selected icons. Gold and blue accent colors on dark background. Professional, curated collection feel. No watermarks.
```
- **كلمات بحث Google:** "best AI tools collection", "top AI applications showcase", "AI software awards 2026"

---

#### 6. claude-code.md
- **العنوان:** Claude Code - وكيل البرمجة المستقل
- **الموضوع:** أداة سطر الأوامر، قراءة codebase، تنفيذ.shell
- **اسم الصورة المقترح:** `claude-code.webp`
- **البرومبت:**
```
Create a professional tech article cover image, 1200x630 pixels. Dark gradient background. Prominent Claude/Anthropic logo (or a stylized terminal window with code). Text "Claude Code" in large white monospace font. Terminal-like aesthetic with green or blue code text visible. Subtle agentic/automation visual elements like arrows or flow diagrams. Clean developer-focused design. No watermarks.
```
- **كلمات بحث Google:** "Claude Code terminal screenshot", "Anthropic Claude developer", "AI coding assistant terminal"

---

#### 7. claude-opus-4-6.md
- **العنوان:** Claude Opus 4.6 - أقوى نموذج من أنثروبيك
- **الموضوع:** نموذج رائد، سياق مليون رمز، أداء متفوق
- **اسم الصورة المقترح:** `claude-opus-4-6.webp`
- **البرومبت:**
```
Create a professional tech article cover image, 1200x630 pixels. Dark gradient background. Anthropic Claude logo prominently displayed. Text "Claude Opus 4.6" in elegant, premium white typography. Subtle crown or peak mountain visual element suggesting "top tier". Golden or amber accent glow effects to differentiate from other Claude models. Premium, flagship feel. No watermarks.
```
- **كلمات بحث Google:** "Claude Opus Anthropic", "Claude Opus 4.6 logo", "Anthropic flagship model"

---

#### 8. claude-sonnet-4-6.md
- **العنوان:** Claude Sonnet 4.6 - أفضل خيار لمعظم المستخدمين
- **الموضوع:** نموذج متوسط السعر عالي الأداء، مجاني للجمهور
- **اسم الصورة المقترح:** `claude-sonnet-4-6.webp`
- **البرومبت:**
```
Create a professional tech article cover image, 1200x630 pixels. Dark gradient background. Anthropic Claude logo with musical/wave visual element suggesting "Sonnet". Text "Claude Sonnet 4.6" in clean white typography. Blue-purple gradient accents. Design suggesting balance between performance and accessibility. Clean, modern aesthetic. No watermarks.
```
- **كلمات بحث Google:** "Claude Sonnet logo", "Anthropic Sonnet model", "Claude balanced model"

---

#### 9. cline.md
- **العنوان:** Cline — وكيل البرمجة مفتوح المصدر
- **الموضوع:** VS Code extension، مفتوح المصدر، تكامل نماذج متعددة
- **اسم الصورة المقترح:** `cline.webp`
- **البرومبت:**
```
Create a professional tech article cover image, 1200x630 pixels. Dark gradient background. VS Code-style window with a robot paw icon (Cline). Text "Cline" in bold typography with open-source/ GitHub accent styling. Subtle code brackets or open-source infinity symbol. Blue and green accent colors suggesting open-source community. Developer-friendly aesthetic. No watermarks.
```
- **كلمات بحث Google:** "Cline VS Code extension", "Cline AI coding open source", "Cline GitHub project"

---

#### 10. cursor.md
- **العنوان:** Cursor - محرر الكود الذكي
- **الموضوع:** AI-native editor، Composer، Cloud Agents
- **اسم الصورة المقترح:** `cursor.webp`
- **البرومبت:**
```
Create a professional tech article cover image, 1200x630 pixels. Dark gradient background. Cursor logo (or a stylized blinking cursor in a code editor frame). Text "Cursor AI Editor" in modern typography. Subtle code completion suggestions visible in the background. Green and blue accents suggesting productivity and AI assistance. Clean, editor-focused design. No watermarks.
```
- **كلمات بحث Google:** "Cursor AI editor logo", "Cursor code editor screenshot", "AI code editor 2026"

---

#### 11. deepseek-v3-2.md
- **العنوان:** DeepSeek V3.2 - نموذج مفتوح المصدر
- **الموضوع:** كفاءة حسابية، أداء استدلالي، مهام وكيلة
- **اسم الصورة المقترح:** `deepseek-v3-2.webp`
- **البرومبت:**
```
Create a professional tech article cover image, 1200x630 pixels. Dark gradient background. DeepSeek company logo prominently displayed. Text "DeepSeek V3.2" in bold white typography. Visual element suggesting deep exploration or search (magnifying glass with AI brain, or deep ocean metaphor with neural networks). Blue-cyan accent colors on dark. Technical, efficient feel. No watermarks.
```
- **كلمات بحث Google:** "DeepSeek V3 logo", "DeepSeek AI company", "DeepSeek open source model"

---

#### 12. descript.md
- **العنوان:** Descript - تحرير الفيديو والبودكاست بالنص
- **الموضوع:** تحرير بالنص، بودكاست، إنتاج محتوى
- **اسم الصورة المقترح:** `descript.webp`
- **البرومبت:**
```
Create a professional tech article cover image, 1200x630 pixels. Dark gradient background. Descript company logo. Text "Descript" in clean typography. Visual elements combining text document and video/film strip, showing text-to-video editing concept. Purple and blue accent colors. Waveform or audio visual element subtly integrated. Creative professional aesthetic. No watermarks.
```
- **كلمات بحث Google:** "Descript video editor logo", "Descript text-based editing", "Descript podcast tool"

---

#### 13. gemini-3-1-pro.md
- **العنوان:** Gemini 3.1 Pro - عرش الاستنتاج العلمي
- **الموضوع:** Google، استنتاج علمي، سياق طويل، أداء متميز
- **اسم الصورة المقترح:** `gemini-3-1-pro.webp`
- **البرومبت:**
```
Create a professional tech article cover image, 1200x630 pixels. Dark gradient background. Google Gemini logo prominently displayed. Text "Gemini 3.1 Pro" in bold white typography. Subtle constellation or gemstone visual elements suggesting the Gemini name. Blue and green Google-inspired accent colors with premium glow. Scientific and analytical feel. No watermarks.
```
- **كلمات بحث Google:** "Google Gemini 3.1 logo", "Gemini Pro official", "Google AI model 2026"

---

#### 14. gemini-3-pro-image.md
- **العنوان:** Gemini 3 Pro Image (Nano Banana Pro)
- **الموضوع:** توليد وتعديل الصور، جودة استوديو
- **اسم الصورة المقترح:** `gemini-3-pro-image.webp`
- **البرومبت:**
```
Create a professional tech article cover image, 1200x630 pixels. Dark gradient background. Google Gemini logo combined with a creative image generation visual (camera lens, paint brush, or photo frame). Text "Gemini Image Generation" in modern typography. Subtle colorful images or art elements emerging from the logo. Vibrant colors (blue, green, yellow) on dark background. Creative AI feel. No watermarks.
```
- **كلمات بحث Google:** "Gemini image generation", "Nano Banana Pro Google", "Gemini image editing AI"

---

#### 15. gpt-5-4.md
- **العنوان:** GPT-5.4 - النموذج الأقوى من OpenAI
- **الموضوع:** تفكير منطقي مطول، وكلاء ذاتيين، OpenAI
- **اسم الصورة المقترح:** `gpt-5-4.webp`
- **البرومبت:**
```
Create a professional tech article cover image, 1200x630 pixels. Dark gradient background. OpenAI logo prominently displayed. Text "GPT-5.4" in large, bold white typography. Subtle brain or thinking visual element suggesting reasoning capabilities. OpenAI's signature blue-green gradient accent colors. Premium, cutting-edge AI feel. Clean and authoritative. No watermarks.
```
- **كلمات بحث Google:** "OpenAI GPT 5.4 logo", "GPT-5 OpenAI official", "OpenAI latest model 2026"

---

#### 16. gpt5-analysis.md
- **العنوان:** DeepSeek V4 - التسريبات المنتظرة
- **الموضوع:** تسريبات، صدمة صينية قادمة، منافسة
- **اسم الصورة المقترح:** `deepseek-v4-leaks.webp`
- **البرومبت:**
```
Create a professional tech article cover image, 1200x630 pixels. Dark gradient background with mysterious/teaser aesthetic. DeepSeek logo partially revealed or with a "coming soon" feel. Text "DeepSeek V4 Coming Soon" in bold typography. Subtle radar or detection visual elements. Red and blue accent lighting creating intrigue. Mysterious, anticipatory design. No watermarks.
```
- **كلمات بحث Google:** "DeepSeek V4 teaser", "DeepSeek next model", "Chinese AI model leak"

---

#### 17. grok-4-20-multi-agent-xai.md
- **العنوان:** Grok 4.20 Multi-Agent - الوكلاء المتعددين
- **الموضوع:** xAI، بحث تعاوني، وكلاء متعددين
- **اسم الصورة المقترح:** `grok-4-20-multi-agent.webp`
- **البرومبت:**
```
Create a professional tech article cover image, 1200x630 pixels. Dark gradient background. xAI/Grok logo prominently displayed. Text "Grok 4.20 Multi-Agent" in bold typography. Visual representation of multiple agents working together (connected nodes, team icons). Space-themed elements subtly referencing SpaceX/xAI ecosystem. Blue and white accent colors. Futuristic, collaborative AI design. No watermarks.
```
- **كلمات بحث Google:** "xAI Grok logo", "Grok multi agent", "Elon Musk AI 2026"

---

#### 18. hermes-agent.md
- **العنوان:** Hermes Agent - الوكيل المتعلم
- **الموضوع:** Nous Research، ذاكرة دائمة، تعلم مستمر
- **اسم الصورة المقترح:** `hermes-agent.webp`
- **البرومبت:**
```
Create a professional tech article cover image, 1200x630 pixels. Dark gradient background. Hermes/Messenger-inspired robot icon or winged AI agent symbol representing Nous Research's project. Text "Hermes Agent" in bold typography. Subtle memory/learning visual elements (growing tree, expanding network, or accumulating blocks). Purple and gold accent colors referencing Greek mythology. No watermarks.
```
- **كلمات بحث Google:** "Nous Research Hermes", "Hermes AI agent open source", "Nous Research logo"

---

#### 19. isekai-zero.md
- **العنوان:** ISEKAI ZERO - منصة المغامرات التفاعلية
- **الموضوع:** قصص تفاعلية، عوالم إجرائية، ترفيه AI
- **اسم الصورة المقترح:** `isekai-zero.webp`
- **البرومبت:**
```
Create a professional tech article cover image, 1200x630 pixels. Dark gradient background with subtle fantasy/gaming aesthetic. Portal or gateway visual element representing isekai (another world) concept. Text "ISEKAI ZERO" in bold, gaming-inspired typography. Subtle pixel art or game UI elements. Purple and cyan accent colors creating an immersive, adventurous feel. No watermarks.
```
- **كلمات بحث Google:** "ISEKAI ZERO game", "AI interactive storytelling", "isekai AI platform"

---

#### 20. janitor-ai.md
- **العنوان:** Janitor AI - منصة الشخصيات الافتراضية
- **الموضوع:** شخصيات افتراضية، ترفيه تحادثي
- **اسم الصورة المقترح:** `janitor-ai.webp`
- **البرومبت:**
```
Create a professional tech article cover image, 1200x630 pixels. Dark gradient background. Abstract character/avatar icons in circular frames suggesting AI personas. Text "Janitor AI" in modern typography. Subtle chat bubble or conversation visual elements. Blue and pink accent colors. Clean, character-focused design without being explicit. Professional tech article aesthetic. No watermarks.
```
- **كلمات بحث Google:** "Janitor AI characters", "AI character platform", "chatbot AI 2026"

---

#### 21. kilo-code.md
- **العنوان:** Kilo Code - وكيل البرمجة الثاني عالمياً
- **الموضوع:** 2.18 تريليون رمز، مفتوح المصدر، VS Code
- **اسم الصورة المقترح:** `kilo-code.webp`
- **البرومبت:**
```
Create a professional tech article cover image, 1200x630 pixels. Dark gradient background. VS Code-style window with "KC" or Kilo Code branding. Text "Kilo Code" in bold developer-focused typography. Subtle code metrics counter (2.18T tokens) visual element. Green and blue accent colors suggesting growth and code. Developer productivity aesthetic. No watermarks.
```
- **كلمات بحث Google:** "Kilo Code VS Code", "Kilo Code AI extension", "open source coding agent"

---

#### 22. kimi-k2-5.md
- **العنوان:** Kimi K2.5 - النموذج الصيني المتميز
- **الموضوع:** Moonshot AI، رياضيات، برمجة، MoE
- **اسم الصورة المقترح:** `kimi-k2-5.webp`
- **البرومبت:**
```
Create a professional tech article cover image, 1200x630 pixels. Dark gradient background. Moonshot AI / Kimi logo prominently displayed. Text "Kimi K2.5" in bold typography. Subtle math equations and code brackets in the background suggesting strengths. Purple and cyan accent colors. Efficient, technical design emphasizing MoE architecture. No watermarks.
```
- **كلمات بحث Google:** "Kimi K2 Moonshot AI", "Kimi Chinese AI model", "Moonshot AI logo"

---

#### 23. lemonade.md
- **العنوان:** Lemonade - بناء ألعاب Roblox
- **الموضوع:** Roblox Studio، Luau، ألعاب AI
- **اسم الصورة المقترح:** `lemonade-roblox.webp`
- **البرومبت:**
```
Create a professional tech article cover image, 1200x630 pixels. Dark gradient background with gaming aesthetic. Lemon icon or lemonade-themed AI element combined with game controller or Roblox-style block character. Text "Lemonade AI" in playful yet professional typography. Yellow and blue accent colors on dark. Gaming development aesthetic without copyright elements. No watermarks.
```
- **كلمات بحث Google:** "Lemonade Roblox AI", "AI game development tool", "Luau code generator AI"

---

#### 24. llama-4-maverick.md
- **العنوان:** Llama 4 Maverick - النموذج المفتوح المصدر
- **الموضوع:** Meta، MoE، مفتوح المصدر، منافسة GPT
- **اسم الصورة المقترح:** `llama-4-maverick.webp`
- **البرومبت:**
```
Create a professional tech article cover image, 1200x630 pixels. Dark gradient background. Meta AI / Llama mascot or llama silhouette stylized for tech. Text "Llama 4 Maverick" in bold typography. Subtle open-source infinity symbol or Meta branding. Orange and blue accent colors creating a rebellious, innovative feel. Professional open-source AI aesthetic. No watermarks.
```
- **كلمات بحث Google:** "Meta Llama 4 logo", "Llama 4 Maverick official", "Meta open source AI 2026"

---

#### 25. lovable.md
- **العنوان:** Lovable - من النص إلى تطبيقات ويب
- **الموضوع:** Vibe coding، تطبيقات full-stack، نمو سريع
- **اسم الصورة المقترح:** `lovable.webp`
- **البرومبت:**
```
Create a professional tech article cover image, 1200x630 pixels. Dark gradient background. Heart or affection-themed icon combined with code brackets or web app mockup. Text "Lovable" in friendly, modern typography. Subtle web application UI elements in the background. Pink and purple accent colors on dark. Startup/growth aesthetic. No watermarks.
```
- **كلمات بحث Google:** "Lovable AI platform", "vibe coding app builder", "Lovable full-stack AI"

---

#### 26. midjourney-v8.md
- **العنوان:** Midjourney v8 - ثورة الصور السينمائية
- **الموضوع:** توليد صور، سينمائي، جودة عالية
- **اسم الصورة المقترح:** `midjourney-v8.webp`
- **البرومبت:**
```
Create a professional tech article cover image, 1200x630 pixels. Dark gradient background. Midjourney logo prominently displayed. Text "Midjourney v8" in elegant typography. Subtle cinematic film strip or camera aperture visual elements. Gold and white accents on dark background creating premium, artistic feel. Professional creative tool aesthetic. No watermarks.
```
- **كلمات بحث Google:** "Midjourney v8 logo", "Midjourney v8 AI art", "Midjourney official 2026"

---

#### 27. mimo-v2-pro-xiaomi.md
- **العنوان:** MiMo-V2-Pro - نموذج شاومي
- **الموضوع:** Xiaomi، تريليون معاملة، وكلاء ذكيين
- **اسم الصورة المقترح:** `mimo-v2-pro-xiaomi.webp`
- **البرومبت:**
```
Create a professional tech article cover image, 1200x630 pixels. Dark gradient background. Xiaomi logo prominently displayed. Text "MiMo V2 Pro" in bold white typography. Subtle smartphone or IoT device silhouette with expanding neural network. Orange (Xiaomi brand) and blue accent colors. Large-scale AI infrastructure feel. No watermarks.
```
- **كلمات بحث Google:** "Xiaomi MiMo AI", "Xiaomi large language model", "MiMo V2 Pro logo"

---

#### 28. minimax-m2-7.md
- **العنوان:** MiniMax M2.7 - النموذج الصيني الفعال
- **الموضوع:** MoE، 230 مليار معاملة، كفاءة التكلفة
- **اسم الصورة المقترح:** `minimax-m2-7.webp`
- **البرومبت:**
```
Create a professional tech article cover image, 1200x630 pixels. Dark gradient background. MiniMax company logo. Text "MiniMax M2.7" in modern typography. Visual elements suggesting efficiency - arrows optimizing, funnel, or scale balancing performance vs cost. Green and blue accent colors. Technical efficiency aesthetic. No watermarks.
```
- **كلمات بحث Google:** "MiniMax AI company China", "MiniMax M2 model", "MiniMax MoE architecture"

---

#### 29. openclaw-kimiclaw-2026.md
- **العنوان:** OpenClaw vs KimiClaw 2026
- **الموضوع:** مقارنة، وكيل شخصي، مفتوح المصدر مقابل سحابي
- **اسم الصورة المقترح:** `openclaw-vs-kimiclaw.webp`
- **البرومبت:**
```
Create a professional tech article cover image, 1200x630 pixels. Dark gradient background. Two contrasting AI agent icons facing each other - one with open-source aesthetic, one cloud/modern. Text "OpenClaw vs KimiClaw 2026" in bold typography. VS or crossed element in the center. Blue vs orange color contrast. Competitive comparison design. No watermarks.
```
- **كلمات بحث Google:** "OpenClaw AI assistant", "KimiClaw comparison", "AI agent comparison 2026"

---

#### 30. openclaw.md
- **العنوان:** OpenClaw - أسرع مشروع نموًا على GitHub
- **الموضوع:** مفتوح المصدر، 348 ألف نجمة، مساعد شخصي
- **اسم الصورة المقترح:** `openclaw.webp` (موجود بالفعل، لكن يمكن تحديثه)
- **ملاحظة:** هذه الصورة موجودة بالفعل.

---

#### 31. perplexity-ai.md
- **العنوان:** Perplexity AI - محرك الإجابات الذكي
- **الموضوع:** بحث AI، إجابات مع استشهادات، تحدي جوجل
- **اسم الصورة المقترح:** `perplexity-ai.webp`
- **البرومبت:**
```
Create a professional tech article cover image, 1200x630 pixels. Dark gradient background. Perplexity AI logo prominently displayed (the current blue/teal spiral). Text "Perplexity AI" in clean typography. Subtle search bar or citation/reference visual elements. Teal and blue accent colors matching brand. Clean search engine aesthetic. No watermarks.
```
- **كلمات بحث Google:** "Perplexity AI logo official", "Perplexity search engine", "Perplexity AI 2026"

---

#### 32. qwen-3-6-plus.md
- **العنوان:** Qwen3.6 Plus - نموذج الجيل الجديد
- **الموضوع:** Alibaba، سياق مليون رمز، وكيل برمجة
- **اسم الصورة المقترح:** `qwen-3-6-plus.webp`
- **البرومبت:**
```
Create a professional tech article cover image, 1200x630 pixels. Dark gradient background. Alibaba Qwen/Tongyi Qianwen logo prominently displayed. Text "Qwen 3.6 Plus" in bold typography. Subtle cloud/computing visual elements referencing Alibaba Cloud. Orange (Alibaba) and blue accent colors. Large-scale AI platform feel. No watermarks.
```
- **كلمات بحث Google:** "Qwen 3.6 logo", "Alibaba Tongyi Qianwen", "Qwen Plus AI model"

---

#### 33. roo-code.md
- **العنوان:** Roo Code - فريق وكلاء متخصصين
- **الموضوع:** VS Code، أنماط متعددة، فريق تطوير ذكي
- **اسم الصورة المقترح:** `roo-code.webp`
- **البرومبت:**
```
Create a professional tech article cover image, 1200x630 pixels. Dark gradient background. Roo/kangaroo icon combined with VS Code aesthetic. Text "Roo Code" in bold developer typography. Multiple agent mode icons: Architect, Code, Debug - shown as distinct worker icons or badges. Green and orange accent colors. Team collaboration aesthetic. No watermarks.
```
- **كلمات بحث Google:** "Roo Code VS Code", "Roo Code multi-agent", "open source dev agent"

---

#### 34. runway-gen-4-5.md
- **العنوان:** Runway Gen-4.5 - توليد الفيديو السينمائي
- **الموضوع:** فيديو AI، إنتاج سينمائي، دقة عالية
- **اسم الصورة المقترح:** `runway-gen-4-5.webp`
- **البرومبت:**
```
Create a professional tech article cover image, 1200x630 pixels. Dark gradient background. Runway ML logo prominently displayed. Text "Gen-4.5" in cinematic-style typography. Film strip or movie clapperboard visual element merged with AI brain. Purple and gold accent colors creating premium cinematic feel. Professional video production aesthetic. No watermarks.
```
- **كلمات بحث Google:** "Runway Gen-4 logo", "Runway ML video AI", "Runway Gen-4.5 official"

---

#### 35. seedance-2-0.md
- **العنوان:** Seedance 2.0 - توليد الفيديو متعدد الوسائط
- **الموضوع:** ByteDance، نص+صورة+صوت+فيديو، سينمائي
- **اسم الصورة المقترح:** `seedance-2-0.webp` (موجود صورة مشابهة)
- **ملاحظة:** تحتاج مراجعة الصورة الموجودة.

---

#### 36. seedream-5-0.md
- **العنوان:** Seedream 5.0 Lite - توليد الصور
- **الموضوع:** ByteDance، توليد صور، بحث إنترنت
- **اسم الصورة المقترح:** `seedream-5-0.webp`
- **البرومبت:**
```
Create a professional tech article cover image, 1200x630 pixels. Dark gradient background. ByteDance/Seedream logo. Text "Seedream 5.0" in modern typography. Visual elements: image frames, search/globe icon suggesting internet search integration. Blue and teal accent colors. Multi-modal AI generation aesthetic. No watermarks.
```
- **كلمات بحث Google:** "Seedream 5 ByteDance", "ByteDance image generation", "Seedream AI logo"

---

#### 37. sora-2-pro.md
- **العنوان:** Sora 2 Pro - توليد الفيديو السينمائي
- **الموضوع:** OpenAI، فيديو 25 ثانية، صوت متزامن
- **اسم الصورة المقترح:** `sora-2-pro.webp` (موجود بالفعل)
- **ملاحظة:** هذه الصورة موجودة بالفعل.

---

#### 38. step-3-5-flash.md
- **العنوان:** Step 3.5 Flash - النموذج الصيني السريع
- **الموضوع:** Stepfun، سرعة فائقة، 350 توكن/ثانية
- **اسم الصورة المقترح:** `step-3-5-flash.webp`
- **البرومبت:**
```
Create a professional tech article cover image, 1200x630 pixels. Dark gradient background. Stepfun company logo. Text "Step 3.5 Flash" in bold typography with lightning bolt speed element. Speed lines or motion blur visual effects. Yellow/lightning and blue accent colors on dark. High-performance, speed-focused design. No watermarks.
```
- **كلمات بحث Google:** "Stepfun AI logo", "Step 3.5 Flash model", "Chinese fast AI model"

---

#### 39. veo-3-1.md
- **العنوان:** Veo 3.1 - فيديو واقعي من Google
- **الموضوع:** Google DeepMind، 4K، صوت متزامن
- **اسم الصورة المقترح:** `veo-3-1.webp`
- **البرومبت:**
```
Create a professional tech article cover image, 1200x630 pixels. Dark gradient background. Google DeepMind branding with Veo name. Text "Veo 3.1" in cinematic typography. Film camera and 4K resolution visual elements subtly integrated. Blue and gold accent colors suggesting premium video quality. Professional video AI aesthetic. No watermarks.
```
- **كلمات بحث Google:** "Google Veo 3.1", "DeepMind video AI", "Google Veo logo"

---

## 🖼️ الصور الموجودة بالفعل (12 صورة)

| الصورة | الحالة | الملف |
|--------|--------|-------|
| ✅ ElevenLabs | موجود | `elevenlabs.webp` |
| ✅ FLUX.2 Pro | موجود | `flux-2-pro.webp` |
| ✅ Gemma 4 | موجود | `gemma4.webp` |
| ✅ GLM-5 | موجود | `GLM5.webp` |
| ✅ GPT-Image-1.5 | موجود | `GPT-Image-1-5.webp` |
| ✅ Kling 3.0 | موجود | `kling3.webp` |
| ✅ OpenClaw | موجود | `openclaw.webp` |
| ✅ Seedance 2.0 | موجود | `Seedance 2-0.webp` |
| ✅ Zapier AI | موجود | `zapier-ai.webp` |
| ✅ Sora 2 Pro | موجود | `sora-2-pro.webp` |

---

## 🚀 تعليمات الاستخدام

### لتوليد الصور بالذكاء الاصطناعي:

1. **انسخ البرومبت** الخاص بكل مقالة
2. **استخدم أحد الأدوات:** Midjourney v8, DALL-E 3, FLUX.2، أو أي أداة توليد صور
3. **الحجم المطلوب:** 1200×630 بكسل
4. **الصيغة:** WEBP أو PNG
5. **احفظ الصورة** في مجلد `public/images/`
6. **حدّث المقال** بإضافة مسار الصورة:
   ```yaml
   ---
   title: "..."
   description: "..."
   image: "/images/اسم-الصورة.webp"
   ---
   ```

### للبحث عن صور جاهزة على Google:
- استخدم **كلمات البحث** المرفقة مع كل مقالة
- ابحث عن صور **حرة الاستخدام** أو **Creative Commons**
- استخدم مواقع مثل: Unsplash, Pexels, Pixabay

---

*تم إنشاء هذا الدليل تلقائيًا بناءً على تحليل جميع مقالات الموقع*