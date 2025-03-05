import { ReactNode } from 'react';
import { Progress } from '../ui/progress';

export interface ISkillProps {
	title: string;
	level?: number;
	native?: boolean;
	icon?: ReactNode;
}

const SkillCard = ({ title, level, native = false, icon }: ISkillProps) => {
	return (
		<div className="flex flex-col gap-2 w-full">
			<div className="flex justify-between">
				<div className="flex gap-2">
					<div className="w-[30px] h-[30px] flex items-center rounded-full">
						{icon}
					</div>
					{title}
				</div>
				<span>{native ? 'Muttersprache' : level + '%'}</span>
			</div>
			<Progress value={level} />
		</div>
	);
};

export default SkillCard;
