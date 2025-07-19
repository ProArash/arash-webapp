import { Typography } from "@mui/material";
import { BsEmojiSmileUpsideDown } from "react-icons/bs";

const PlanErrorPage = ({ message }: { message: string }) => {
	return (
		<div className="flex justify-center items-center w-full h-screen">
			<Typography variant="h4" className="flex items-center gap-5">
				<BsEmojiSmileUpsideDown />
				{message}
			</Typography>
		</div>
	);
};

export default PlanErrorPage;
