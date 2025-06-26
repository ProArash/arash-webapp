import { redirect } from 'next/navigation';
import { AppRoutes } from '../utils/AppRoutes';

const IndexPage = () => {
	return redirect(AppRoutes.home);
};

export default IndexPage;
