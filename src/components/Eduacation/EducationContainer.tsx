import EduCard, { EduacationProps } from './EduCard';

const EducationContainer = ({ infoList }: { infoList: EduacationProps[] }) => {
	return (
		<div className="flex flex-col w-full gap-5">
			<div className="grid md:grid-cols-2 grid-cols-1 justify-items-center w-full gap-5">
				{infoList &&
					infoList.map((v, i) => (
						<EduCard
							key={i}
							title={v.title}
							num={v.num}
							startYear={v.startYear}
							endYear={v.endYear}
							type={v.type}
						/>
					))}
			</div>
		</div>
	);
};

export default EducationContainer;
