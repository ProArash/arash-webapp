import { ReactNode } from "react";
import MainAppbar from "../../components/Appbar/MainAppbar";
import CopyrightContainer from "../../components/Home/CopyrightContainer";
import FooterContainer from "../../components/Home/FooterContainer";

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
