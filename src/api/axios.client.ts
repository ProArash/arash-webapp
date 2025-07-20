import axios from "axios";
import { IBasicResponse } from "./basic.response";
import { AppRoutes } from "../utils/AppRoutes";

//const BASE_URL = "http://localhost:4000";
 const BASE_URL = "https://api.arash.vip";

type METHOD = "GET" | "POST" | "DELETE" | "PUT" | "PATCH";

export type IErrorResponse = {
	response: {
		data: {
			message: string;
			error: string;
			statusCode: number;
		};
	};
};

axios.interceptors.response.use(
	(response) => {
		return response;
	},
	(error: IErrorResponse) => {
		if (
			error.response.data.statusCode == 401 &&
			window.location.pathname.includes("/dashboard")
		)
			window.location.href = AppRoutes.auth;
		return Promise.reject(error);
	},
);

export const AxiosClient = async <TRequest, TResponse>(
	method: METHOD,
	endPoint: string,
	data?: TRequest,
	params?: Record<string, string>,
): Promise<IBasicResponse<TResponse>> => {
	const res = await axios<TResponse>({
		baseURL: BASE_URL,
		url: endPoint,
		withCredentials: true,
		method,
		data,
		params,
	});
	return res.data as IBasicResponse<TResponse>;
};
