"use client";
import { MenuItem } from "@mui/material";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";
import { UserRole } from "../../../api/auth/auth.dto";

const DashboardMenu = ({
	title,
	url,
	icon,
	requiredRole,
	roles,
}: {
	title: string;
	url: string;
	icon: ReactNode;
	requiredRole: UserRole;
	roles: UserRole[];
}) => {
	const router = useRouter();
	if (!roles.includes(requiredRole)) return null;
	return (
		<MenuItem
			onClick={() => router.push(url)}
			className="flex gap-3 items-center !p-3"
		>
			{icon}
			{title}
		</MenuItem>
	);
};

export default DashboardMenu;
