import {
	Accordion,
	AccordionActions,
	AccordionDetails,
	AccordionSummary,
	Button,
	Typography,
} from "@mui/material";
import { BsChevronDown, BsCreditCardFill, BsEyeFill } from "react-icons/bs";
import { IDiscountResponse } from "../../../../api/discount/discount.dto";

const DiscountCardTableMobile = ({ data }: { data: IDiscountResponse }) => {
	return (
		<Accordion>
			<AccordionSummary expandIcon={<BsChevronDown />}>
				<div className="flex flex-col gap-2">
					<Typography>{`${data.id}#`}</Typography>
					<Typography>{data.discountCode}</Typography>
				</div>
			</AccordionSummary>
			<AccordionDetails>
				<div className="flex flex-col gap-5">
					<div className="flex gap-5 justify-between">
						<Typography variant="caption" className="flex gap-2 items-center">
							<BsCreditCardFill />
							{"میزان تخفیف"}
						</Typography>
						<Typography variant="caption">
							{`${data.discountPercent}`}
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

export default DiscountCardTableMobile;
