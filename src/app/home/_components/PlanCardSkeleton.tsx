import { Box, Paper, Skeleton } from "@mui/material";

const PlanCardSkeleton = () => {
	return (
		<Box
			component={Paper}
			className="flex flex-col gap-5 p-5 md:w-[400px] w-full h-fit min-h-[400px]"
		>
			<Skeleton variant="rounded" height={30} className="w-1/2" />
			<Skeleton variant="rounded" height={10} className="w-[20%]" />
			<Skeleton variant="rounded" height={5} className="w-[80%]" />
			<Skeleton variant="rounded" height={5} className="w-[80%]" />
			<Skeleton variant="rounded" height={5} className="w-[80%]" />
			<Skeleton variant="rounded" height={5} className="w-[80%]" />
			<Skeleton variant="rounded" height={5} className="w-[80%]" />
			<Skeleton variant="rounded" height={5} className="w-[80%]" />
			<div className="grow" />
			<Skeleton variant="rounded" height={30} className="w-[50%]" />
			<Skeleton variant="rounded" height={40} sx={{ borderRadius: "24px" }} />
		</Box>
	);
};

export default PlanCardSkeleton;
