"use client";
import Link from "next/link";
import { AppRoutes } from "../../utils/AppRoutes";
import logo from "@/assets/logo.svg";
import Image from "next/image";

const LogoMobileContainer = () => {
	return (
		<Link
			href={AppRoutes.home}
			className="flex gap-3 items-center w-[200px] h-[200px]"
		>
			<Image src={logo} alt="لوگو" width={50} height={50} />
		</Link>
	);
};

export default LogoMobileContainer;
