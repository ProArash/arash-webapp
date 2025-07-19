import { Box, Stack, Skeleton } from "@mui/material";
import React from "react";

const TableSkeleton = () => {
	return (
		<Box sx={{ width: "100%", height: "500px", padding: "20px" }}>
			<Stack direction={"column"}>
				<Skeleton height={100} />
			</Stack>
			<Skeleton height={600} />
		</Box>
	);
};

export default TableSkeleton;
