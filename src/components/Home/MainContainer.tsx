import { Box, Button,  Paper, Typography } from '@mui/material';
import SectionTitle from './SectionTitle';
import Image, { StaticImageData } from 'next/image';
import { ReactNode } from 'react';

const MainContainer = ({
	image,
	title,
	caption,
	btnTitle,
	reverse,
	btnIcon,
}: {
	image: StaticImageData | string;
	title: string;
	caption: string;
	btnTitle?: string;
	reverse?: boolean;
	btnIcon?: ReactNode;
}) => {
	return (
		<Box
			component={Paper}
			className={`flex ${
				reverse
					? ' md:flex-row-reverse flex-col'
					: 'md:flex-row flex-col'
			} gap-10 justify-between md:p-10 p-5`}>
			<Image
				src={image}
				alt={title}
				className="object-contain md:w-[500px] w-full"
			/>
			<div className="flex flex-col justify-center md:gap-10 gap-5">
				<SectionTitle title={title} />
				<Typography variant="body1">{caption}</Typography>
				{btnTitle && (
					<Button className='md:w-1/3 w-full' variant="contained" startIcon={btnIcon}>
						{btnTitle}
					</Button>
				)}
			</div>
		</Box>
	);
};

export default MainContainer;
