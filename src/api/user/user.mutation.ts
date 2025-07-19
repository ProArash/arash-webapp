import { UseMutationResult } from "@tanstack/react-query";
import { IBasicResponse } from "../basic.response";
import { IErrorResponse } from "../axios.client";
import { IProfileRequest } from "../auth/auth.dto";
import { useCustomMutation } from "../custom.mutation";
import { UserService } from "./user.service";
import { IUserResponse } from "./user.dto";

const userService = new UserService();

export const useEditCurrentProfile = (): UseMutationResult<
	IBasicResponse,
	IErrorResponse,
	IProfileRequest
> => {
	return useCustomMutation(
		async (data?: IProfileRequest) =>
			await userService.editCurrentProfile(data!),
	);
};

export const useGetUsers = (): UseMutationResult<
	IBasicResponse<IUserResponse[]>,
	IErrorResponse,
	undefined
> => {
	return useCustomMutation(async () => await userService.getUsers());
};
