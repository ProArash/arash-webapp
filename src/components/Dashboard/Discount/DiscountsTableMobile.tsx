import { IDiscountResponse } from "../../../api/discount/discount.dto";
import DiscountCardTableMobile from "./DiscountCardTableMobile";

const DiscountTableMobile = ({
	discountData,
}: {
	discountData: IDiscountResponse[];
}) => {
	return (
		<div className="flex flex-col">
			{discountData.map((v, i) => (
				<DiscountCardTableMobile key={i} data={v} />
			))}
		</div>
	);
};

export default DiscountTableMobile;
