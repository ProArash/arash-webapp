"use client";
import { useMediaQuery } from "@mui/material";
import { customTheme } from "../../../components/Theme/theme";
import { useEffect } from "react";
import { useGetAllDiscounts } from "../../../api/discount/discount.mutation";
import TableMobileSkeleton from "../_components/TableMobileSkeleton";
import TableSkeleton from "../_components/TableSkeleton";
import DiscountTableMobile from "./_components/DiscountsTableMobile";
import DiscountsTable from "./_components/DiscountsTable";

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
