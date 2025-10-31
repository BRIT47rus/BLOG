import { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'BLOG',
};

export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: ReactNode;
}) {
  return (
    <html lang="ru">
      <body>
        <h1>Britанский BLOG</h1>
        {modal}
        <main>{children}</main>
      </body>
    </html>
  );
}
