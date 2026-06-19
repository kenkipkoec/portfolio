import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Ngetich Ken | Full-Stack Developer',
  description: 'Professional portfolio for Ngetich Ken — React, TypeScript, Python, Flutter, and AI developer.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
