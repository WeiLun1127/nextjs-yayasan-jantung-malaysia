import Footer from '@/components/Footer';
import Header from '@/components/Header';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header />
        <main className="content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
