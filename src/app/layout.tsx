import '@mantine/core/styles.css';
import React from 'react';
import { MantineProvider, ColorSchemeScript } from '@mantine/core';
import { theme } from '../theme';
import { Metadata } from 'next';
import styles from './main.module.css';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Qodi Lab Homepage',
  description: 'Software oplossingen op maat.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='nl'>
      <head>
        <ColorSchemeScript />
      </head>
      <body className={styles.body}>
        <MantineProvider theme={theme}>
          {children}
          <Footer></Footer>
        </MantineProvider>
      </body>
    </html>
  );
}
