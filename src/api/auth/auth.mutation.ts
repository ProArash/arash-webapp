import { UseMutationResult } from "@tanstack/react-query";
import { IErrorResponse } from "../axios.client";
import { useCustomMutation } from "../custom.mutation";
import { IAuthRequest, IProfileResponse } from "./auth.dto";
import { AuthService } from "./auth.service";
import { IBasicResponse } from "../basic.response";

const authService = new AuthService();

export const useSignIn = (): UseMutationResult<
	IBasicResponse<undefined>,
	IErrorResponse,
	IAuthRequest
> => {
	return useCustomMutation(
		async (data?: IAuthRequest) => await authService.signIn(data!),
	);
};

export const useLogOut = (): UseMutationResult<
	IBasicResponse<undefined>,
	IErrorResponse,
	undefined
> => {
	return useCustomMutation(async () => await authService.logOut());
};

export const useCurrentProfile = (): UseMutationResult<
	IBasicResponse<IProfileResponse>,
	IErrorResponse,
	undefined
> => {
	return useCustomMutation(async () => await authService.profile());
};
