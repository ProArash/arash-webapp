import { Icon, MenuItem } from "@mui/material";
import Link from "next/link";
import { ReactNode } from "react";

const AppbarItem = ({
	title,
	url,
	icon,
}: {
	title: string;
	url: string;
	icon: ReactNode;
}) => {
	return (
		<Link href={url}>
			<MenuItem
				className="flex gap-2 items-center"
				sx={{ borderRadius: "8px" }}
			>
				<Icon>{icon}</Icon>
				{title}
			</MenuItem>
		</Link>
	);
};

export default AppbarItem;
