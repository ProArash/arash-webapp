import { Button, Typography } from '@mui/material';
import Image from 'next/image';
import { BsPersonBadgeFill, BsCashCoin } from 'react-icons/bs';
import headerImage from '@/assets/home/header.svg';
import MainTitle from './MainTitle';

const HeaderContainer = () => {
	return (
		<div className="flex md:flex-row flex-col justify-between w-full md:items-center">
			<div className="flex flex-col gap-5 md:w-1/2 w-full text-justify">
				<MainTitle />
				{/* dynamic text */}
				<Typography variant="body2">
					{
						'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.'
					}
				</Typography>
				<div className="flex md:flex-row flex-col md:gap-5 gap-2">
					<Button
						variant="contained"
						fullWidth
						startIcon={<BsPersonBadgeFill />}
						sx={{ height: '48px' }}>
						درباره من
					</Button>
					<Button
						LinkComponent={'a'}
						href="#plans"
						variant="contained"
						color="secondary"
						fullWidth
						startIcon={<BsCashCoin />}
						sx={{ height: '48px' }}>
						{'تعرفه ها'}
					</Button>
				</div>
			</div>
			<Image
				src={headerImage}
				alt="header"
				width={0}
				height={0}
				className="object-contain md:w-1/2 w-full"
			/>
		</div>
	);
};

export default HeaderContainer;
