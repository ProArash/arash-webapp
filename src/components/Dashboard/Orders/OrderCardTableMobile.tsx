import {
	Accordion,
	AccordionActions,
	AccordionDetails,
	AccordionSummary,
	Button,
	Typography,
} from "@mui/material";
import { IMyOrderResponse } from "../../../api/order/order.dto";
import {
	BsCheckCircleFill,
	BsChevronDown,
	BsCreditCardFill,
	BsCurrencyDollar,
	BsEyeFill,
} from "react-icons/bs";

const OrderCardTableMobile = ({ data }: { data: IMyOrderResponse }) => {
	return (
		<Accordion>
			<AccordionSummary expandIcon={<BsChevronDown />}>
				<div className="flex flex-col gap-2">
					<Typography>{`${data.id}#`}</Typography>
					<Typography>{data.plan.name}</Typography>
				</div>
			</AccordionSummary>
			<AccordionDetails>
				<div className="flex flex-col gap-5">
					<div className="flex gap-5 justify-between">
						<Typography variant="caption" className="flex gap-2 items-center">
							<BsCreditCardFill />
							{"مبلغ پرداخت شده"}
						</Typography>
						<Typography variant="caption">
							{`${data.amount.toLocaleString("en")} تومان`}
						</Typography>
					</div>
					<div className="flex gap-5 justify-between">
						<Typography variant="caption" className="flex gap-2 items-center">
							<BsCheckCircleFill />
							{"وضعیت"}
						</Typography>
						<Typography
							variant="caption"
							color={data.status ? "success" : "error"}
						>
							{data.status ? "پرداخت شده" : "پرداخت نشده"}
						</Typography>
					</div>
					<div className="flex gap-5 justify-between">
						<Typography variant="caption" className="flex gap-2 items-center">
							<BsCurrencyDollar />
							{"قیمت"}
						</Typography>
						<Typography variant="caption">
							{`${data.plan.price.toLocaleString("en")} تومان`}
						</Typography>
					</div>
				</div>
			</AccordionDetails>
			<AccordionActions>
				<Button
					startIcon={<BsEyeFill />}
					variant="contained"
					fullWidth
					color="info"
				>
					{"مشاهده"}
				</Button>
			</AccordionActions>
		</Accordion>
	);
};

export default OrderCardTableMobile;
