"use client";
import {
	Box,
	Paper,
	Typography,
	useMediaQuery,
	IconButton,
	Button,
} from "@mui/material";
import { BsBox, BsList, BsPerson } from "react-icons/bs";
import DashboardSidebarItems from "./DashboardSidebarItems";
import { useEffect, useState } from "react";
import { useCurrentProfile } from "../../../api/auth/auth.mutation";
import { customTheme } from "../../../components/Theme/theme";
import { useDashboard } from "../../../components/Providers/DashboardProvider";
import CustomDrawer from "../../../components/Appbar/CustomDrawer";

const DashboardNavbar = () => {
	const isMobile = useMediaQuery(customTheme.breakpoints.down("md"));
	const [open, setOpen] = useState<boolean>(false);
	const { setProfile } = useDashboard();

	const {
		mutate: profileMutate,
		data: profileData,
		isSuccess: profileSuccess,
	} = useCurrentProfile();
	useEffect(() => {
		profileMutate(undefined, {
			onSuccess: (res) => {
				setProfile(res.data);
			},
		});
	}, [profileMutate, setProfile]);
	return (
		<>
			<CustomDrawer open={open} onClose={() => setOpen(false)}>
				<DashboardSidebarItems />
			</CustomDrawer>
			{profileSuccess && (
				<Box
					component={Paper}
					sx={{
						width: "100%",
						height: "fit-content",
						padding: isMobile ? "10px" : "20px",
						display: "flex",
						flexDirection: "row",
						gap: isMobile ? "5px" : "10px",
						alignItems: "center",
						justifyContent: "space-between",
					}}
				>
					{isMobile && (
						<IconButton onClick={() => setOpen(true)}>
							<BsList />
						</IconButton>
					)}
					<Typography
						variant={isMobile ? "h6" : "h5"}
						className="flex gap-2 items-center"
					>
						<BsBox size={24} />
						{"داشبورد"}
					</Typography>
					<Button variant="contained" startIcon={<BsPerson />}>
						{profileData.data.name}
					</Button>
				</Box>
			)}
		</>
	);
};

export default DashboardNavbar;
