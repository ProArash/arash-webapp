import { CircularProgress, Typography } from "@mui/material";

const LoadingPage = () => {
	return (
		<div className="flex w-full h-screen items-center justify-center">
			<div className="flex flex-col gap-5 items-center">
				<CircularProgress variant="indeterminate" />
				<Typography>{"لطفا منتظر بمانید"}</Typography>
			</div>
		</div>
	);
};

export default LoadingPage;
