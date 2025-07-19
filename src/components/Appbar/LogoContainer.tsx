"use client";
import Link from "next/link";
import { AppRoutes } from "../../utils/AppRoutes";
import { Typography } from "@mui/material";
import logo from "@/assets/logo.svg";
import Image from "next/image";

const LogoContainer = () => {
	return (
		<Link href={AppRoutes.home} className="flex gap-3 items-center m-5">
			<Image src={logo} alt="لوگو" width={80} height={80} />
			<Typography color={"secondary"} variant={"h5"}>
				{"کمانگیر"}
			</Typography>
		</Link>
	);
};

export default LogoContainer;
