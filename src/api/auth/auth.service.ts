import { ApiRoutes } from "../api.route";
import { AxiosClient } from "../axios.client";
import { IBasicResponse } from "../basic.response";
import { IAuthRequest, IProfileResponse } from "./auth.dto";

export class AuthService {
	async signIn(data: IAuthRequest): Promise<IBasicResponse> {
		return await AxiosClient("POST", ApiRoutes.signIn, data);
	}
	async profile(): Promise<IBasicResponse<IProfileResponse>> {
		return await AxiosClient("GET", ApiRoutes.profile);
	}

	async logOut(): Promise<IBasicResponse> {
		return await AxiosClient("POST", ApiRoutes.logOut);
	}
}
