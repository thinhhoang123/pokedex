import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { cn } from '@/lib/utils';
import '@/styles/index.css';
import ScrollToTop from '@/components/ScrollToTop';
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Pokedex',
  description:
    'Pokedex is a web application that allows you to search for Pokemon',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn('font-inter', inter.className)}>
        <main className="container">{children}</main>
        <ScrollToTop />
      </body>
    </html>
  );
}

