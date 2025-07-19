import { InputAdornment } from "@mui/material";
import { ReactNode } from "react";

const CustomAdornment = ({ icon }: { icon: ReactNode }) => {
	return (
		<InputAdornment position="start" className="flex gap-2">
			{icon}
			<div className="h-[20px] bg-gray-300 rounded-full w-[1px]" />
		</InputAdornment>
	);
};

export default CustomAdornment;
