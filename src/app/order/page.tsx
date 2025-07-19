"use client";
import { useSearchParams } from "next/navigation";
import OrderContainer from "../../components/Order/OrderContainer";

const OrderPage = () => {
	const orderId = useSearchParams().get("id") || "";
	return <OrderContainer orderId={orderId} />;
};

export default OrderPage;
