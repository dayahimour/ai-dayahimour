import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'مدونة أخبار الذكاء الاصطناعي',
  description: 'مدونة تقدم آخر أخبار وتطورات الذكاء الاصطناعي',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={inter.className}>
        <header style={{ backgroundColor: '#f0f0f0', padding: '1rem', textAlign: 'center' }}>
          <h1>مدونة أخبار الذكاء الاصطناعي</h1>
          <nav>
            <a href="/" style={{ margin: '0 1rem' }}>الرئيسية</a>
            <a href="/about" style={{ margin: '0 1rem' }}>من نحن</a>
            <a href="/articles" style={{ margin: '0 1rem' }}>المقالات</a>
          </nav>
        </header>
        <main>{children}</main>
        <footer style={{ backgroundColor: '#333', color: '#fff', padding: '1rem', textAlign: 'center', marginTop: '2rem' }}>
          <p>© 2025 مدونة الذكاء الاصطناعي. جميع الحقوق محفوظة.</p>
        </footer>
      </body>
    </html>
  )
}