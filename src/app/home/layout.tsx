import MainAppbar from '../../components/Appbar/MainAppbar';
import FooterContainer from '../../components/Home/FooterContainer';
import CopyrightContainer from '../../components/Home/CopyrightContainer';
import ThemeSwitcher from '../../components/Theme/ThemeSwitcher';

export default function MainLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<main className="flex flex-col w-full h-screen">
			<MainAppbar />
			<ThemeSwitcher />
			<div className="md:mt-10 mt-20">{children}</div>
			<FooterContainer />
			<CopyrightContainer />
		</main>
	);
}
