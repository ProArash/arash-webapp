"use client";
import { Box, Button, Paper, Typography } from "@mui/material";
import DashboardMenu from "./DashboardMenu";

import {
	BsArrowRightCircleFill,
	BsList,
	BsPeople,
	BsPerson,
} from "react-icons/bs";
import SidebarSkeleton from "./SidebarSkeleton";
import { useDashboard } from "../../../components/Providers/DashboardProvider";
import { useLogOut } from "../../../api/auth/auth.mutation";
import { useRouter } from "next/navigation";
import { UserRole } from "../../../api/auth/auth.dto";
import LogoContainer from "../../../components/Appbar/LogoContainer";
import { AppRoutes } from "../../../utils/AppRoutes";
import { showSnackbar } from "../../../components/Providers/SnackbarProvider";
import ThemeSwitcher from "../../../components/Theme/ThemeSwitcher";

const DashboardSidebarItems = () => {
	const { mutate: logOutMutate, isPending: logOutPending } = useLogOut();
	const { profile } = useDashboard();
	const router = useRouter();

	return (
		<Box
			component={Paper}
			sx={{
				width: "100%",
				height: "100%",
				overflowY: "auto",
				scrollbarWidth: "none",
				display: "flex",
				flexDirection: "column",
				gap: "10px",
			}}
		>
			<LogoContainer />
			{!profile && <SidebarSkeleton />}
			{profile && (
				<>
					<DashboardMenu
						requiredRole={UserRole.USER}
						roles={profile.roles}
						icon={<BsPerson />}
						title="پروفایل"
						url={AppRoutes.dashboardItems.edit}
					/>
					<DashboardMenu
						requiredRole={UserRole.USER}
						roles={profile.roles}
						icon={<BsList />}
						title="سفارشات"
						url={AppRoutes.dashboardItems.orders}
					/>

					<DashboardMenu
						requiredRole={UserRole.ADMIN}
						roles={profile.roles}
						icon={<BsList />}
						title="کد تخفیف"
						url={AppRoutes.dashboardItems.discounts}
					/>
					<DashboardMenu
						requiredRole={UserRole.ADMIN}
						roles={profile.roles}
						icon={<BsList />}
						title="پلن ها"
						url={AppRoutes.dashboardItems.plans}
					/>
					<DashboardMenu
						requiredRole={UserRole.ADMIN}
						roles={profile.roles}
						icon={<BsPeople />}
						title="کاربران"
						url={AppRoutes.dashboardItems.users}
					/>
				</>
			)}
			<div className="grow" />
			<div className="flex flex-col gap-2 p-5">
				<ThemeSwitcher />
				<Button
					variant="outlined"
					color="error"
					loading={logOutPending}
					startIcon={<BsArrowRightCircleFill />}
					onClick={() =>
						logOutMutate(undefined, {
							onSuccess: (res) => {
								showSnackbar(res.message, "success");
								router.replace(AppRoutes.home);
							},
						})
					}
				>
					<Typography variant="caption">{"خروج از حساب"}</Typography>
				</Button>
			</div>
		</Box>
	);
};

export default DashboardSidebarItems;
