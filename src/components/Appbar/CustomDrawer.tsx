import { Drawer } from "@mui/material";
import { ReactNode } from "react";

const CustomDrawer = ({
	children,
	open,
	onClose,
}: {
	children: ReactNode;
	open: boolean;
	onClose: () => void;
}) => {
	return (
		<Drawer
			anchor="left"
			open={open}
			onClose={onClose}
			sx={{
				"& .MuiPaper-root": {
					borderRadius: "0 16px 16px 0",
					minWidth: "60%",
				},
			}}
		>
			{children}
		</Drawer>
	);
};

export default CustomDrawer;
