import type { Metadata } from 'next';
import { ReactNode } from 'react';
import { Exo_2 } from 'next/font/google';
import './globals.css';

const exo2 = Exo_2({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Stream Emote',
	description: 'Stream Emote landing page',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={exo2.className}>{children}</body>
		</html>
	);
}
