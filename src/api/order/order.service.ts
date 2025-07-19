import { ApiRoutes } from "../api.route";
import { AxiosClient } from "../axios.client";
import { IBasicResponse } from "../basic.response";
import {
	IApplyDiscountResponse,
	IMyOrderResponse,
	IOrderPayUrlResponse,
	IOrderRequest,
	IOrderResponse,
} from "./order.dto";

export class OrderService {
	async createOrder(
		data: IOrderRequest,
	): Promise<IBasicResponse<IOrderPayUrlResponse>> {
		return await AxiosClient("POST", ApiRoutes.order, data);
	}
	async getOrders(): Promise<IBasicResponse<IOrderResponse[]>> {
		return await AxiosClient("GET", ApiRoutes.order);
	}
	async getOrderById(orderId: string): Promise<IBasicResponse<IOrderResponse>> {
		return await AxiosClient("GET", ApiRoutes.getOrderById, undefined, {
			orderId,
		});
	}

	async getUserOrders(): Promise<IBasicResponse<IMyOrderResponse[]>> {
		return await AxiosClient("GET", ApiRoutes.myOrders);
	}

	async deleteUserOrderById(
		orderId: string,
	): Promise<IBasicResponse<IApplyDiscountResponse>> {
		return await AxiosClient(
			"DELETE",
			ApiRoutes.deleteUserOrderById,
			undefined,
			{ orderId },
		);
	}
}
