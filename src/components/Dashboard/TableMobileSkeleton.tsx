import { Skeleton } from "@mui/material";
import React from "react";

const TableMobileSkeleton = () => {
	return (
		<div className="flex flex-col gap-5">
			<Skeleton height={30} className="w-full" />
			<Skeleton height={30} className="w-full" />
		</div>
	);
};

export default TableMobileSkeleton;
