import MeContainer from '../components/Me/MeContainer';
import ServicesContainer from '../components/Services/ServicesContainer';
import CustomSeparator from '../components/CustomSeparator';
import SkillContainer from '../components/Languages/SkillContainer';
import { ISkillProps } from '../components/Languages/SkillCard';
import { AM, DE, US } from 'country-flag-icons/react/1x1';
import {
	TbBrandDocker,
	TbBrandNextjs,
	TbBrandNodejs,
	TbBrandTypescript,
} from 'react-icons/tb';
import { FaLinux } from 'react-icons/fa';
import { SiMongodb, SiPostgresql, SiTypeorm } from 'react-icons/si';

const IndexPage = () => {
	const langs: ISkillProps[] = [
		{
			title: 'Deutsch',
			level: 40,
			icon: <DE className="rounded-full" />,
		},
		{
			title: 'Englisch',
			level: 80,
			icon: <US className="rounded-full" />,
		},
		{
			title: 'Persisch',
			level: 100,
			icon: <AM className="rounded-full" />,
			native: true,
		},
	];

	const skills: ISkillProps[] = [
		{
			title: 'NestJS/ExpressJS/NodeJS',
			level: 80,
			icon: <TbBrandNodejs size={30} />,
		},
		{
			title: 'NextJS',
			icon: <TbBrandNextjs size={30} />,
			level: 70,
		},
		{
			title: 'TypeScripte',
			icon: <TbBrandTypescript size={30} />,
			level: 75,
		},
		{
			title: 'Docker',
			level: 70,
			icon: <TbBrandDocker size={30} />,
		},
		{
			title: 'Linux',
			level: 80,
			icon: <FaLinux size={30} />,
		},
		{
			title: 'Postgresql',
			level: 60,
			icon: <SiPostgresql size={30} />,
		},
		{
			title: 'MongoDB',
			level: 60,
			icon: <SiMongodb size={30} />,
		},
		{
			title: 'TypeORM/PrismaORM',
			level: 70,
			icon: <SiTypeorm size={30} />,
		},
	];

	return (
		<div className="flex flex-col md:gap-10 gap-5 w-full">
			<MeContainer />
			<CustomSeparator title="Dienste" num={1} />
			<ServicesContainer />
			<CustomSeparator title="Sprachen" num={2} />
			<SkillContainer skills={langs} />
			<CustomSeparator title="Fähigkeiten" num={3} />
			<SkillContainer skills={skills} />
			<CustomSeparator title="Studium" num={4} />
			<CustomSeparator title="Berufsschule" num={5} />
		</div>
	);
};

export default IndexPage;
