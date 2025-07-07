import { Box, Button, Paper, TextField, Typography } from '@mui/material';
import { BsCheckCircle } from 'react-icons/bs';

const ProductContainer = ({ pId }: { pId: string }) => {
	return (
		<div className="flex justify-between gap-5 w-full">
			<div className="flex flex-col gap-5">
				<Typography variant="h4">{`محصول شماره ${pId}`}</Typography>
                <p>lorem5009</p>
			</div>
			<Box
				component={Paper}
				sx={{
					margin: '20px',
					display: 'flex',
					flexDirection: 'column',
					gap: '24px',
					padding: '36px',
				}}>
				<Typography>{'نام محصول'}</Typography>
				<Typography>{'قیمت کل'}</Typography>
				<TextField
					label={'کد تخفیف'}
					placeholder={'کد تخفیف'}
					color="info"
				/>
				<Button
					variant="contained"
					color="success"
					startIcon={<BsCheckCircle />}>
					{'نهایی کردن خرید'}
				</Button>
			</Box>
		</div>
	);
};

export default ProductContainer;
