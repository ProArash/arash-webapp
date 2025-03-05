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
			className={`w-full items-center flex justify-center transition ${
				selected && 'text-primary scale-110'
			}`}
			onClick={onClick}
			href={url}>
			<i className="text-[20px]">{icon}</i>
		</Link>
	);
};

export default SidebarItem;
