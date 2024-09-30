import '@mantine/core/styles.css';
import React from 'react';
import { MantineProvider, ColorSchemeScript } from '@mantine/core';
import { theme } from '../theme';
import { Metadata } from 'next';
import styles from './main.module.css';
import Footer from '@/components/Footer';
import './globals.css';
import Header from '@/components/Header';

export const metadata: Metadata = {
  title: 'Qodi Lab - Software Development & Consulting',
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
          <div className={styles.main}>{children}</div>
          <div className={styles.footerWrapper}>
            <div className={styles.footer}>
              <Footer></Footer>
            </div>
          </div>
          <div className={styles.header}>
            <Header></Header>
          </div>
        </MantineProvider>
      </body>
    </html>
  );
}
