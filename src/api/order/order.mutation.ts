import { UseMutationResult } from "@tanstack/react-query";
import { OrderService } from "./order.service";
import { IBasicResponse } from "../basic.response";
import { IErrorResponse } from "../axios.client";
import {
	IApplyDiscountResponse,
	IMyOrderResponse,
	IOrderPayUrlResponse,
	IOrderRequest,
	IOrderResponse,
} from "./order.dto";
import { useCustomMutation } from "../custom.mutation";

const orderService = new OrderService();

export const useCreateOrder = (): UseMutationResult<
	IBasicResponse<IOrderPayUrlResponse>,
	IErrorResponse,
	IOrderRequest
> => {
	return useCustomMutation(
		async (data?: IOrderRequest) => await orderService.createOrder(data!),
	);
};

export const useDeleteUserOrderById = (): UseMutationResult<
	IBasicResponse<IApplyDiscountResponse>,
	IErrorResponse,
	string
> => {
	return useCustomMutation(
		async (data?: string) => await orderService.deleteUserOrderById(data!),
	);
};

export const useGetOrders = (): UseMutationResult<
	IBasicResponse<IOrderResponse[]>,
	IErrorResponse,
	undefined
> => {
	return useCustomMutation(async () => await orderService.getOrders());
};

export const useGetOrderById = (): UseMutationResult<
	IBasicResponse<IOrderResponse>,
	IErrorResponse,
	string
> => {
	return useCustomMutation(
		async (planId?: string) => await orderService.getOrderById(planId!),
	);
};

export const useMyOrders = (): UseMutationResult<
	IBasicResponse<IMyOrderResponse[]>,
	IErrorResponse,
	undefined
> => {
	return useCustomMutation(async () => await orderService.getUserOrders());
};
