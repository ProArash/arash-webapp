import SkillCard, { ISkillProps } from './SkillCard';

const SkillContainer = ({ skills }: { skills: ISkillProps[] }) => {
	return (
		<div className="grid md:grid-cols-3 grid-cols-1 w-full gap-5 justify-items-center">
			{skills &&
				skills.map((v, i) => (
					<SkillCard
						key={i}
						title={v.title}
						level={v.level}
						native={v.native}
						icon={v.icon}
					/>
				))}
		</div>
	);
};

export default SkillContainer;
