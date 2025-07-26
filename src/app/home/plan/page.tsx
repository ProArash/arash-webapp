"use client";
import { useSearchParams } from "next/navigation";
import PlanContainer from "./_components/PlanContainer";
import { useEffect } from "react";
import { useGetPlanById } from "../../../api/plan/plan.mutation";
import PlanErrorPage from "./_components/PlanErrorPage";
import LoadingPage from "../../loading";

const PlanPage = () => {
	const id = useSearchParams().get("id") || "";
	const {
		mutate,
		data: planData,
		isPending: planIsPending,
		isSuccess: planIsSuccess,
		isError: planIsError,
		error: planError,
	} = useGetPlanById();

	useEffect(() => {
		mutate(id);
	}, [mutate, id]);
	return (
		<>
			<title>{"plans title"}</title>
			<div className="p-5">
				{planIsError && (
					<PlanErrorPage message={planError.response.data.message} />
				)}
				{planIsPending && <LoadingPage />}
				{planIsSuccess && <PlanContainer data={planData.data} />}
			</div>
		</>
	);
};

export default PlanPage;
