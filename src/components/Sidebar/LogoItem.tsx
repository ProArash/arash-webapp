'use client';
import { IconButton } from '@mui/material';
import { useRouter } from 'next/navigation';
import { FaCode } from 'react-icons/fa';

const LogoItem = () => {
	const router = useRouter();
	return (
		<IconButton color="secondary" onClick={() => router.push('/')}>
			<FaCode size={25} />
		</IconButton>
	);
};

export default LogoItem;
