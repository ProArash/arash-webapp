import { Alert, Typography } from '@mui/material';
import { IErrorResponse } from '../api/axios.client';

const ErrorContainer = ({ error }: { error: IErrorResponse }) => {
	return (
		<div className="flex flex-col gap-2">
			{error.response.data.message.map((v, i) => (
				<Alert
					severity="error"
					color="error"
					sx={{ margin: 0 }}
					key={i}>
					<Typography variant="body2">{v}</Typography>
				</Alert>
			))}
		</div>
	);
};

export default ErrorContainer;
