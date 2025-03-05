import Link from 'next/link';
import { FaCode } from 'react-icons/fa';

const LogoItem = () => {
	return (
		<Link
			href={'/'}
			className="flex p-2 rounded-md bg-primary text-primary-foreground w-[70px] h-[70px] justify-center items-center">
			<FaCode size={25} />
		</Link>
	);
};

export default LogoItem;
