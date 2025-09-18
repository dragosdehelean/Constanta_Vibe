import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import Providers from './providers';
import './globals.css';

export const metadata: Metadata = {
  title: 'Constanta Pass',
  description: 'Aplicatie Next.js folosind Material UI si Redux Toolkit'
};

export default function RootLayout({
  children
}: {
  children: ReactNode;
}) {
  return (
    <html lang="ro" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}