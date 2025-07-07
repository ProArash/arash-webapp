'use client';
import Link from 'next/link';
import { AppRoutes } from '../../utils/AppRoutes';
import { Typography } from '@mui/material';
import logo from '@/assets/logo.png';
import Image from 'next/image';

const LogoContainer = () => {
	return (
		<Link href={AppRoutes.home} className="flex gap-3 items-center">
			<Image
				src={logo}
				alt="logo"
				width={70}
				height={70}
				className="object-contain"
			/>
			<Typography color={'secondary'} variant={'h5'}>
				کمانگیر
			</Typography>
		</Link>
	);
};

export default LogoContainer;
