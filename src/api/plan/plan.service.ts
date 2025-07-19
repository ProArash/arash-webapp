import { ApiRoutes } from "../api.route";
import { AxiosClient } from "../axios.client";
import { IBasicResponse } from "../basic.response";
import { IPlanRequest, IPlanResponse } from "./plan.dto";

export class PlanService {
	async createPlan(data: IPlanRequest): Promise<IBasicResponse> {
		return await AxiosClient("POST", ApiRoutes.plan, data);
	}
	async getPlanById(planId: string): Promise<IBasicResponse<IPlanResponse>> {
		return await AxiosClient("GET", ApiRoutes.getPlanById, undefined, {
			planId,
		});
	}
	async getPlans(): Promise<IBasicResponse<IPlanResponse[]>> {
		return await AxiosClient("GET", ApiRoutes.plan);
	}
	async deletePlanById(planId: string): Promise<IBasicResponse> {
		return await AxiosClient("DELETE", ApiRoutes.deletePlanById, undefined, {
			planId,
		});
	}
	async updatePlanById(
		data: IPlanRequest,
	): Promise<IBasicResponse> {
		return await AxiosClient("PATCH", ApiRoutes.updatePlanById, data);
	}
}
