import React from 'react';
import SectionTitle from './SectionTitle';
import PlanItem, { PlanItemProps } from './PlanItem';

const PlanContainer = () => {
	const plans: PlanItemProps[] = [
		{
			title: 'پلن برنزی',
			period: 'هاست یکساله',
			price: 5000000,
			features: [
				{
					title: 'هاست مخصوص NodeJS',
				},
				{
					title: 'راه اندازی رایگان',
				},
				{
					title: 'پشتیبانی 1 ماهه',
				},
				{
					title: 'SSL رایگان',
				},
				{
					title: 'پهنای باند نامحدود',
				},
				{
					title: 'تحویل فوری',
				},
			],
		},
		{
			title: 'پلن نقره ای',
			period: 'هاست یکساله',
			price: 10000000,
			features: [
				{
					title: 'هاست مخصوص NodeJS',
				},
				{
					title: 'راه اندازی رایگان',
				},
				{
					title: 'پشتیبانی 3 ماهه',
				},
				{
					title: 'SSL رایگان',
				},
				{
					title: 'پهنای باند نامحدود',
				},
				{
					title: 'تحویل فوری',
				},
			],
		},
		{
			title: 'پلن طلایی',
			period: 'هاست یکساله',
			price: 15000000,
			features: [
				{
					title: 'هاست مخصوص NodeJS',
				},
				{
					title: 'راه اندازی رایگان',
				},
				{
					title: 'پشتیبانی 6 ماهه',
				},
				{
					title: 'SSL رایگان',
				},
				{
					title: 'پهنای باند نامحدود',
				},
				{
					title: 'تحویل فوری',
				},
				{
					title: 'به همراه سورس کد',
				},
			],
		},
		{
			title: 'پلن الماس',
			period: 'هاست یکساله',
			price: 20000000,
			features: [
				{
					title: 'هاست مخصوص NodeJS',
				},
				{
					title: 'راه اندازی رایگان',
				},
				{
					title: 'پشتیبانی 6 ماهه',
				},
				{
					title: 'SSL رایگان',
				},
				{
					title: 'پهنای باند نامحدود',
				},
				{
					title: 'تحویل فوری',
				},
				{
					title: 'به همراه سورس کد',
				},
				{
					title: 'فیچر یا ماژول اضافه',
				},
			],
		},
	];
	return (
		<div id='plans' className="flex flex-col gap-5">
			<SectionTitle title={'پلن های طراحی'} />
			<div className="grid md:grid-cols-3 grid-cols-1 justify-items-center w-full gap-5">
				{plans.map((v, i) => (
					<PlanItem
						title={v.title}
						features={v.features}
						period={v.period}
						price={v.price}
						key={i}
					/>
				))}
			</div>
		</div>
	);
};

export default PlanContainer;
