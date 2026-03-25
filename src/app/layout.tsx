import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: 'Wei Giap | Personal Portfolio',
  description: 'Personal Portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`} style={{ scrollBehavior: 'smooth' }}>
      <body className="bg-black text-white min-h-screen selection:bg-white/20 selection:text-white overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
