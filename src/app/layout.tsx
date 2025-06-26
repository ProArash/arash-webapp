import type { Metadata } from 'next';
import './globals.css';
import ThemeSwitcher from '../components/Theme/ThemeSwitcher';
import CustomAppProvider from '../components/Providers/CustomAppProvider';

export const metadata: Metadata = {
	title: 'Arash Ghanbari | آرش قنبری',
	description: `وب سایت شخصی من، اینجا میتونی سایت بخری!
			فروشگاهی، شرکتی یا شخصی`,
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
		<html lang="fa" dir="rtl">
			<body className={`antialiased`}>
				<CustomAppProvider>
					<ThemeSwitcher />
					{children}
				</CustomAppProvider>
			</body>
		</html>
	);
}
