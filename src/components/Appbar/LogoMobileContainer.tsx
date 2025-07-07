'use client';
import Link from 'next/link';
import { AppRoutes } from '../../utils/AppRoutes';
import Image from 'next/image';
import logo from '@/assets/logo.png';

const LogoMobileContainer = () => {
	return (
		<Link href={AppRoutes.home} className="flex gap-3 items-center">
			<Image
				src={logo}
				alt="logo"
				width={200}
				height={200}
				className="object-contain"
			/>
		</Link>
	);
};

export default LogoMobileContainer;
