import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { IErrorResponse } from "./axios.client";
import { showSnackbar } from "../components/Providers/SnackbarProvider";

export const useCustomMutation = <TResponse, TRequest = undefined>(
	mutationFn: (data?: TRequest) => Promise<TResponse>,
): UseMutationResult<TResponse, IErrorResponse, TRequest> => {
	return useMutation<TResponse, IErrorResponse, TRequest>({
		mutationFn,
		onError: (err) => {
			showSnackbar(err.response.data.message, "error");
		},
	});
};
