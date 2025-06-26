import { useMutation, UseMutationResult } from '@tanstack/react-query';
import { IBasicResponse, IErrorResponse } from './axios.client';

export const useCustomMutation = <TResponse, TRequest = undefined>(
	mutationFn: (data?: TRequest) => Promise<IBasicResponse<TResponse>>
): UseMutationResult<IBasicResponse<TResponse>, IErrorResponse, TRequest> => {
	return useMutation<IBasicResponse<TResponse>, IErrorResponse, TRequest>({
		mutationFn,
	});
};
