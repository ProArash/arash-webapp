'use client';
import { Check, PercentRounded, Visibility } from '@mui/icons-material';
import { Box, Button, Paper, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';
import { AppRoutes } from '../../utils/AppRoutes';

export type PlanFeatureProps = {
	title: string;
};

export type PlanItemProps = {
	title: string;
	context: string[];
	price: number;
	discountPrice?: number;
	status: boolean;
	id: number;
	features?: PlanFeatureProps[];
};

const PlanCard = ({
	context,
	price,
	title,
	status,
	id,
	discountPrice: discount,
}: PlanItemProps) => {
	const router = useRouter();
	return (
		<Box
			component={Paper}
			className="flex flex-col gap-5 p-5 md:w-[400px] w-full h-fit min-h-[400px]"
			sx={{ borderRadius: '12px' }}>
			<div className="flex flex-col gap-2">
				<Typography variant="h5">{title}</Typography>
				<Typography variant="h6">{'مناسب:'}</Typography>
				{context.map((v, i) => (
					<Typography
						variant="caption"
						key={i}
						className="flex items-center gap-2">
						<Check color="success" fontSize="small" />
						{v}
					</Typography>
				))}
			</div>
			<div className="grow" />
			<div className="flex flex-col gap-5">
				{discount ? (
					<div>
						<Typography variant="h6" className="line-through">
							{`${price.toLocaleString('en-US')} تومان`}
						</Typography>
						<Typography
							variant="h4"
							className="flex gap-3 items-center">
							<PercentRounded color="secondary" />
							{`${discount.toLocaleString('en-US')} تومان`}
						</Typography>
					</div>
				) : (
					<Typography variant="h4">
						{`${price.toLocaleString('en-US')} تومان`}
					</Typography>
				)}
			</div>
			<Button
				disabled={!status}
				variant="contained"
				color="primary"
				onClick={() => router.push(`${AppRoutes.product}/?id=${id}`)}
				startIcon={<Visibility />}>
				{'جزئیات و خرید'}
			</Button>
		</Box>
	);
};

export default PlanCard;
