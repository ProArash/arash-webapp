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
	BsEraser,
	BsHash,
	BsPencil,
	BsPerson,
	BsPhone,
	BsShieldCheck,
} from "react-icons/bs";
import { IUserResponse } from "../../../../api/user/user.dto";

const UsersTable = ({ orderData }: { orderData: IUserResponse[] }) => {
	const tableHeads = [
		{
			title: "آیدی",
			icon: <BsHash />,
		},
		{
			title: "نام",
			icon: <BsPerson />,
		},
		{
			title: "موبایل",
			icon: <BsPhone />,
		},
		{
			title: "دسترسی",
			icon: <BsShieldCheck />,
		},
	];

	return (
		<>
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
									<Typography variant="body1">{v.mobile}</Typography>
								</TableCell>
								<TableCell>
									<Typography variant="body1">{v.roles.join(", ")}</Typography>
								</TableCell>
								<TableCell>
									<div className="flex gap-3">
										<Button variant="contained" startIcon={<BsPencil />}>
											{"مشاهده"}
										</Button>
										<Button
											variant="contained"
											color="error"
											startIcon={<BsEraser />}
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

export default UsersTable;
