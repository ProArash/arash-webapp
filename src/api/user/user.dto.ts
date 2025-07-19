import { UserRole } from "../auth/auth.dto";

export interface IUserResponse {
	id: number;
	name: string;
	mobile: string;
	otp: string;
	roles: UserRole[];
}
