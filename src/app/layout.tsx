import type { Metadata } from 'next';
import './globals.css';
import CustomAppProvider from '../components/Providers/CustomAppProvider';
import 'swiper/css';
import MainAppbar from '../components/Appbar/MainAppbar';
import FooterContainer from '../components/Home/FooterContainer';
import CopyrightContainer from '../components/Home/CopyrightContainer';

export const metadata: Metadata = {
	title: 'کمانگیر | طراحی وب اپلیکیشن',
	description:
		'راهکارهای نوآورانه طراحی و توسعه وب‌ اپلیکیشن‌ های پویا و مقیاس‌ پذیر برای کسب‌ و کارهای آینده‌ نگر. از ایده تا اجرا، کسب‌ و کار شما را در دنیای دیجیتال متحول می‌کنیم',
	keywords: [
		'کمانگیر',
		'طراحی وب اپلیکیشن',
		'طراحی سایت',
		'برنامه نویسی',
		'طراحی سایت با کمانگیر',
	],
	openGraph: {
		title: 'کمانگیر - خانه | طراحی وب اپلیکیشن',
		description:
			'راهکارهای نوآورانه طراحی و توسعه وب‌ اپلیکیشن‌ های پویا و مقیاس‌ پذیر برای کسب‌ و کارهای آینده‌ نگر. از ایده تا اجرا، کسب‌ و کار شما را در دنیای دیجیتال متحول می‌کنیم',
		url: 'https://arash.vip',
		siteName: 'Your Company Name',
		images: [
			{
				url: 'https://arash.vip/images/og-image.jpg',
				width: 1200,
				height: 630,
				alt: 'طراحی سایت با کمانگیر',
			},
		],
		locale: 'fa_IR',
		type: 'website',
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			noimageindex: false,
			'max-video-preview': -1,
			'max-snippet': -1,
		},
	},
	verification: {
		google: 'google',
		other: {
			me: ['hi@arash.vip', 'https://arash.vip'],
		},
	},
};

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html dir="rtl" lang="fa">
			<body>
				<CustomAppProvider>
					<MainAppbar />
					<div className="mt-36">{children}</div>
					<FooterContainer />
					<CopyrightContainer />
				</CustomAppProvider>
			</body>
		</html>
	);
}
