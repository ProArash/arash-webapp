import { UseMutationResult } from "@tanstack/react-query";
import { IBasicResponse } from "../basic.response";
import { IDiscountResponse, INewDiscountBody } from "./discount.dto";
import { IErrorResponse } from "../axios.client";
import { useCustomMutation } from "../custom.mutation";
import { DiscountService } from "./discount.service";

const discountService = new DiscountService();

export const useNewDiscount = (): UseMutationResult<
	IBasicResponse<IDiscountResponse>,
	IErrorResponse,
	INewDiscountBody
> => {
	return useCustomMutation(
		async (data?: INewDiscountBody) =>
			await discountService.createDiscount(data!),
	);
};

export const useGetAllDiscounts = (): UseMutationResult<
	IBasicResponse<IDiscountResponse[]>,
	IErrorResponse,
	undefined
> => {
	return useCustomMutation(async () => await discountService.getAllDiscounts());
};
