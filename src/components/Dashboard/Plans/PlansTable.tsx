"use client";
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
	BsBox,
	BsCheckCircle,
	BsCreditCardFill,
	BsEraser,
	BsHash,
	BsPencil,
} from "react-icons/bs";
import { IPlanResponse } from "../../../api/plan/plan.dto";
import { useState } from "react";
import DeletePlan from "./DeletePlan";
import EditPlan from "./EditPlan";

const PlansTable = ({ orderData }: { orderData: IPlanResponse[] }) => {
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
	const tableHeads = [
		{
			title: "آیدی",
			icon: <BsHash />,
		},
		{
			title: "نام",
			icon: <BsBox />,
		},
		{
			title: "قیمت",
			icon: <BsCreditCardFill />,
		},
		{
			title: "وضعیت",
			icon: <BsCheckCircle />,
		},
	];

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
							<TableCell>{"عملیات"}</TableCell>
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
									<Typography variant="body1">{v.name}</Typography>
								</TableCell>
								<TableCell>
									<Typography variant="body1">
										{Number(v.price).toLocaleString("en")}
									</Typography>
								</TableCell>
								<TableCell>
									{v.status ? (
										<Typography color="success">{"فعال"}</Typography>
									) : (
										<Typography color="error">{"غیرفعال"}</Typography>
									)}
								</TableCell>
								<TableCell>
									<div className="flex gap-3">
										<Button
											variant="contained"
											startIcon={<BsPencil />}
											onClick={() => handleShowEdit(String(v.id))}
										>
											{"مشاهده"}
										</Button>
										<Button
											variant="contained"
											color="error"
											startIcon={<BsEraser />}
											onClick={() => handleShowDelete(String(v.id))}
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

export default PlansTable;
