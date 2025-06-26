import axios from 'axios';

const BASE_URL = 'http://localhost:4000';

type METHOD = 'GET' | 'POST' | 'DELETE' | 'PUT';

export interface IBasicResponse<T = undefined> {
	message: string;
	data?: T;
}

export type IErrorResponse = {
	response: {
		data: {
			message: string[];
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
		return Promise.reject(error);
	}
);

export const AxiosClient = async <TRequest, TResponse>(
	method: METHOD,
	endPoint: string,
	data?: TRequest,
	params?: string
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
