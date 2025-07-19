import {
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Typography,
} from "@mui/material";
import { BsBox, BsHash, BsPercent } from "react-icons/bs";
import { IDiscountResponse } from "../../../api/discount/discount.dto";

const DiscountsTable = ({ discountData }: { discountData: IDiscountResponse[] }) => {
	const tableHeads = [
		{
			title: "آیدی",
			icon: <BsHash  />,
		},
		{
			title: "کد تخفیف",
			icon: <BsBox />,
		},
		{
			title: "درصد تخفیف",
			icon: <BsPercent />,
		},
	];

	return (
		<TableContainer component={Paper}>
			<Table>
				<TableHead>
					<TableRow>
						{tableHeads.map((v, i) => (
							<TableCell key={i}>
								<div className="flex gap-3 items-center">
									{v.icon}
									{v.title}
								</div>
							</TableCell>
						))}
					</TableRow>
				</TableHead>
				<TableBody>
					{discountData.map((v, i) => (
						<TableRow
							key={i}
							sx={(theme) => ({
								backgroundColor:
									i % 2 == 0
										? theme.palette.mode == "light"
											? theme.palette.grey[100]
											: theme.palette.grey[800]
										: theme.palette.mode == "light"
											? theme.palette.grey[200]
											: theme.palette.grey[900],
							})}
						>
							<TableCell>
								<Typography variant="body1">{v.id}</Typography>
							</TableCell>
							<TableCell>
								<Typography variant="body1">{v.discountCode}</Typography>
							</TableCell>
							<TableCell>
								<Typography variant="body1">{v.discountPercent}</Typography>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
};

export default DiscountsTable;
