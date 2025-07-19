import { redirect } from "next/navigation";
import { AppRoutes } from "../../utils/AppRoutes";

const ProfilePage = () => {
	return redirect(AppRoutes.dashboardItems.edit);
};

export default ProfilePage;
