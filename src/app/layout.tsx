import { Metadata } from '../../node_modules/next/types';

import { fustat } from './constants/font';
import './globals.css';

export const metadata: Metadata = {
  title: 'LLM Vikings',
  description: 'Best place for AI enthusiasts',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        <link
          rel='icon'
          href='/icon?<generated>'
          type='image/<generated>'
          sizes='<generated>'
        />
      </head>
      <body className={`${fustat.className} antialiased`}>
        <div id='modal'></div>
        {children}
      </body>
    </html>
  );
}
