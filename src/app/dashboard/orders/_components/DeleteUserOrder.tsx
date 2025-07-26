"use client";
import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	Typography,
} from "@mui/material";
import { useDeleteUserOrderById } from "../../../../api/order/order.mutation";
import { BsCheck, BsXCircle } from "react-icons/bs";
import { useDashboard } from "../../../../components/Providers/DashboardProvider";

const DeleteUserOrder = ({
	onClose,
	open,
	orderId,
}: {
	open: boolean;
	onClose: () => void;
	orderId: string;
}) => {
	const { mutate, isPending } = useDeleteUserOrderById();
	const { setUpdated } = useDashboard();
	return (
		<Dialog open={open} onClose={onClose}>
			<DialogTitle>{"حذف سفارش"}</DialogTitle>
			<DialogContent>
				<Typography>{"آیا مطمئن به حذف سفارش هستید؟"}</Typography>
			</DialogContent>
			<DialogActions>
				<div className="flex gap-5">
					<Button
						variant="contained"
						startIcon={<BsCheck />}
						loading={isPending}
						onClick={() =>
							mutate(orderId, {
								onSuccess: () => {
									setUpdated(true);
									onClose();
								},
							})
						}
					>
						{"تایید"}
					</Button>
					<Button variant="outlined" color="error" startIcon={<BsXCircle />}>
						{"لغو"}
					</Button>
				</div>
			</DialogActions>
		</Dialog>
	);
};

export default DeleteUserOrder;
