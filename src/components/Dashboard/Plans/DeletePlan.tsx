"use client";

import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
} from "@mui/material";
import { useDeletePlanById } from "../../../api/plan/plan.mutation";
import { BsCheck, BsXCircle } from "react-icons/bs";
import { showSnackbar } from "../../Providers/SnackbarProvider";
import { useDashboard } from "../../Providers/DashboardProvider";

const DeletePlan = ({
	onClose,
	open,
	planId,
}: {
	open: boolean;
	onClose: () => void;
	planId: string;
}) => {
	const { mutate, isPending } = useDeletePlanById();
	const { setUpdated } = useDashboard();
	return (
		<Dialog open={open} onClose={onClose}>
			<DialogTitle>{"حذف پلن"}</DialogTitle>
			<DialogContent>{"از حذف پلن مطمئن هستید؟"}</DialogContent>
			<DialogActions>
				<div className="flex gap-5 w-full justify-between">
					<Button
						variant="contained"
						color="success"
						fullWidth
						loading={isPending}
						startIcon={<BsCheck />}
						onClick={() => {
							mutate(planId, {
								onSuccess: (res) => {
									showSnackbar(res.message, "success");
									setUpdated(true);
									onClose();
								},
							});
						}}
					>
						{"بله"}
					</Button>
					<Button
						fullWidth
						variant="outlined"
						color="error"
						startIcon={<BsXCircle />}
						onClick={onClose}
					>
						{"لغو"}
					</Button>
				</div>
			</DialogActions>
		</Dialog>
	);
};

export default DeletePlan;
