import Link from 'next/link';
import { AppRoutes } from '../../utils/AppRoutes';
import { Button } from '../ui/button';
import { FaArrowRight } from 'react-icons/fa';

export interface IServiceCard {
	title: string;
	num: number;
	caption: string;
}

const ServiceCard = ({ title, num, caption }: IServiceCard) => {
	return (
		<div className="flex flex-col rounded-md bg-card text-card-foreground md:p-5 p-3 gap-5 md:h-[300px] h-full w-full">
			<div className="flex gap-2">
				<span className="font-bold text-primary">
					{num < 10 ? `0${num}` : num}.
				</span>
				<span className="font-bold">{title}</span>
			</div>
			<p className="md:text-justify">{caption}</p>
			<div className='grow' />
			<Link
				className="md:w-fit w-full hover:scale-105 transition"
				href={AppRoutes.contact}>
				<Button className="cursor-pointer w-full">
					Dienst bestellen
					<FaArrowRight />
				</Button>
			</Link>
		</div>
	);
};

export default ServiceCard;
