import { Skeleton } from "@mui/material";

const EditProfileSkeleton = () => {
	return (
		<div className="flex w-full h-full">
			<div className="flex flex-col gap-5 justify-between md:w-1/3 w-full">
				<Skeleton height={100} />
				<Skeleton height={100} />
				<Skeleton height={100} />
				<div className="grow" />
				<Skeleton height={120} />
			</div>
		</div>
	);
};

export default EditProfileSkeleton;
