"use client";
import { Box, Button, Icon, Paper, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { AppRoutes } from "../../utils/AppRoutes";
import { IPlanResponse } from "../../api/plan/plan.dto";
import { BsCheck, BsViewList } from "react-icons/bs";

const PlanCard = ({ context, price, name, status, id }: IPlanResponse) => {
	const router = useRouter();
	return (
		<Box
			component={Paper}
			className="flex flex-col gap-5 p-5 md:w-[400px] w-full h-fit min-h-[500px]"
		>
			<div className="flex flex-col">
				<Typography variant="h5">{name}</Typography>
				<Typography variant="h6">{"مناسب:"}</Typography>
				{context.map((v, i) => (
					<Typography
						variant="caption"
						key={i}
						className="flex items-center gap-2"
					>
						<Icon color="success">
							<BsCheck />
						</Icon>
						{v}
					</Typography>
				))}
			</div>
			<div className="grow" />
			<div className="flex flex-col gap-5">
				<Typography variant="h4">
					{`${price.toLocaleString("en")} تومان`}
				</Typography>
			</div>
			<Button
				disabled={!status}
				variant="contained"
				color="primary"
				onClick={() => router.push(`${AppRoutes.plan}/?id=${id}`)}
				startIcon={<BsViewList />}
			>
				{"جزئیات و خرید"}
			</Button>
		</Box>
	);
};

export default PlanCard;
