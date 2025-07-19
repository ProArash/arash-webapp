"use client";
import DashboardSidebarItems from "./DashboardSidebarItems";
import { useMediaQuery } from "@mui/material";
import { customTheme } from "../Theme/theme";

const DashboardSidebar = () => {
	const isMobile = useMediaQuery(customTheme.breakpoints.down("md"));
	return !isMobile && <DashboardSidebarItems />;
};

export default DashboardSidebar;
