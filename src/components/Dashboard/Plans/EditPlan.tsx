import {
	Dialog,
	DialogTitle,
	DialogContent,
	TextField,
	Typography,
	Chip,
	Button,
	FormControl,
	FormControlLabel,
	Checkbox,
	DialogActions,
	CircularProgress,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { BsBox, BsPlusSquare, BsCheckCircleFill } from "react-icons/bs";
import { IPlanRequest } from "../../../api/plan/plan.dto";
import {
	useGetPlanById,
	useUpdatePlanById,
} from "../../../api/plan/plan.mutation";
import CustomAdornment from "../../CustomAdornment";
import { useDashboard } from "../../Providers/DashboardProvider";
import { showSnackbar } from "../../Providers/SnackbarProvider";

const EditPlan = ({
	open,
	onClose,
	planId,
}: {
	open: boolean;
	planId: string;
	onClose: () => void;
}) => {
	const { register, handleSubmit, setValue, watch, reset } =
		useForm<IPlanRequest>({
			defaultValues: {
				caption: "",
				name: "",
				price: 0,
				context: [],
				features: [],
				status: false,
			},
		});
	const [contextText, setContextText] = useState<string>("");
	const [featureText, setFeatureText] = useState<string>("");
	const { mutate: updatePlanMutate, isPending: updatePlanPending } =
		useUpdatePlanById();
	const {
		mutate: getPlanMutate,
		data: getPlanData,
		isPending: getPlanPending,
		isSuccess: getPlanSuccess,
	} = useGetPlanById();
	const { setUpdated } = useDashboard();
	const handleUpdatePlan = (data: IPlanRequest) => {
		data.planId = planId;
		updatePlanMutate(data, {
			onSuccess: (res) => {
				showSnackbar(res.message, "success");
				setUpdated(true);
				onClose();
			},
		});
	};
	useEffect(() => {
		getPlanMutate(planId, {
			onSuccess: (res) => {
				reset({ ...res.data });
			},
		});
	}, [getPlanMutate, planId, reset]);
	return (
		<>
			{getPlanPending && <CircularProgress />}
			{getPlanSuccess && (
				<Dialog open={open} onClose={onClose}>
					<DialogTitle>{"ویرایش پلن"}</DialogTitle>
					<DialogContent>
						<form
							id="form-new-plan"
							onSubmit={handleSubmit(handleUpdatePlan)}
							className="flex flex-col gap-5 p-5 md:w-[500px] w-full select-none"
						>
							<TextField
								label={"نام پلن"}
								placeholder="نام پلن"
								{...register("name")}
								defaultValue={getPlanData.data.name || ""}
								slotProps={{
									input: {
										startAdornment: <CustomAdornment icon={<BsBox />} />,
									},
								}}
							/>
							<TextField
								label={"قیمت"}
								placeholder="قیمت"
								{...register("price")}
								defaultValue={getPlanData.data.price || ""}
								slotProps={{
									input: {
										startAdornment: <CustomAdornment icon={<BsBox />} />,
									},
								}}
							/>
							<TextField
								label={"توضیحات"}
								placeholder="توضیحات"
								{...register("caption")}
								defaultValue={getPlanData.data.caption || ""}
								multiline
								slotProps={{
									input: {
										startAdornment: <CustomAdornment icon={<BsBox />} />,
									},
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
							loading={updatePlanPending}
							fullWidth
							startIcon={<BsCheckCircleFill />}
						>
							{"ثبت"}
						</Button>
					</DialogActions>
				</Dialog>
			)}
		</>
	);
};

export default EditPlan;
