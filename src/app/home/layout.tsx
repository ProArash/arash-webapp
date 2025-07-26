import { ReactNode } from "react";
import MainAppbar from "../../components/Appbar/MainAppbar";
import CopyrightContainer from "./_components/CopyrightContainer";
import FooterContainer from "./_components/FooterContainer";

const HomeLayout = ({ children }: { children: ReactNode }) => {
	return (
		<main>
			<MainAppbar />
			{children}
			<FooterContainer />
			<CopyrightContainer />
		</main>
	);
};

export default HomeLayout;
