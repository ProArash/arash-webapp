import { UseMutationResult } from '@tanstack/react-query';
import { IBasicResponse, IErrorResponse } from '../axios.client';
import { useCustomMutation } from '../custom.mutation';
import { IAuthRequest, IProfileResponse } from './auth.dto';
import { AuthService } from './auth.service';

const authService = new AuthService();

export const useSignIn = (): UseMutationResult<
	IBasicResponse<undefined>,
	IErrorResponse,
	IAuthRequest
> => {
	return useCustomMutation<undefined, IAuthRequest>(
		async (data?: IAuthRequest) => await authService.signIn(data!)
	);
};

export const useUserRegister = (): UseMutationResult<
	IBasicResponse<undefined>,
	IErrorResponse,
	IAuthRequest
> => {
	return useCustomMutation<undefined, IAuthRequest>(
		async (data?: IAuthRequest) => await authService.register(data!)
	);
};

export const useCurrentProfile = (): UseMutationResult<
	IBasicResponse<IProfileResponse>,
	IErrorResponse,
	undefined
> => {
	return useCustomMutation<IProfileResponse, undefined>(
		async () => await authService.profile()
	);
};
