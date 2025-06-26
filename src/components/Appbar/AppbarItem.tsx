import { MenuItem } from '@mui/material';
import Link from 'next/link';
import { ReactNode } from 'react';

const AppbarItem = ({
	title,
	url,
	icon,
}: {
	title: string;
	url: string;
	icon: ReactNode;
}) => {
	return (
		<MenuItem sx={{ borderRadius: '8px' }}>
			<Link href={url} className="flex gap-2 items-center">
				{icon}
				{title}
			</Link>
		</MenuItem>
	);
};

export default AppbarItem;
