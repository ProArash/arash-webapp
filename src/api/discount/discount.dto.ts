export interface INewDiscountBody {
	discountCode: string;
	discountPercent: number;
}

export interface IDiscountResponse {
	id: number;
	discountCode: string;
	discountPercent: number;
}
