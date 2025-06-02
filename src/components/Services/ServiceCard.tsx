'use client';
import { FaArrowRight } from 'react-icons/fa';
import { Box, Button } from '@mui/material';

export interface IServiceCard {
	title: string;
	num: number;
	caption: string;
}

const ServiceCard = ({ title, num, caption }: IServiceCard) => {
	return (
		<Box className="flex flex-col rounded-md md:p-5 p-3 gap-5 md:h-[300px] h-full">
			<div className="flex gap-2">
				<span className="font-bold text-primary">
					{num < 10 ? `0${num}` : num}.
				</span>
				<span className="font-bold">{title}</span>
			</div>
			<p className="md:text-justify">{caption}</p>
			<div className="grow" />
			<Button
				sx={{
					width: 'fit-content',
				}}
				variant="contained"
				color="primary"
				endIcon={<FaArrowRight />}>
				Dienst bestellen
			</Button>
		</Box>
	);
};

export default ServiceCard;
