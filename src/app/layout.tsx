import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import SidebarContainer from '../components/Sidebar/SidebarContainer';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import CustomThemeProvider from '../components/CustomThemeProvider';
import { Box, Paper } from '@mui/material';

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
				<AppRouterCacheProvider>
					<CustomThemeProvider>
						<main className="flex gap-5 md:p-5 p-2 w-full h-screen">
							<div className="h-full md:block hidden">
								<SidebarContainer />
							</div>
							<Box
							component={Paper}
								sx={{
									display: 'flex',
									borderRadius: '20px',
									boxShadow: '20px',
									width: '100%',
									height: '100%',
									overflowY: 'auto',
									padding: '10px',
								}}>
								{children}
							</Box>
						</main>
					</CustomThemeProvider>
				</AppRouterCacheProvider>
			</body>
		</html>
	);
}
