"use client";

import { Icon, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import { customTheme } from "../../../components/Theme/theme";
import { BsArrowLeftCircle } from "react-icons/bs";

const SectionTitle = ({ title }: { title: string }) => {
	const isMobile = useMediaQuery(customTheme.breakpoints.down("md"));
	return (
		<div className="flex gap-2 items-center w-full">
			<Icon color="secondary">
				<BsArrowLeftCircle />
			</Icon>
			<Typography variant={isMobile ? "h5" : "h4"} color="textPrimary">
				{title}
			</Typography>
		</div>
	);
};

export default SectionTitle;
