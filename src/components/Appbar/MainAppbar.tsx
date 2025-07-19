"use client";
import {
	Box,
	Button,
	IconButton,
	Paper,
	Toolbar,
	Typography,
	useMediaQuery,
} from "@mui/material";
import { useEffect, useState } from "react";
import AppbarItems from "./AppbarItems";
import { customTheme } from "../Theme/theme";
import LogoContainer from "./LogoContainer";
import { useRouter } from "next/navigation";
import ThemeSwitcher from "../Theme/ThemeSwitcher";
import { useCurrentProfile } from "../../api/auth/auth.mutation";
import { AppRoutes } from "../../utils/AppRoutes";
import CustomDrawer from "./CustomDrawer";
import { BsArrowRightCircle, BsList, BsPerson } from "react-icons/bs";

const MainAppbar = () => {
	const [open, setOpen] = useState<boolean>(false);
	const isMobile = useMediaQuery(customTheme.breakpoints.down("md"));
	const router = useRouter();
	const {
		mutate: profileMutate,
		isPending: profileIsPending,
		isSuccess: profileIsSuccess,
	} = useCurrentProfile();

	useEffect(() => {
		profileMutate(undefined);
	}, [profileMutate]);
	return (
		<Box
			component={Paper}
			sx={(theme) => ({
				backgroundColor: theme.palette.background.paper,
				width: `100%`,
				margin: 0,
				borderRadius: "0 0 16px 16px",
				position: "sticky",
				top: 0,
				zIndex: 50,
			})}
		>
			<CustomDrawer open={open} onClose={() => setOpen(false)}>
				<AppbarItems />
			</CustomDrawer>
			<Toolbar className="flex justify-between">
				{isMobile && (
					<>
						<IconButton onClick={() => setOpen(true)} color="primary">
							<BsList />
						</IconButton>
					</>
				)}
				{!isMobile && (
					<>
						<LogoContainer />
						<AppbarItems />
					</>
				)}
				<div className="flex gap-5">
					<ThemeSwitcher />
					<Button
						variant="contained"
						color="primary"
						loading={profileIsPending}
						onClick={() =>
							!profileIsSuccess
								? router.push(AppRoutes.auth)
								: router.push(AppRoutes.dashboard)
						}
						startIcon={profileIsSuccess ? <BsPerson /> : <BsArrowRightCircle />}
					>
						{profileIsSuccess ? (
							<Typography variant="caption">{"پروفایل"}</Typography>
						) : (
							<Typography variant="caption">{"ورود / ثبت نام"}</Typography>
						)}
					</Button>
				</div>
			</Toolbar>
		</Box>
	);
};

export default MainAppbar;
