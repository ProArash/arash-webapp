"use client";
import {
	Button,
	Checkbox,
	Chip,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	FormControl,
	FormControlLabel,
	TextField,
	Typography,
} from "@mui/material";
import CustomAdornment from "../../CustomAdornment";
import { BsBox, BsCheckCircleFill, BsPlusSquare } from "react-icons/bs";
import { useForm } from "react-hook-form";
import { IPlanRequest } from "../../../api/plan/plan.dto";
import { useCreatePlan } from "../../../api/plan/plan.mutation";
import { showSnackbar } from "../../Providers/SnackbarProvider";
import { useDashboard } from "../../Providers/DashboardProvider";
import { useState } from "react";

const NewPlan = ({ open, onClose }: { open: boolean; onClose: () => void }) => {
	const { register, handleSubmit, setValue, watch, reset } =
		useForm<IPlanRequest>({
			defaultValues: {
				context: [],
				features: [],
				status: false,
			},
		});
	const [contextText, setContextText] = useState<string>("");
	const [featureText, setFeatureText] = useState<string>("");
	const { mutate: newPlanMutate, isPending: newPlanPending } = useCreatePlan();
	const { setUpdated } = useDashboard();
	const handleNewPlan = (data: IPlanRequest) => {
		newPlanMutate(data, {
			onSuccess: (res) => {
				showSnackbar(res.message, "success");
				setUpdated(true);
				reset();
				onClose();
			},
		});
	};
	return (
		<Dialog open={open} onClose={onClose}>
			<DialogTitle>{"پلن جدید"}</DialogTitle>
			<DialogContent>
				<form
					id="form-new-plan"
					onSubmit={handleSubmit(handleNewPlan)}
					className="flex flex-col gap-5 p-5 md:w-[500px] w-full select-none"
				>
					<TextField
						label={"نام پلن"}
						placeholder="نام پلن"
						{...register("name")}
						slotProps={{
							input: { startAdornment: <CustomAdornment icon={<BsBox />} /> },
						}}
					/>
					<TextField
						label={"قیمت"}
						placeholder="قیمت"
						{...register("price")}
						slotProps={{
							input: { startAdornment: <CustomAdornment icon={<BsBox />} /> },
						}}
					/>
					<TextField
						label={"توضیحات"}
						placeholder="توضیحات"
						{...register("caption")}
						multiline
						slotProps={{
							input: { startAdornment: <CustomAdornment icon={<BsBox />} /> },
						}}
					/>
					<Typography>{"مناسب"}</Typography>
					<TextField
						label={"متن"}
						placeholder="متن"
						value={contextText || ""}
						onChange={(e) => setContextText(e.target.value)}
						slotProps={{
							input: {
								startAdornment: <CustomAdornment icon={<BsBox />} />,
							},
						}}
					/>
					<div className="flex gap-2 w-full overflow-y-auto">
						{watch("context").map((v, i) => (
							<Chip
								onDelete={() =>
									setValue(
										"context",
										watch("context").filter((c) => c != v),
									)
								}
								variant="filled"
								color="primary"
								label={v}
								key={i}
							/>
						))}
					</div>
					<Button
						variant="contained"
						color="info"
						startIcon={<BsPlusSquare />}
						onClick={() => {
							setValue("context", [...watch("context"), contextText]);
							setContextText("");
						}}
					>
						{"افزودن"}
					</Button>
					<Typography>{"ویژگی ها"}</Typography>
					<TextField
						label={"متن"}
						placeholder="متن"
						value={featureText || ""}
						onChange={(e) => setFeatureText(e.target.value)}
						slotProps={{
							input: {
								startAdornment: <CustomAdornment icon={<BsBox />} />,
							},
						}}
					/>
					<div className="flex gap-2 w-full overflow-y-auto">
						{watch("features").map((v, i) => (
							<Chip
								onDelete={() => {
									setValue(
										"features",
										watch("features").filter((f) => f != v),
									);
								}}
								variant="filled"
								color="primary"
								label={v}
								key={i}
							/>
						))}
					</div>
					<Button
						variant="contained"
						color="info"
						startIcon={<BsPlusSquare />}
						onClick={() => {
							setValue("features", [...watch("features"), featureText]);
							setFeatureText("");
						}}
					>
						{"افزودن"}
					</Button>
					<FormControl>
						<FormControlLabel
							control={
								<Checkbox
									checked={watch("status") || false}
									onChange={(e) => setValue("status", e.target.checked)}
								/>
							}
							label="وضعیت"
						/>
					</FormControl>
				</form>
			</DialogContent>
			<DialogActions>
				<Button
					type="submit"
					variant="contained"
					color="success"
					form="form-new-plan"
					loading={newPlanPending}
					fullWidth
					startIcon={<BsCheckCircleFill />}
				>
					{"ثبت"}
				</Button>
			</DialogActions>
		</Dialog>
	);
};

export default NewPlan;
