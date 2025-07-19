import { Button, Typography } from "@mui/material";
import Image from "next/image";
import headerImage from "@/assets/home/header.svg";
import MainTitle from "./MainTitle";
import { BsCash, BsPerson } from "react-icons/bs";

const HeaderContainer = () => {
	return (
		<div className="flex md:flex-row flex-col justify-between w-full md:items-center">
			<div className="flex flex-col gap-5 md:w-1/2 w-full text-justify">
				<MainTitle />
				{/* dynamic text */}
				<Typography variant="body1">
					{
						"در دنیای دیجیتال امروز، موفقیت هر کسب‌وکاری به ابزارهای قدرتمندی که در اختیار دارد بستگی دارد. وب‌اپلیکیشن‌های پیشرفته و سفارشی، برای برآوردن نیازهای منحصربه‌فرد کسب‌وکار شما طراحی و توسعه داده می‌شوند. از افزایش بهره‌وری و بهبود تجربه کاربری گرفته تا خودکارسازی فرآیندها و گسترش دسترسی به بازار، این راهکارها کسب‌وکار شما را به سمت آینده‌ای روشن هدایت می‌کنند."
					}
				</Typography>
				<div className="flex md:flex-row flex-col md:gap-10 gap-5">
					<Button fullWidth variant="contained" startIcon={<BsPerson />}>
						درباره من
					</Button>
					<Button
						LinkComponent={"a"}
						href="#plans"
						variant="contained"
						color="secondary"
						fullWidth
						startIcon={<BsCash />}
					>
						{"تعرفه ها"}
					</Button>
				</div>
			</div>
			<Image
				src={headerImage}
				alt="header"
				width={0}
				height={0}
				className="object-contain md:w-1/2 w-full"
			/>
		</div>
	);
};

export default HeaderContainer;
