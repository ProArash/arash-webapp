"use client";
import React, { useEffect } from "react";
import SectionTitle from "./SectionTitle";
import PlanCard from "./PlanCard";
import { useGetPlans } from "../../../api/plan/plan.mutation";
import PlanCardSkeleton from "./PlanCardSkeleton";
import { Typography } from "@mui/material";

const PlanContainer = () => {
	const {
		mutate: plansMutate,
		data: plansData,
		isPending: plansIsPending,
		isSuccess: plansIsSuccess,
	} = useGetPlans();

	useEffect(() => {
		plansMutate(undefined);
	}, [plansMutate]);

	return (
		<div id="plans" className="flex flex-col gap-10">
			<SectionTitle title={"پلن های طراحی تحویل فوری"} />
			<div className="flex flex-wrap gap-10 w-full">
				{plansIsPending &&
					Array(3)
						.fill(0)
						.map((_, i) => <PlanCardSkeleton key={i} />)}

				{plansIsSuccess && plansData.data.length > 0 ? (
					plansData.data.map((v) => (
						<PlanCard
							key={v.id}
							context={v.context}
							id={v.id}
							price={Number(v.price)}
							status={v.status}
							name={v.name}
							caption={v.caption}
							features={v.features}
						/>
					))
				) : (
					<Typography>{"هیچ پلنی یافت نشد"}</Typography>
				)}
			</div>
		</div>
	);
};

export default PlanContainer;
