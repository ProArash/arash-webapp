import {
	Accordion,
	AccordionActions,
	AccordionDetails,
	AccordionSummary,
	Button,
	Typography,
} from "@mui/material";
import {
	BsChevronDown,
	BsCurrencyDollar,
	BsEraser,
	BsPencil,
} from "react-icons/bs";
import { useState } from "react";
import DeletePlan from "./DeletePlan";
import EditPlan from "./EditPlan";
import { IPlanResponse } from "../../../../api/plan/plan.dto";

const PlanCardTableMobile = ({ data }: { data: IPlanResponse }) => {
	const [showDelete, setShowDelete] = useState<boolean>(false);
	const [showEdit, setShowEdit] = useState<boolean>(false);
	const [planId, setPlanId] = useState<string>("");
	const handleShowDelete = (id: string) => {
		setShowDelete(true);
		setPlanId(id);
	};
	const handleShowEdit = (id: string) => {
		setShowEdit(true);
		setPlanId(id);
	};
	return (
		<>
			<DeletePlan
				open={showDelete}
				onClose={() => setShowDelete(false)}
				planId={planId}
			/>
			{showEdit && (
				<EditPlan
					open={showEdit}
					onClose={() => setShowEdit(false)}
					planId={planId}
				/>
			)}
			<Accordion>
				<AccordionSummary expandIcon={<BsChevronDown />}>
					<div className="flex flex-col gap-2">
						<Typography>{`${data.id}#`}</Typography>
						<Typography>{data.name}</Typography>
					</div>
				</AccordionSummary>
				<AccordionDetails>
					<div className="flex flex-col gap-5">
						<div className="flex gap-5 justify-between">
							<Typography variant="caption" className="flex gap-2 items-center">
								<BsCurrencyDollar />
								{"قیمت"}
							</Typography>
							<Typography variant="caption">{`${data.price}`}</Typography>
						</div>
						<div className="flex gap-5 justify-between">
							<Typography variant="caption" className="flex gap-2 items-center">
								<BsCurrencyDollar />
								{"وضعیت"}
							</Typography>
							<Typography variant="caption">{`${data.status}`}</Typography>
						</div>
					</div>
				</AccordionDetails>
				<AccordionActions>
					<div className="flex justify-between w-full gap-5">
						<Button
							startIcon={<BsPencil />}
							variant="contained"
							fullWidth
							color="primary"
							onClick={() => handleShowEdit(data.id)}
						>
							{"ویرایش"}
						</Button>
						<Button
							startIcon={<BsEraser />}
							variant="contained"
							fullWidth
							color="error"
							onClick={() => handleShowDelete(data.id)}
						>
							{"حذف"}
						</Button>
					</div>
				</AccordionActions>
			</Accordion>
		</>
	);
};

export default PlanCardTableMobile;
