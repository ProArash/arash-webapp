"use client";
import {
	Box,
	Button,
	Divider,
	Icon,
	Paper,
	useMediaQuery,
} from "@mui/material";
import { useGetOrderById } from "../../api/order/order.mutation";
import { useEffect } from "react";
import OrderSkeleton from "./OrderSkeleton";
import { customTheme } from "../Theme/theme";
import { AppRoutes } from "../../utils/AppRoutes";
import PaymentItemContainer from "./PaymentItemContainer";
import { BsArrowRightShort, BsCheckCircle, BsXCircle } from "react-icons/bs";

const OrderContainer = ({ orderId }: { orderId: string }) => {
	const isMobile = useMediaQuery(customTheme.breakpoints.down("md"));
	const { mutate, data, isPending, isSuccess } = useGetOrderById();

	useEffect(() => {
		mutate(orderId);
	}, [mutate, orderId]);

	return (
		<div className="flex w-full justify-center h-screen items-center">
			{isPending ? (
				<OrderSkeleton />
			) : (
				isSuccess && (
					<Box
						component={Paper}
						sx={{
							padding: "20px",
							display: "flex",
							flexDirection: "column",
							gap: "20px",
							alignItems: "center",
							minWidth: isMobile ? "100%" : "30%",
						}}
					>
						{data?.data?.status ? (
							<Icon color="success" fontSize="large">
								<BsCheckCircle />
							</Icon>
						) : (
							<Icon color="error" fontSize="large">
								<BsXCircle />
							</Icon>
						)}

						<PaymentItemContainer
							title={"وضعیت پرداخت:"}
							value={data.data.status ? "موفق" : "ناموفق"}
							color={data.data?.status ? "success" : "error"}
						/>
						<Divider orientation="horizontal" flexItem />
						<PaymentItemContainer
							title="مبلغ:"
							value={`${data.data.amount.toLocaleString("en")} تومان`}
						/>
						<Divider orientation="horizontal" flexItem />
						<PaymentItemContainer title="شماره سفارش:" value={orderId} />
						<Divider orientation="horizontal" flexItem />
						<div className="grow" />
						<Button
							variant="outlined"
							startIcon={<BsArrowRightShort />}
							fullWidth
							href={AppRoutes.dashboardItems.orders}
						>
							{"برو به سفارشات"}
						</Button>
					</Box>
				)
			)}
		</div>
	);
};

export default OrderContainer;
