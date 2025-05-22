import type { Metadata } from 'next';
import { Noto_Sans_Arabic } from 'next/font/google';
import './globals.css';

const notoSansArabic = Noto_Sans_Arabic({
  variable: '--font-noto-arabic',
  subsets: ['arabic'],
  weight: ['400', '700'],
});

export const metadata: Metadata = {
  title: 'منصة ثمانية',
  description: 'منصة رقمية عربية تقدّم محتوى معرفي وألعاب تفاعلية بجودة عالية لجمهور واسع.',
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${notoSansArabic.variable} antialiased font-sans`}>{children}</body>
    </html>
  );
}
