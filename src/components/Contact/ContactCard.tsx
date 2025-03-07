import { ReactNode } from 'react';

export interface ContactProps {
	title: string;
	value: string;
	className?: string;
	icon: ReactNode;
}

const ContactCard = ({ icon, title, value, className }: ContactProps) => {
	return (
		<div
			className={`flex gap-5 items-center p-3 rounded-md text-accent-foreground w-full justify-center ${className}`}>
			<div className="flex gap-5 items-center">
				<i className="text-[25px]">{icon}</i>
				<a className="w-full" href={value}>
					{title}
				</a>
			</div>
		</div>
	);
};

export default ContactCard;
