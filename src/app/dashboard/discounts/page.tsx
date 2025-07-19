"use client";
import { useMediaQuery } from "@mui/material";
import { customTheme } from "../../../components/Theme/theme";
import { useEffect } from "react";
import { useGetAllDiscounts } from "../../../api/discount/discount.mutation";
import DiscountTableMobile from "../../../components/Dashboard/Discount/DiscountsTableMobile";
import DiscountsTable from "../../../components/Dashboard/Discount/DiscountsTable";
import TableMobileSkeleton from "../../../components/Dashboard/TableMobileSkeleton";
import TableSkeleton from "../../../components/Dashboard/TableSkeleton";

const DiscountsPage = () => {
	const isMobile = useMediaQuery(customTheme.breakpoints.down("md"));
	const {
		mutate: myOrdersMutate,
		data: discountsData,
		isPending: discountsIsPending,
		isSuccess: discountIsSuccess,
	} = useGetAllDiscounts();
	useEffect(() => {
		myOrdersMutate(undefined);
	}, [myOrdersMutate]);
	if (discountsIsPending)
		return isMobile ? <TableMobileSkeleton /> : <TableSkeleton />;
	return isMobile
		? discountIsSuccess && (
				<DiscountTableMobile discountData={discountsData.data} />
			)
		: discountIsSuccess && <DiscountsTable discountData={discountsData.data} />;
};

export default DiscountsPage;
