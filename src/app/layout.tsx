import { cascadia } from '@/config/fonts';
import { SpeedInsights } from '@vercel/speed-insights/next';
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
      <SpeedInsights />
      <body className={cascadia.className}>{children}</body>
    </html>
  );
}
