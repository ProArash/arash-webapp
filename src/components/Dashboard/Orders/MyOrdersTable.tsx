import {
	Button,
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Typography,
} from "@mui/material";
import {
	BsBasket,
	BsBox,
	BsCheckCircle,
	BsCreditCardFill,
	BsCurrencyDollar,
	BsEraser,
	BsEyeFill,
	BsHash,
} from "react-icons/bs";
import { IMyOrderResponse } from "../../../api/order/order.dto";
import Link from "next/link";
import { useState } from "react";
import DeleteUserOrder from "./DeleteUserOrder";

const MyOrdersTable = ({ orderData }: { orderData: IMyOrderResponse[] }) => {
	const tableHeads = [
		{
			title: "شماره سفارش",
			icon: <BsHash />,
		},
		{
			title: "نام",
			icon: <BsBox />,
		},
		{
			title: "مبلغ پرداخت شده",
			icon: <BsCreditCardFill />,
		},
		{
			title: "وضعیت",
			icon: <BsCheckCircle />,
		},
		{
			title: "قیمت",
			icon: <BsCurrencyDollar />,
		},
		{
			title: "مشاهده",
			icon: <BsEyeFill />,
		},
	];
	const [showDelete, setShowDelete] = useState<boolean>(false);
	const [orderId, setOrderId] = useState<string>("");
	const handleDelete = (id: number) => {
		setOrderId(String(id));
		setShowDelete(true);
	};

	return (
		<>
			{showDelete && (
				<DeleteUserOrder
					open={showDelete}
					onClose={() => setShowDelete(false)}
					orderId={orderId}
				/>
			)}
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
						{orderData.map((v, i) => (
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
									<Typography variant="body1">{v.plan.name}</Typography>
								</TableCell>
								<TableCell>
									<Typography variant="body1">
										{`${Number(v.amount).toLocaleString("en")} تومان`}
									</Typography>
								</TableCell>
								<TableCell>
									{v.status ? (
										<Typography color="success">{"پرداخت شده"}</Typography>
									) : (
										<Typography color="error">{"پرداخت نشده"}</Typography>
									)}
								</TableCell>
								<TableCell>
									<Typography variant="body1">
										{`${Number(v.plan.price).toLocaleString("en")} تومان`}
									</Typography>
								</TableCell>
								<TableCell>
									<div className="flex items-center gap-5">
										<Button
											variant="contained"
											color="success"
											startIcon={<BsBasket />}
											disabled={v.status}
											LinkComponent={Link}
											href={`https://gateway.zibal.ir/start/${v.trackId}`}
											target="_blank"
										>
											{"پرداخت"}
										</Button>
										<Button
											variant="outlined"
											color="error"
											disabled={v.status}
											startIcon={<BsEraser />}
											onClick={() => handleDelete(v.id)}
										>
											{"حذف"}
										</Button>
									</div>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</>
	);
};

export default MyOrdersTable;
