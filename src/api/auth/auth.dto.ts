export enum UserRole {
	"USER" = "User",
	"ADMIN" = "Admin",
}

export interface IAuthRequest {
	mobile: string;
	password: string;
}

export interface IProfileResponse {
	name: string;
	mobile: string;
	roles: UserRole[];
}

export interface IProfileRequest {
	name: string;
}
