import { IUserResponse } from "../../../api/user/user.dto";
import UsersCardTableMobile from "./UsersCardTableMobile";

const UsersTableMobile = ({
	userData: userData,
}: {
	userData: IUserResponse[];
}) => {
	return (
		<div className="flex flex-col">
			{userData.map((v, i) => (
				<UsersCardTableMobile key={i} data={v} />
			))}
		</div>
	);
};

export default UsersTableMobile;
