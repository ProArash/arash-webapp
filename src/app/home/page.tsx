import { Divider } from "@mui/material";
import improveImage from "@/assets/home/improvement.png";
import lowPriceImage from "@/assets/home/low_price.png";
import suitableImage from "@/assets/home/suitable.png";
import GoTopButton from "../../components/GoTopButton";
import FeaturesContainer from "./_components/FeaturesContainer";
import HeaderContainer from "./_components/HeaderContainer";
import MainContainer from "./_components/MainContainer";
import PlanContainer from "./_components/PlanContainer";
import {
	BsArrowRightCircle,
	BsCash,
	BsCheckCircle,
} from "react-icons/bs";

const HomePage = () => {
	return (
		<div className="flex flex-col md:p-10 p-5 gap-10">
			<HeaderContainer />
			<Divider />
			<FeaturesContainer />
			<Divider />
			<PlanContainer />
			<Divider />
			<MainContainer
				caption="در دنیای پرشتاب امروز، سرعت حرف اول را می‌زند. اگر به دنبال رشد سریع کسب و کار خود هستید و می‌خواهید از رقبای خود پیشی بگیرید، توسعه وب‌اپلیکیشن یک راهکار قدرتمند و اثربخش است. وب‌اپلیکیشن‌ها با ارائه تجربه‌ای روان و در دسترس بر روی هر دستگاهی، پتانسیل کسب و کار شما را به شکل چشمگیری افزایش می‌دهند."
				title="رشد سریع کسب و کار"
				btnTitle="همین حالا شروع کنید"
				image={improveImage}
				btnIcon={<BsArrowRightCircle />}
			/>

			<MainContainer
				caption="با راهکارهای نوآورانه ما، وب اپلیکیشنی قدرتمند و بهینه با هزینه‌ای مقرون‌به‌صرفه داشته باشید. ما به شما کمک می‌کنیم تا با کمترین هزینه، بیشترین کارایی را از وب اپلیکیشن خود دریافت کنید."
				title={"عملکرد حرفه‌ای با بودجه محدود"}
				image={lowPriceImage}
				reverse={true}
				btnTitle="قیمت ها"
				btnIcon={<BsCash />}
			/>

			<MainContainer
				caption={
					"با این طراحی مدرن و کارآمد، وب اپلیکیشن شما نه تنها ابزاری برای رشد است، بلکه پلی برای ارتباطی قوی‌تر با مشتریان و بازار هدف شما خواهد بود. قابلیت‌های متنوع و رنگ‌بندی جذاب، تجربه کاربری بی‌نظیری را رقم می‌زند."
				}
				title={"طراحی وب اپلیکیشن مناسب انواع کسب و کار"}
				image={suitableImage}
				btnTitle="ثبت سفارش"
				btnIcon={<BsCheckCircle />}
			/>

			<Divider />
			<GoTopButton />
		</div>
	);
};

export default HomePage;
