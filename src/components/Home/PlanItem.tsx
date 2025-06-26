'use client';
import { CheckCircle, ShoppingCartCheckout } from '@mui/icons-material';
import { Box, Button, Paper, Typography } from '@mui/material';

export type PlanFeatureProps = {
	title: string;
};

export type PlanItemProps = {
	title: string;
	period: string;
	price: number;
	features: PlanFeatureProps[];
};

const PlanItem = ({ features, period, price, title }: PlanItemProps) => {
	return (
		<Box
			component={Paper}
			className="flex flex-col gap-5 p-5 md:w-[350px] w-full h-[700px]"
			sx={{ borderRadius: '12px' }}>
			<Typography variant="h5">{title}</Typography>
			<Typography variant="caption">{period}</Typography>
			<Typography variant="h4">{`${price.toLocaleString(
				'en-US'
			)} تومان`}</Typography>
			<Typography variant="body1">{'ویژگی ها'}</Typography>
			{features.map((v, i) => (
				<div className="flex gap-2 items-center" key={i}>
					<CheckCircle color="info" />
					<Typography variant="body2">{v.title}</Typography>
				</div>
			))}
			<div className='grow' />
			<Button
				variant="contained"
				color="info"
				startIcon={<ShoppingCartCheckout />}>
				{'خرید فوری'}
			</Button>
		</Box>
	);
};

export default PlanItem;
