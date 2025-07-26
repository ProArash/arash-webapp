import { Typography } from "@mui/material";

const TosSection = ({ title, caption }: { title: string; caption: string }) => {
	return (
		<div className="flex flex-col gap-5">
			<Typography variant="h5">{title}</Typography>
			<div className="ps-5">
				<Typography
					variant="body1"
					className="whitespace-pre-line"
				>
					{caption}
				</Typography>
			</div>
		</div>
	);
};

export default TosSection;
