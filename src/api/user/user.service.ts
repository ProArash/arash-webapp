import { ApiRoutes } from "../api.route";
import { IProfileRequest } from "../auth/auth.dto";
import { AxiosClient } from "../axios.client";
import { IBasicResponse } from "../basic.response";
import { IUserResponse } from "./user.dto";

export class UserService {
	async editCurrentProfile(data: IProfileRequest): Promise<IBasicResponse> {
		return await AxiosClient("PATCH", ApiRoutes.editCurrentProfile, data);
	}

	async getUsers(): Promise<IBasicResponse<IUserResponse[]>> {
		return await AxiosClient("GET", ApiRoutes.getUsers);
	}
}
