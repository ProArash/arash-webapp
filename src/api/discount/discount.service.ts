import { ApiRoutes } from "../api.route";
import { AxiosClient } from "../axios.client";
import { IBasicResponse } from "../basic.response";
import { IDiscountResponse, INewDiscountBody } from "./discount.dto";

export class DiscountService {
	async createDiscount(
		data: INewDiscountBody,
	): Promise<IBasicResponse<IDiscountResponse>> {
		return await AxiosClient("POST", ApiRoutes.discount, data);
	}

	async getAllDiscounts(): Promise<IBasicResponse<IDiscountResponse[]>> {
		return await AxiosClient("GET", ApiRoutes.discount);
	}
}
