export default function HomePage() {
  return (
    <main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>مدونة أخبار الذكاء الاصطناعي</h1>
      <p>مرحباً بك في مدونة أخبار الذكاء الاصطناعي. هنا ننشر آخر التطورات والأبحاث في مجال الذكاء الاصطناعي.</p>
      <section>
        <h2>أحدث المقالات</h2>
        <ul>
          <li>التقدم في نماذج اللغة الكبيرة (LLMs) - يناير 2025</li>
          <li>أخلاقيات الذكاء الاصطناعي في الرعاية الصحية</li>
          <li>مستقبل السيارات ذاتية القيادة</li>
        </ul>
      </section>
      <footer style={{ marginTop: '3rem', borderTop: '1px solid #ccc', paddingTop: '1rem' }}>
        <p>© 2025 مدونة الذكاء الاصطناعي. جميع الحقوق محفوظة.</p>
      </footer>
    </main>
  );
}