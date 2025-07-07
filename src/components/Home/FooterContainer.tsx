'use client';
import { Box, IconButton, Paper, Typography } from '@mui/material';
import React from 'react';
import MainTitle from './MainTitle';
import {
	Instagram,
	LinkRounded,
	Telegram,
	VerifiedUser,
	X,
} from '@mui/icons-material';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const FooterContainer = () => {
	const path = usePathname();
		if (path == '/auth/' || path == '/auth') return null;
	return (
		<Box
			component={Paper}
			sx={{
				borderRadius: '12px 12px 0 0',
			}}
			className="grid md:grid-cols-3 grid-cols-1 w-full md:justify-items-center justify-items-start gap-5 p-5">
			<div className="flex flex-col gap-5 w-full">
				<MainTitle />
				<Typography variant="body2" className="text-justify">
					{
						'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطر آنچنان که لازم است.'
					}
				</Typography>
				<div className="flex gap-5 md:justify-start justify-center">
					<IconButton color="info">
						<Telegram color="info" />
					</IconButton>
					<IconButton color="default">
						<X color="inherit" />
					</IconButton>
					<IconButton color="error">
						<Instagram color="error" />
					</IconButton>
				</div>
			</div>
			<div className="flex flex-col gap-5">
				<Typography
					variant="body1"
					color="info"
					className="flex gap-3 items-center">
					<LinkRounded />
					{'دسترسی سریع'}
				</Typography>

				<Typography
					href={'#'}
					component={Link}
					variant="body2"
					color="textSecondary">
					{'ثبت سفارش'}
				</Typography>

				<Typography
					href={'#'}
					component={Link}
					variant="body2"
					color="textSecondary">
					{'ارتباط با من'}
				</Typography>

				<Typography
					href={'#'}
					component={Link}
					variant="body2"
					color="textSecondary">
					{'پروژه ها'}
				</Typography>
			</div>
			<div className="flex flex-col gap-5">
				<Typography
					variant="body1"
					color="info"
					className="flex gap-3 items-center">
					<VerifiedUser />
					{'مجوزها'}
				</Typography>
				<Typography
					href={'#'}
					variant="body2"
					color="textSecondary"
					component={Link}>
					{'نماد الکترونیک'}
				</Typography>
			</div>
		</Box>
	);
};

export default FooterContainer;
