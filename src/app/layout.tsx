import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import CustomThemeProvider from '../components/Theme/CustomThemeProvider';
import SidebarContainer from '../components/Sidebar/SidebarContainer';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Arash Ghanbari | Fullstack developer',
	description:
		'Erfahren Sie mehr über meine Projekte, Fähigkeiten und Erfahrungen als Fullstack-Entwickler',
	openGraph: {
		type: 'website',
		url: 'https://arash.vip',
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="de">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
				<CustomThemeProvider
					attribute={'class'}
					defaultTheme="dark"
					disableTransitionOnChange>
					<main className="flex gap-5 md:p-5 p-2 w-full h-screen">
						<div className="h-full md:block hidden">
							<SidebarContainer />
						</div>
						<div className="flex bg-secondary text-secondary-foreground rounded-md w-full h-full overflow-y-auto border border-border md:p-5 p-2">
							{children}
						</div>
					</main>
				</CustomThemeProvider>
			</body>
		</html>
	);
}
