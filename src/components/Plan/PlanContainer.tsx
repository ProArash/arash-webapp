import { Divider, Icon, Paper, Typography } from "@mui/material";
import CheckoutContainer from "./CheckoutContainer";
import { IPlanResponse } from "../../api/plan/plan.dto";
import FeatureContextItem from "./FeatureContextItem";
import {
	BsArrowDownCircle,
	BsCheck,
	BsCheckCircle,
	BsCircleFill,
} from "react-icons/bs";

const PlanContainer = ({ data }: { data: IPlanResponse }) => {
	return (
		<div className="flex md:flex-row flex-col md:justify-between gap-5 w-full">
			<div className="flex flex-col gap-5 w-full">
				<Typography variant="h4" className="flex gap-2 items-center">
					<Icon>
						<BsCheckCircle />
					</Icon>
					{data.name}
				</Typography>
				<Divider />
				<Paper className="p-5 gap-2 flex flex-col">
					<Icon color="primary">
						<BsArrowDownCircle />
					</Icon>
					<Typography variant="body1">{data.caption}</Typography>
				</Paper>
				<div className="flex flex-col gap-5">
					<FeatureContextItem
						title="مناسب برای"
						icon={
							<Icon color="info">
								<BsCircleFill />
							</Icon>
						}
						items={data.context}
					/>

					<FeatureContextItem
						title="ویژگی ها"
						icon={
							<Icon color="success">
								<BsCheck />
							</Icon>
						}
						items={data.features}
					/>
				</div>
			</div>
			<CheckoutContainer data={data} />
		</div>
	);
};

export default PlanContainer;
