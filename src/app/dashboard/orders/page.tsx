"use client";
import { useMediaQuery } from "@mui/material";
import { customTheme } from "../../../components/Theme/theme";
import MyOrdersTableMobile from "./_components/MyOrdersTableMobile";
import MyOrdersTable from "./_components/MyOrdersTable";
import { useEffect } from "react";
import { useMyOrders } from "../../../api/order/order.mutation";
import { useDashboard } from "../../../components/Providers/DashboardProvider";
import TableMobileSkeleton from "../_components/TableMobileSkeleton";
import TableSkeleton from "../_components/TableSkeleton";

const MyOrdersPage = () => {
	const isMobile = useMediaQuery(customTheme.breakpoints.down("md"));
	const { updated, setUpdated } = useDashboard();
	const {
		mutate: myOrdersMutate,
		data: myOrdersData,
		isPending: myOrdersIsPending,
		isSuccess: myOrdersIsSuccess,
	} = useMyOrders();
	useEffect(() => {
		if (updated) {
			myOrdersMutate(undefined);
			setUpdated(false);
		}

		myOrdersMutate(undefined);
	}, [myOrdersMutate, updated, setUpdated]);
	if (myOrdersIsPending)
		return isMobile ? <TableMobileSkeleton /> : <TableSkeleton />;
	return isMobile
		? myOrdersIsSuccess && <MyOrdersTableMobile orderData={myOrdersData.data} />
		: myOrdersIsSuccess && <MyOrdersTable orderData={myOrdersData.data} />;
};

export default MyOrdersPage;
