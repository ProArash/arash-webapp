import { IconButton } from '@mui/material';
import Link from 'next/link';
import { ReactNode } from 'react';

type Props = {
	icon: ReactNode;
	url: string;
	selected?: boolean;
	onClick?: () => void;
};

const SidebarItem = ({ icon, url, selected = false, onClick }: Props) => {
	return (
		<Link
			className={`w-full items-center flex justify-center transition`}
			onClick={onClick}
			href={url}>
			<IconButton
				color={(selected && 'primary') || 'default'}
				sx={{
					fontSize: '20px',
				}}>
				{icon}
			</IconButton>
		</Link>
	);
};

export default SidebarItem;
