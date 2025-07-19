export interface IBasicResponse<T = undefined> {
	message: string;
	count: number;
	data: T;
}
