
import { Box, Paper, Typography } from "@mui/material";
import React, { ReactNode } from "react";
import { BsArrowLeftCircle } from "react-icons/bs";

const FeatureContextItem = ({
	items,
	icon,
	title,
}: {
	items: string[];
	title: string;
	icon: ReactNode;
}) => {
	return (
		<Box component={Paper} className="flex flex-col gap-5 p-5">
			<Typography
				variant="h5"
				color="secondary"
				className="flex gap-3 items-center"
			>
				<BsArrowLeftCircle />
				{title}
			</Typography>
			{items.map((v, i) => (
				<div key={i} className="flex gap-2 items-center ms-5">
					{icon}
					{v}
				</div>
			))}
		</Box>
	);
};

export default FeatureContextItem;
