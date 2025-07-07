import { Divider } from '@mui/material';
import FeaturesContainer from '../../components/Home/FeaturesContainer';
import HeaderContainer from '../../components/Home/HeaderContainer';
import PlanContainer from '../../components/Home/PlanContainer';
import GoTopButton from '../../components/GoTopButton';
import MainContainer from '../../components/Home/MainContainer';
import improveImage from '@/assets/home/improvement.png';
import lowPriceImage from '@/assets/home/low_price.png';
import suitableImage from '@/assets/home/suitable.png';
import demoImage from '@/assets/home/free_demo.png';
import {
	BsArrowRightCircle,
	BsArrowRightShort,
	BsCashStack,
	BsCheckCircle,
} from 'react-icons/bs';

const HomePage = () => {
	return (
		<div className="flex flex-col md:p-10 gap-10">
			<HeaderContainer />
			<Divider />
			<FeaturesContainer />
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
				title={'عملکرد حرفه‌ای با بودجه محدود'}
				image={lowPriceImage}
				reverse={true}
				btnTitle="قیمت ها"
				btnIcon={<BsCashStack />}
			/>

			<MainContainer
				caption={
					'با این طراحی مدرن و کارآمد، وب اپلیکیشن شما نه تنها ابزاری برای رشد است، بلکه پلی برای ارتباطی قوی‌تر با مشتریان و بازار هدف شما خواهد بود. قابلیت‌های متنوع و رنگ‌بندی جذاب، تجربه کاربری بی‌نظیری را رقم می‌زند.'
				}
				title={'طراحی وب اپلیکیشن مناسب انواع کسب و کار'}
				image={suitableImage}
				btnTitle="ثبت سفارش"
				btnIcon={<BsCheckCircle />}
			/>
			<Divider />
			<PlanContainer />
			<Divider />
			<MainContainer
				title="به همراه دموی رایگان"
				caption="با دموی رایگان وب اپلیکیشن ما، قدرت و کارایی را از نزدیک لمس کنید. فرصتی بی‌نظیر برای آشنایی با راه‌حل‌های هوشمند و کاربردی که برای موفقیت شما طراحی شده‌اند."
				image={demoImage}
				btnIcon={<BsArrowRightShort />}
				btnTitle="نمونه کارها"
				reverse={true}
			/>
			<GoTopButton />
		</div>
	);
};

export default HomePage;
