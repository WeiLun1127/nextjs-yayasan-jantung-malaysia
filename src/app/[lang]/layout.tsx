import Footer from '@/components/Footer';
import Header from '@/components/Header';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { ReactNode } from 'react';
import { getDictionary } from '../../dictionaries';
import { i18n, type Locale } from '../../i18n-config';
import './globals.css';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'Yayasan Jantung Malaysia - The Heart Foundation of Malaysia',
  description: 'Yayasan Jantung Malaysia (YJM) - Heart Foundation of Malaysia',
  keywords:
    'heart, heart attack, stroke, World Heart Day, YJM, IJN, Institute Jantung Negara, hypertension, cholesterol, jump rope, go red for women, cornerstone content management system, cornerstone cms',
};

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: ReactNode;
  params: Promise<{ lang: Locale }>;
}>) {
  const { lang } = await params;
  const dictionaries = await getDictionary(lang);

  return (
    <html lang={lang}>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header dictionaries={dictionaries} />
        <main className="content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
