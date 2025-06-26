import { Divider } from '@mui/material';
import FeaturesContainer from '../../components/Home/FeaturesContainer';
import HeaderContainer from '../../components/Home/HeaderContainer';
import PlanContainer from '../../components/Home/PlanContainer';
import GoTopButton from '../../components/GoTopButton';

const HomePage = () => {
	return (
		<div className="flex flex-col md:p-10 p-5 gap-10">
			<HeaderContainer />
			<Divider />
			<FeaturesContainer />
			<Divider />
			<PlanContainer />
			<GoTopButton />
		</div>
	);
};

export default HomePage;
