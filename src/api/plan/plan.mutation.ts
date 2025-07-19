import { UseMutationResult } from "@tanstack/react-query";
import { PlanService } from "./plan.service";
import { IBasicResponse } from "../basic.response";
import { IErrorResponse } from "../axios.client";
import { IPlanRequest, IPlanResponse } from "./plan.dto";
import { useCustomMutation } from "../custom.mutation";

const planService = new PlanService();

export const useCreatePlan = (): UseMutationResult<
	IBasicResponse,
	IErrorResponse,
	IPlanRequest
> => {
	return useCustomMutation(
		async (data?: IPlanRequest) => await planService.createPlan(data!),
	);
};

export const useGetPlans = (): UseMutationResult<
	IBasicResponse<IPlanResponse[]>,
	IErrorResponse,
	undefined
> => {
	return useCustomMutation(async () => await planService.getPlans());
};

export const useGetPlanById = (): UseMutationResult<
	IBasicResponse<IPlanResponse>,
	IErrorResponse,
	string
> => {
	return useCustomMutation(
		async (planId?: string) => await planService.getPlanById(planId!),
	);
};

export const useDeletePlanById = (): UseMutationResult<
	IBasicResponse,
	IErrorResponse,
	string
> => {
	return useCustomMutation(
		async (planId?: string) => await planService.deletePlanById(planId!),
	);
};

export const useUpdatePlanById = (): UseMutationResult<
	IBasicResponse,
	IErrorResponse,
	IPlanRequest
> => {
	return useCustomMutation(
		async (data?: IPlanRequest) => await planService.updatePlanById(data!),
	);
};
