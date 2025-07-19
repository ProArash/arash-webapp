import { Typography } from "@mui/material";
import React from "react";

const MainTitle = () => {
	return (
		<div className="flex gap-2">
			<Typography variant={"h4"}>{"طراحی وب اپلیکشن با"}</Typography>
			<Typography variant={"h4"} color="secondary">
				{"کمانگیر"}
			</Typography>
		</div>
	);
};

export default MainTitle;
