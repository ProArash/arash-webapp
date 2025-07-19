"use client";
import { Divider, useMediaQuery } from "@mui/material";
import React from "react";
import { AppRoutes } from "../../utils/AppRoutes";
import AppbarItem from "./AppbarItem";
import { customTheme } from "../Theme/theme";
import LogoContainer from "./LogoContainer";
import { BsBook, BsHouse, BsTelephone } from "react-icons/bs";

const AppbarItems = () => {
	const isMobile = useMediaQuery(customTheme.breakpoints.down("md"));
	return (
		<>
			<div className="flex md:flex-row flex-col md:gap-5 gap-1 md:items-center">
				{isMobile && (
					<div className="flex flex-col gap-5 m-5">
						<LogoContainer />
						<Divider />
					</div>
				)}

				<AppbarItem title="خانه" url={AppRoutes.home} icon={<BsHouse />} />

				<AppbarItem title="قوانین" url={AppRoutes.tos} icon={<BsBook />} />

				<AppbarItem
					title="پشتیبانی"
					url={AppRoutes.home}
					icon={<BsTelephone />}
				/>
			</div>
			<div className="md:hidden grow" />
		</>
	);
};

export default AppbarItems;
