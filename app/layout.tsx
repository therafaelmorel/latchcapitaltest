import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'LÅTCH CAPITAL — Holding Company & Venture Capital',
  description: 'LÅTCH CAPITAL invests in exceptional founders, operators, and ideas with a long-term view toward enduring value creation.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
