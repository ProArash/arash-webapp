import { redirect, RedirectType } from "next/navigation";
import { AppRoutes } from "../utils/AppRoutes";

const IndexPage = () => {
	return redirect(AppRoutes.home, RedirectType.replace);
};

export default IndexPage;
