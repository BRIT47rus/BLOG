import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'BLOG',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="ru">
            <body>
                <h1>Britанский BLOG</h1>
                <main>{children}</main>
            </body>
        </html>
    );
}
