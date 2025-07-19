import { Skeleton } from "@mui/material";

const SidebarSkeleton = () => {
	return (
		<div className="flex flex-col">
			<Skeleton height={50} />
			<Skeleton height={50} />
			<Skeleton height={50} />
			<Skeleton height={50} />
			<Skeleton height={50} />
			<Skeleton height={50} />
		</div>
	);
};

export default SidebarSkeleton;
