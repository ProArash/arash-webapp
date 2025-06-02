import { LinearProgress, Paper } from '@mui/material';
import { ReactNode } from 'react';

export interface ISkillProps {
	title: string;
	level?: number;
	native?: boolean;
	icon?: ReactNode;
}

const SkillCard = ({ title, level, native = false, icon }: ISkillProps) => {
	return (
		<Paper
			sx={{ borderRadius: '20px' }}
			className="flex flex-col gap-2 w-full p-5">
			<div className="flex justify-between">
				<div className="flex gap-2">
					<div className="w-[30px] h-[30px] flex items-center rounded-full">
						{icon}
					</div>
					{title}
				</div>
				<span>{native ? 'Muttersprache' : level + '%'}</span>
			</div>
			<LinearProgress
				color="secondary"
				value={level}
				variant="determinate"
			/>
		</Paper>
	);
};

export default SkillCard;
