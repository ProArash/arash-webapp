import { IMyOrderResponse } from "../../../../api/order/order.dto";
import OrderCardTableMobile from "./OrderCardTableMobile";

const MyOrdersTableMobile = ({
	orderData,
}: {
	orderData: IMyOrderResponse[];
}) => {
	return (
		<div className="flex flex-col">
			{orderData.map((v, i) => (
				<OrderCardTableMobile key={i} data={v} />
			))}
		</div>
	);
};

export default MyOrdersTableMobile;
