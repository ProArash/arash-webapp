"use client";
import { customTheme } from "../../../components/Theme/theme";
import DashboardSidebarItems from "./DashboardSidebarItems";
import { useMediaQuery } from "@mui/material";

const DashboardSidebar = () => {
	const isMobile = useMediaQuery(customTheme.breakpoints.down("md"));
	return !isMobile && <DashboardSidebarItems />;
};

export default DashboardSidebar;
