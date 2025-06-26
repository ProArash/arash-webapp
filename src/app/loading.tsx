import { CircularProgress } from '@mui/material';

const LoadingPage = () => {
	return (
		<div className="flex w-full h-screen items-center justify-center">
			<CircularProgress variant="indeterminate" />
		</div>
	);
};

export default LoadingPage;
