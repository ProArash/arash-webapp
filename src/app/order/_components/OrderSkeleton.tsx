import { Box, Paper, Skeleton } from "@mui/material";

const OrderSkeleton = () => {
	return (
		<Box
			component={Paper}
			className="flex md:w-1/3 w-full h-[500px] justify-center p-5"
		>
			<Skeleton width={"100%"} height={"100%"} />
		</Box>
	);
};

export default OrderSkeleton;
