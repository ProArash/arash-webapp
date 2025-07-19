import { IPlanResponse } from "../plan/plan.dto";

export interface IOrderResponse {
	id?: number;
	amount: number;
	plan: IPlanResponse;
	status: boolean;
}

export interface IOrderPayUrlResponse {
	payUrl: string;
}

export interface IOrderRequest {
	planId: number;
	discountId?: number;
}

export interface IMyOrderResponse {
	id: number;
	status: boolean;
	amount: number;
	trackId: string;
	plan: {
		name: string;
		price: number;
	};
}

export interface IApplyDiscountResponse {
	discountedPrice: number;
	name: string;
	discountId: number;
}
export interface IApplyDiscountRequest {
	discountCode: string;
	planId: number;
}
