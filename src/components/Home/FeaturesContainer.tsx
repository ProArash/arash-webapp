'use client';
import FeatureCard from './FeatureCard';
import {
	SiMariadb,
	SiMongodb,
	SiMongoose,
	SiNestjs,
	SiNextdotjs,
	SiNodedotjs,
	SiPostgresql,
	SiPrisma,
	SiReact,
	SiTypeorm,
} from 'react-icons/si';
import SectionTitle from './SectionTitle';
import { SwiperSlide, Swiper } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { useMediaQuery } from '@mui/material';
import { customTheme } from '../Theme/theme';

const FeaturesContainer = () => {
	const isMobile = useMediaQuery(customTheme.breakpoints.down('md'));
	const featureList = [
		{
			title: 'NextJS',
			icon: <SiNextdotjs size={50} />,
		},
		{
			title: 'ReactJS',
			icon: <SiReact size={50} />,
		},
		{
			title: 'NestJs',
			icon: <SiNestjs size={50} />,
		},
		{
			title: 'NodeJS',
			icon: <SiNodedotjs size={50} />,
		},
		{
			title: 'TypeORM',
			icon: <SiTypeorm size={50} />,
		},
		{
			title: 'PrismaORM',
			icon: <SiPrisma size={50} />,
		},
		{
			title: 'Mongoose',
			icon: <SiMongoose size={50} />,
		},
		{
			title: 'MongoDB',
			icon: <SiMongodb size={50} />,
		},
		{
			title: 'PostgreSql',
			icon: <SiPostgresql size={50} />,
		},
		{
			title: 'MariaDB',
			icon: <SiMariadb size={50} />,
		},
	];
	return (
		<div className="flex flex-col w-full gap-10">
			<SectionTitle title={'با آخرین تکنولوژی های روز دنیا'} />
			<Swiper
				modules={[Autoplay]}
				className="w-full !p-5"
				slidesPerView={isMobile ? 3 : 8}
				spaceBetween={isMobile ? 100 : 50}
				autoplay={{ delay: 0, disableOnInteraction: false }}
				speed={5000}
				freeMode={true}
				loop>
				{featureList.map((v, i) => (
					<SwiperSlide key={i}>
						<FeatureCard title={v.title} icon={v.icon} />
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default FeaturesContainer;
