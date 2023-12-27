import { cascadia } from '@/config/fonts';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'büshalte shop',
  description: 'büshalte shop',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cascadia.className}>{children}</body>
    </html>
  );
}
