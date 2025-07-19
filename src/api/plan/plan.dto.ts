export interface IPlanResponse {
	id: string;
	name: string;
	caption: string;
	price: number;
	status: boolean;
	features: string[];
	context: string[];
}

export interface IPlanRequest {
	planId?: string;
	name: string;
	caption: string;
	price: number;
	status: boolean;
	features: string[];
	context: string[];
}
