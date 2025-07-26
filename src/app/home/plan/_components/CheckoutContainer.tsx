import {
	Box,
	Paper,
	Typography,
	Button,
	Divider,
	TextField,
} from "@mui/material";
import { IPlanResponse } from "../../../../api/plan/plan.dto";
import {
	useDeleteUserOrderById,
	useCreateOrder,
} from "../../../../api/order/order.mutation";
import { useRouter } from "next/navigation";
import {
	IApplyDiscountRequest,
	IOrderRequest,
} from "../../../../api/order/order.dto";
import { BsCheckCircle, BsPercent } from "react-icons/bs";
import { useForm } from "react-hook-form";
import { useState } from "react";

const CheckoutContainer = ({ data }: { data: IPlanResponse }) => {
	const router = useRouter();
	const { register, handleSubmit } = useForm<IApplyDiscountRequest>();
	const [discountId, setDiscountId] = useState<number | undefined>(undefined);
	const { mutate: orderMutate, isPending: orderIsPending } = useCreateOrder();

	const {
		mutate: discountMutate,
		data: discountData,
		isPending: discountPending,
	} = useDeleteUserOrderById();

	const handleOrder = () => {
		const body: IOrderRequest = { planId: Number(data.id) };
		if (discountId) body.discountId = discountId;
		orderMutate(body, {
			onSuccess: (res) => {
				router.push(res.data.payUrl);
			},
		});
	};
	const checkDiscount = (discountBody: IApplyDiscountRequest) => {
		discountBody.planId = +data.id;
		discountMutate(String(discountBody), {
			onSuccess: (res) => {
				setDiscountId(res.data.discountId);
			},
		});
	};
	const price = Number(data.price);
	return (
		<Box
			component={Paper}
			sx={{
				minWidth: "30%",
				height: "100%",
				minHeight: "400px",
				display: "flex",
				flexDirection: "column",
				gap: "24px",
				padding: "36px",
			}}
		>
			<div className="flex w-full justify-between gap-5">
				<Typography>{`نام پلن:`}</Typography>
				<Typography>{`${data.name}`}</Typography>
			</div>
			<Divider />
			<div className="flex w-full justify-between gap-5">
				<Typography>{`قیمت:`}</Typography>
				<Typography>{`${price.toLocaleString("en")} تومان`}</Typography>
			</div>
			<div className="flex w-full justify-between gap-5">
				<Typography>{`قیمت با تخفیف:`}</Typography>
				<Typography>{`${discountData?.data.discountedPrice.toLocaleString("en") ?? 0} تومان`}</Typography>
			</div>
			<form onSubmit={handleSubmit(checkDiscount)} className="flex">
				<TextField
					fullWidth
					label={"کد تخفیف"}
					placeholder="k-a1234"
					{...register("discountCode")}
					sx={{
						"& .MuiOutlinedInput-root": {
							height: "48px",
							borderRadius: "16px 0 0 16px",
						},
					}}
				/>
				<Button
					variant="contained"
					color="secondary"
					startIcon={<BsPercent />}
					loading={discountPending}
					type="submit"
					sx={{
						height: "48px",
						borderRadius: "0 16px 16px 0",
						boxShadow: "none",
					}}
				>
					{"اعمال"}
				</Button>
			</form>

			<div className="grow" />
			<Button
				variant="contained"
				color="success"
				loading={orderIsPending}
				onClick={handleOrder}
				startIcon={<BsCheckCircle />}
			>
				{"نهایی کردن خرید"}
			</Button>
		</Box>
	);
};

export default CheckoutContainer;
