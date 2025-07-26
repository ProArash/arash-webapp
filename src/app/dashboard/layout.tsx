import { Box, Paper } from "@mui/material";
import { ReactNode } from "react";
import DashboardSidebar from "./_components/DashboardSidebar";
import DashboardNavbar from "./_components/DashboardNavbar";

const ProfileLayout = ({ children }: { children: ReactNode }) => {
	return (
		<main className="flex flex-col w-full h-screen md:p-5 p-3">
			<div className="flex md:gap-5 h-full">
				<div className="md:w-1/4">
					<DashboardSidebar />
				</div>
				<div className="flex flex-col w-full gap-5">
					<DashboardNavbar />
					<Box
						component={Paper}
						sx={{
							width: "100%",
							height: "100%",
							padding: "20px",
							overflowY: "auto",
							scrollbarWidth: "none",
						}}
					>
						{children}
					</Box>
				</div>
			</div>
		</main>
	);
};

export default ProfileLayout;
