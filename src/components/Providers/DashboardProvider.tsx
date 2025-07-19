"use client";

import { createContext, ReactNode, useContext, useState } from "react";
import { IProfileResponse } from "../../api/auth/auth.dto";

interface DashboardProps {
	updated: boolean;
	setUpdated: (value: boolean) => void;
	profile: IProfileResponse;
	setProfile: (value: IProfileResponse) => void;
}

const DashboardContext = createContext<DashboardProps | undefined>(undefined);

export const DashboardProvider = ({ children }: { children: ReactNode }) => {
	const [updated, setUpdated] = useState<boolean>(false);
	const [profile, setProfile] = useState<IProfileResponse>({
		mobile: "",
		name: "",
		roles: [],
	});
	return (
		<DashboardContext.Provider
			value={{
				updated,
				setUpdated,
				profile,
				setProfile,
			}}
		>
			{children}
		</DashboardContext.Provider>
	);
};

export const useDashboard = () => {
	const context = useContext(DashboardContext);
	if (!context) throw new Error("Context must be initiated.");
	return context;
};
