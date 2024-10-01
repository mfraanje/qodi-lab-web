import '@mantine/core/styles.css';
import React from 'react';
import { MantineProvider, ColorSchemeScript } from '@mantine/core';
import { theme } from '../theme';
import { Metadata } from 'next';
import styles from './main.module.css';
import Footer from '@/components/Footer';
import './globals.css';
import Header from '@/components/Header';
import { getLocale, getMessages } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';

export const metadata: Metadata = {
  title: 'Qodi Lab - Software Development & Consulting',
  description: 'Software oplossingen op maat.',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
        <ColorSchemeScript />
      </head>
      <body className={styles.body}>
        <MantineProvider theme={theme}>
          <NextIntlClientProvider messages={messages}>
            <div className={styles.main}>{children}</div>
            <div className={styles.footerWrapper}>
              <div className={styles.footer}>
                <Footer></Footer>
              </div>
            </div>
            <div className={styles.header}>
              <Header></Header>
            </div>
          </NextIntlClientProvider>
        </MantineProvider>
      </body>
    </html>
  );
}
