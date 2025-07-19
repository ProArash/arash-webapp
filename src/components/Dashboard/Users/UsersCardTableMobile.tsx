import {
	Accordion,
	AccordionActions,
	AccordionDetails,
	AccordionSummary,
	Button,
	Typography,
} from "@mui/material";
import { BsChevronDown, BsCurrencyDollar, BsEyeFill } from "react-icons/bs";
import { IUserResponse } from "../../../api/user/user.dto";

const UsersCardTableMobile = ({ data }: { data: IUserResponse }) => {
	return (
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
							{"نام"}
						</Typography>
						<Typography variant="caption">{`${data.name}`}</Typography>
					</div>
					<div className="flex gap-5 justify-between">
						<Typography variant="caption" className="flex gap-2 items-center">
							<BsCurrencyDollar />
							{"موبایل"}
						</Typography>
						<Typography variant="caption">{`${data.mobile}`}</Typography>
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

export default UsersCardTableMobile;
