import type { Metadata } from 'next';
import { Noto_Sans } from 'next/font/google';

import './globals.css';

const noto_sans = Noto_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Storesy',
  description:
    'This versatile platform puts you in full control, providing a comprehensive suite of tools and features to manage every aspect of your business with ease and efficiency.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={noto_sans.className}>{children}</body>
    </html>
  );
}
