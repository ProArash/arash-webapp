"use client";
import { IconButton, useMediaQuery } from "@mui/material";
import { customTheme } from "./Theme/theme";
import { BsArrowUp } from "react-icons/bs";

const GoTopButton = () => {
	const isMobile = useMediaQuery(customTheme.breakpoints.down("md"));

	const handleScroll = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};
	return (
		<div className="z-10">
			<IconButton
				onClick={handleScroll}
				color="primary"
				sx={{
					display: "flex",
					justifyItems: "center",
					width: "48px",
					height: "48px",
					minWidth: "48px",
					borderRadius: "50%",
					position: "fixed",
					bottom: isMobile ? "10px" : "20px",
					left: isMobile ? "10px" : "20px",
				}}
			>
				<BsArrowUp />
			</IconButton>
		</div>
	);
};

export default GoTopButton;
