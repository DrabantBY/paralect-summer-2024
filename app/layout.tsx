import type { Metadata } from 'next';

import { ColorSchemeScript, MantineProvider, Container, rem } from '@mantine/core';
import Navigation from './ui/navigation';

import theme from './theme';
import { inter } from './fonts';

import './globals.css';
import '@mantine/core/styles.layer.css';

export const metadata: Metadata = {
  title: 'Movie Search App',
  description: 'paralect-startup-summer-2024',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body className={inter.className}>
        <MantineProvider theme={theme}>
          <Container className="body-container" mih="100vh" size={rem(1440)} p={0}>
            <aside className="body-aside">
              <Navigation />
            </aside>
            <main>{children}</main>
          </Container>
        </MantineProvider>
      </body>
    </html>
  );
}
