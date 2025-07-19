"use client";
import { Button, useMediaQuery } from "@mui/material";
import { useGetPlans } from "../../../api/plan/plan.mutation";
import { customTheme } from "../../../components/Theme/theme";
import TableMobileSkeleton from "../../../components/Dashboard/TableMobileSkeleton";
import TableSkeleton from "../../../components/Dashboard/TableSkeleton";
import { useEffect, useState } from "react";
import PlansTableMobile from "../../../components/Dashboard/Plans/PlansTableMobile";
import PlansTable from "../../../components/Dashboard/Plans/PlansTable";
import NewPlan from "../../../components/Dashboard/Plans/NewPlan";
import { BsPlus } from "react-icons/bs";
import { useDashboard } from "../../../components/Providers/DashboardProvider";

const PlansPage = () => {
	const isMobile = useMediaQuery(customTheme.breakpoints.down("md"));
	const { updated, setUpdated } = useDashboard();
	const [openNew, setOpenNew] = useState<boolean>(false);
	const {
		mutate: myOrdersMutate,
		data: plansData,
		isPending: plansIsPending,
		isSuccess: plansIsSuccess,
	} = useGetPlans();
	useEffect(() => {
		if (updated) {
			myOrdersMutate(undefined);
			setUpdated(false);
		}
		myOrdersMutate(undefined);
	}, [myOrdersMutate, updated, setUpdated]);
	if (plansIsPending)
		return isMobile ? <TableMobileSkeleton /> : <TableSkeleton />;
	return (
		<div className="flex flex-col gap-5">
			<NewPlan open={openNew} onClose={() => setOpenNew(false)} />
			<div>
				<Button
					variant="outlined"
					startIcon={<BsPlus />}
					onClick={() => setOpenNew(true)}
				>
					{"پلن جدید"}
				</Button>
			</div>

			{isMobile
				? plansIsSuccess && <PlansTableMobile orderData={plansData.data} />
				: plansIsSuccess && <PlansTable orderData={plansData.data} />}
		</div>
	);
};

export default PlansPage;
