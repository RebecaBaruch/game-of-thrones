import './globals.css';

import React from 'react';
import { Inter } from 'next/font/google';
import Head from './head';

import Navbar from './components/navbar';

const inter = Inter({ subsets: ['latin'] });

// export const metadata = {
//   title: 'GOT',
//   description: 'Generated by create next app',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <Head />
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
