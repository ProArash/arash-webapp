'use client'
import { Typography } from '@mui/material';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const CopyrightContainer = () => {
	const path = usePathname();
	if (path == '/auth/' || path == '/auth') return null;
	return (
		<div className="flex gap-2 items-center w-full justify-center p-5">
			<Typography variant="body1" color='textSecondary'>
				{'توسعه داده شده با ☕ توسط'}
			</Typography>
			<Link href={'https://arash.vip'} target='_blank'>
				<Typography variant="body1" >{'آرش قنبری'}</Typography>
			</Link>
		</div>
	);
};

export default CopyrightContainer;
