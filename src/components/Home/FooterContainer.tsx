"use client";
import { Box, IconButton, Paper, Typography } from "@mui/material";
import React from "react";
import MainTitle from "./MainTitle";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import {
	BsInstagram,
	BsList,
	BsListCheck,
	BsShieldCheck,
	BsTelegram,
	BsTwitterX,
} from "react-icons/bs";

const FooterContainer = () => {
	const path = usePathname();

	if (
		path == "/auth/" ||
		path == "/auth" ||
		path == "/profile" ||
		path == "/profile/"
	)
		return null;
	return (
		<Box
			component={Paper}
			sx={{
				borderRadius: "12px 12px 0 0",
			}}
			className="grid md:grid-cols-4 grid-cols-1 w-full md:justify-items-center justify-items-start gap-5 p-5 mt-10"
		>
			<div className="flex flex-col gap-5 w-full">
				<MainTitle />
				<Typography variant="body2" className="text-justify">
					{
						"با افتخار، متخصص در توسعه وب‌اپلیکیشن‌های پیشرفته و راهکارهای نوآورانه تحت وب برای کسب‌وکار شما."
					}
				</Typography>
				<div className="flex gap-5 md:justify-start justify-center">
					<IconButton color="info">
						<BsTelegram color="info" />
					</IconButton>
					<IconButton color="default">
						<BsTwitterX color="inherit" />
					</IconButton>
					<IconButton color="error">
						<BsInstagram color="error" />
					</IconButton>
				</div>
			</div>
			<div className="flex flex-col gap-5">
				<Typography
					variant="body1"
					color="info"
					className="flex gap-3 items-center"
				>
					<BsListCheck />
					{"راه های ارتباطی"}
				</Typography>

				<div className="flex gap-3 items-center">
					<Typography variant="body2" color="textSecondary">
						{"موبایل:"}
					</Typography>
					<Typography variant="body2" color="textSecondary">
						{"09392414124"}
					</Typography>
				</div>
				<div className="flex gap-3 items-center">
					<Typography variant="body2" color="textSecondary">
						{"ایمیل:"}
					</Typography>
					<Typography variant="body2" color="textSecondary">
						{"ghanbariarash1999@gmail.com"}
					</Typography>
				</div>
				<div className="flex gap-3 items-center">
					<Typography
						variant="body2"
						color="textSecondary"
						component={Link}
						href={"https://t.me/ProArash"}
					>
						{"تلگرام:"}
					</Typography>
					<Typography
						variant="body2"
						color="textSecondary"
						component={Link}
						href={"https://t.me/ProArash"}
					>
						{"https://t.me/ProArash"}
					</Typography>
				</div>
			</div>
			<div className="flex flex-col gap-5">
				<Typography
					variant="body1"
					color="info"
					className="flex gap-3 items-center"
				>
					<BsList />
					{"دسترسی سریع"}
				</Typography>

				<Typography
					href={"#"}
					component={Link}
					variant="body2"
					color="textSecondary"
				>
					{"ثبت سفارش"}
				</Typography>

				<Typography
					href={"#"}
					component={Link}
					variant="body2"
					color="textSecondary"
				>
					{"ارتباط با من"}
				</Typography>

				<Typography
					href={"#"}
					component={Link}
					variant="body2"
					color="textSecondary"
				>
					{"پروژه ها"}
				</Typography>
			</div>
			<div className="flex flex-col gap-5">
				<Typography
					variant="body1"
					color="info"
					className="flex gap-3 items-center"
				>
					<BsShieldCheck />
					{"نماد اعتماد"}
				</Typography>
				<Link
					referrerPolicy="origin"
					target="_blank"
					href="https://trustseal.enamad.ir/?id=624183&Code=pH7qwSfPTUyW3TF7yr2mLzlzpRe0kFHo"
				>
					<Image
						referrerPolicy="origin"
						src="https://trustseal.enamad.ir/logo.aspx?id=624183&Code=pH7qwSfPTUyW3TF7yr2mLzlzpRe0kFHo"
						alt="اینماد"
						width={120}
						height={120}
						className="cursor-pointer object-contain"
					/>
				</Link>
			</div>
		</Box>
	);
};

export default FooterContainer;
