export enum UserRole {
	'USER' = 'User',
	'ADMIN' = 'Admin',
}

export interface IAuthRequest {
	username: string;
	password: string;
}

export interface IProfileResponse {
	name: string;
	username: string;
	roles: UserRole[];
}
