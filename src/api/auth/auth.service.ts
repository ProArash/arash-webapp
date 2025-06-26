import { ApiRoutes } from '../api.route';
import { AxiosClient, IBasicResponse } from '../axios.client';
import { IAuthRequest, IProfileResponse } from './auth.dto';

export class AuthService {
	async signIn(data: IAuthRequest): Promise<IBasicResponse> {
		return await AxiosClient<IAuthRequest, undefined>(
			'POST',
			ApiRoutes.signIn,
			data
		);
	}
	async profile(): Promise<IBasicResponse<IProfileResponse>> {
		return await AxiosClient<undefined, IProfileResponse>(
			'GET',
			ApiRoutes.profile
		);
	}
	async register(data: IAuthRequest) {
		return await AxiosClient<IAuthRequest, undefined>(
			'POST',
			ApiRoutes.register,
			data
		);
	}
}
