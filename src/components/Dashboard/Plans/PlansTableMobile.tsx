import { IPlanResponse } from "../../../api/plan/plan.dto";
import PlanCardTableMobile from "./PlanCardTableMobile";

const PlansTableMobile = ({
	orderData,
}: {
	orderData: IPlanResponse[];
}) => {
	return (
		<div className="flex flex-col">
			{orderData.map((v, i) => (
				<PlanCardTableMobile key={i} data={v} />
			))}
		</div>
	);
};

export default PlansTableMobile;
