'use client';
import Link from 'next/link';
import { AppRoutes } from '../../utils/AppRoutes';
import { Typography } from '@mui/material';
import { BsCodeSlash } from 'react-icons/bs';

const LogoContainer = () => {
	return (
		<Link href={AppRoutes.home} className="flex gap-3 items-center">
			<BsCodeSlash size={24} />
			<Typography color={'secondary'} variant={'h5'}>
				کمانگیر
			</Typography>
		</Link>
	);
};

export default LogoContainer;
