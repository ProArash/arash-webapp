import { Typography } from "@mui/material";
import React from "react";

type variantColor = "success" | "error";

const PaymentItemContainer = ({
	title,
	value,
	color,
}: {
	title: string;
	value: string;
	color?: variantColor;
}) => {
	return (
		<div className="flex justify-between gap-5 w-full">
			<Typography variant="body1">{title}</Typography>
			<Typography variant="body2" color={color}>
				{value}
			</Typography>
		</div>
	);
};

export default PaymentItemContainer;
