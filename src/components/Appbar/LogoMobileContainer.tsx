'use client';
import Link from 'next/link';
import { AppRoutes } from '../../utils/AppRoutes';
import { IconButton } from '@mui/material';
import { BsCodeSlash } from 'react-icons/bs';

const LogoMobileContainer = () => {
	return (
		<Link href={AppRoutes.home} className="flex gap-3 items-center">
			<IconButton color="secondary">
				<BsCodeSlash size={24} />
			</IconButton>
		</Link>
	);
};

export default LogoMobileContainer;
