import React from 'react';
import SectionTitle from './SectionTitle';
import PlanCard, { PlanItemProps } from './PlanCard';

const PlanContainer = () => {
	const plans: PlanItemProps[] = [
		{
			id: 0,
			title: 'وب اپلیکیشن پایه',
			context: [
				'پایان نامه دانشجویی',
				'پروژه های دانشجویی',
				'تک صفحه ای',
				'رزومه',
			],
			price: 4900000,
			discountPrice: 1900000,
			status: true,
			features: [
				{
					title: 'داشبورد حرفه ای ادمین',
				},
				{
					title: 'پشتیبانی فنی 3 ماهه',
				},
				{
					title: 'احراز هویت با کد یکبار مصرف',
				},
				{
					title: 'رابط کاربری حرفه ای و کاربر پسند',
				},
				{
					title: 'ریسپانسیو و حالت PWA',
				},
				{
					title: 'به همراه سورس کد',
				},
			],
		},
		{
			id: 1,
			title: 'وب اپلیکیشن شرکتی',
			context: ['پزشکان', 'وکلا', 'دفتر ترجمه'],
			price: 19900000,
			discountPrice: 16900000,
			status: true,
			features: [
				{
					title: 'داشبورد حرفه ای ادمین',
				},
				{
					title: 'سئوی بهینه و حرفه ای با NextJS',
				},
				{
					title: 'پشتیبانی فنی یکساله',
				},
				{
					title: 'امکان اتصال به پنل پیامکی',
				},
				{
					title: 'رابط کاربری حرفه ای و کاربر پسند',
				},
				{
					title: 'ریسپانسیو و حالت PWA',
				},
				{
					title: 'ثبت در گوگل سرچ انجین',
				},
				{
					title: 'فرم ارتباط با مشتری و ثبت درخواست',
				},
			],
		},
		{
			id: 2,
			title: 'وب اپلیکیشن فروش آنلاین',
			context: ['کسب و کارهای خانگی', 'فروش آنلاین محصول', 'خدمات مجازی'],
			price: 24900000,
			discountPrice: 21900000,
			status: true,
			features: [
				{
					title: 'داشبورد حرفه ای ادمین',
				},
				{
					title: 'پشتیبانی فنی 6 ماهه',
				},
				{
					title: 'امکان اتصال به انواع درگاه پرداخت',
				},
				{
					title: 'مدیریت موجودی اجناس',
				},
				{
					title: 'احراز هویت با کد یکبار مصرف',
				},
				{
					title: 'رابط کاربری حرفه ای و کاربر پسند',
				},
				{
					title: 'ریسپانسیو و حالت PWA',
				},
			],
		},
		{
			id: 3,
			title: 'وب اپلیکیشن اختصاصی',
			context: [
				'فروشگاه اینترنتی',
				'نوبت دهی مطب پزشک',
				'نوبت دهی درمانگاه',
				'کسب و کارهای آنلاین',
			],
			price: 149900000,
			discountPrice: 144900000,
			status: true,
			features: [
				{
					title: 'داشبورد حرفه ای ادمین',
				},
				{
					title: 'امکان اتصال به انواع درگاه پرداخت',
				},
				{
					title: 'سیستم نظردهی مشتریان',
				},
				{
					title: '',
				},
				{
					title: '',
				},
				{
					title: '',
				},
				{
					title: 'سئوی بهینه و حرفه ای با NextJS',
				},
				{
					title: 'پشتیبانی فنی 1 ساله',
				},
				{
					title: 'امکان اتصال به پنل پیامکی',
				},
				{
					title: 'رابط کاربری حرفه ای و کاربر پسند',
				},
				{
					title: 'ریسپانسیو و حالت PWA',
				},
				{
					title: 'ثبت در گوگل سرچ انجین',
				},
			],
		},
	];
	return (
		<div id="plans" className="flex flex-col gap-10">
			<SectionTitle title={'پلن های طراحی'} />
			<div className="grid md:grid-cols-3 grid-cols-1 justify-items-center w-full gap-5">
				{plans.map((v, i) => (
					<PlanCard
						id={v.id}
						title={v.title}
						features={v.features}
						context={v.context}
						price={v.price}
						status={v.status}
						discountPrice={v.discountPrice}
						key={i}
					/>
				))}
			</div>
		</div>
	);
};

export default PlanContainer;
