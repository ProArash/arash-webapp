import React from 'react';

export interface EduacationProps {
	title: string;
	type: string;
	num: number;
	startYear: string;
	endYear: string;
}

const EduCard = ({ title, num, startYear, endYear, type }: EduacationProps) => {
	return (
		<div className="flex flex-col gap-5 bg-card text-card-foreground rounded-md p-5 w-full">
			<div className="flex gap-2  items-center">
				<span className="text-primary font-bold">
					{num < 10 && `0${num}.`}
				</span>
				<span className="md:font-bold">{title}</span>
			</div>
			<span className="flex bg-muted text-accent-muted p-2 rounded-md w-fit text-xs">
				{type}
			</span>
			<span className="flex bg-muted text-accent-muted p-2 rounded-md w-fit text-xs">{`${startYear}-${endYear}`}</span>
		</div>
	);
};

export default EduCard;
