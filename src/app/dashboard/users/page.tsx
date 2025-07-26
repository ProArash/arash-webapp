"use client";
import { useGetUsers } from "../../../api/user/user.mutation";
import { useMediaQuery } from "@mui/material";
import { useDashboard } from "../../../components/Providers/DashboardProvider";
import { customTheme } from "../../../components/Theme/theme";
import { useEffect } from "react";
import TableMobileSkeleton from "../_components/TableMobileSkeleton";
import TableSkeleton from "../_components/TableSkeleton";
import UsersTableMobile from "./_components/UserTableMobile";
import UsersTable from "./_components/UsersTable";

const UsersPage = () => {
	const isMobile = useMediaQuery(customTheme.breakpoints.down("md"));
	const { updated } = useDashboard();
	const {
		mutate: getUsersMutate,
		data: usersData,
		isPending: usersIsPending,
		isSuccess: usersIsSuccess,
	} = useGetUsers();
	useEffect(() => {
		getUsersMutate(undefined);
		if (updated) getUsersMutate(undefined);
	}, [getUsersMutate, updated]);
	if (usersIsPending)
		return isMobile ? <TableMobileSkeleton /> : <TableSkeleton />;
	return (
		<div className="flex flex-col gap-5">
			{isMobile
				? usersIsSuccess && <UsersTableMobile userData={usersData.data} />
				: usersIsSuccess && <UsersTable orderData={usersData.data} />}
		</div>
	);
};

export default UsersPage;
