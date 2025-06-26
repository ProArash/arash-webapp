import FeatureCard from './FeatureCard';
import { SiNestjs, SiNextdotjs, SiNodedotjs, SiReact } from 'react-icons/si';
import SectionTitle from './SectionTitle';

const FeaturesContainer = () => {
	return (
		<div className="flex flex-col gap-10">
			<SectionTitle title={'با استفاده از تکنولوژی های روز دنیا'} />
			<div className="grid md:grid-cols-4 grid-cols-1 justify-items-center w-full gap-5">
				<FeatureCard
					title="NextJS"
					caption="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ طراحان گرافیک است."
					icon={<SiNextdotjs size={70} />}
				/>
				<FeatureCard
					title="ReactJS"
					caption="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ طراحان گرافیک است."
					icon={<SiReact size={70} />}
				/>
				<FeatureCard
					title="NestJs"
					caption="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ طراحان گرافیک است."
					icon={<SiNestjs size={70} />}
				/>
				<FeatureCard
					title="NodeJS"
					caption="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ طراحان گرافیک است."
					icon={<SiNodedotjs size={70} />}
				/>
			</div>
		</div>
	);
};

export default FeaturesContainer;
