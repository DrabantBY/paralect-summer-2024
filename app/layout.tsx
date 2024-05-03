import { ColorSchemeScript, MantineProvider, Container, rem } from '@mantine/core';
import theme from './theme';
import { inter } from './fonts';
import type { Metadata } from 'next';

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
          <Container
            className="body-container"
            mih="100vh"
            size={rem(1440)}
            p={0}
            bg="gray.1">
            {children}
          </Container>
        </MantineProvider>
      </body>
    </html>
  );
}
