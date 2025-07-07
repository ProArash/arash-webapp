'use client';
import {
	Box,
	Button,
	Drawer,
	IconButton,
	Paper,
	Toolbar,
	Typography,
	useMediaQuery,
} from '@mui/material';
import { useState } from 'react';
import AppbarItems from './AppbarItems';
import { customTheme } from '../Theme/theme';
import LogoContainer from './LogoContainer';
import { ListRounded, ShoppingCartCheckoutRounded } from '@mui/icons-material';
import InquiryFormContainer from '../Home/InquiryFormContainer';
import { usePathname } from 'next/navigation';
import ThemeSwitcher from '../Theme/ThemeSwitcher';

const MainAppbar = () => {
	const path = usePathname();
	const [open, setOpen] = useState<boolean>(false);
	const [openForm, setOpenForm] = useState<boolean>(false);
	const isMobile = useMediaQuery(customTheme.breakpoints.down('md'));

	if (path == '/auth/' || path == '/auth') return null;
	return (
		<Box
			component={Paper}
			sx={(theme) => ({
				backgroundColor: theme.palette.background.default,
				width: `100%`,
				margin: 0,
				borderRadius: '0 0 16px 16px',
				position: 'fixed',
				top: 0,
				zIndex: 50,
			})}>
			<InquiryFormContainer
				open={openForm}
				setClose={() => setOpenForm(false)}
			/>
			<Drawer
				anchor="left"
				open={open}
				onClose={() => setOpen(false)}
				sx={{
					'& .MuiPaper-root': {
						borderRadius: '0 16px 16px 0',
						minWidth: '55%',
					},
				}}>
				<AppbarItems />
			</Drawer>
			<Toolbar className="flex justify-between md:p-5 p-1">
				{isMobile && (
					<>
						<IconButton
							onClick={() => setOpen(true)}
							color="primary">
							<ListRounded />
						</IconButton>
					</>
				)}
				{!isMobile && (
					<>
						<LogoContainer />
						<AppbarItems />
					</>
				)}
				<div className="flex gap-5">
					<ThemeSwitcher />
					<Button
						variant="contained"
						color="primary"
						startIcon={<ShoppingCartCheckoutRounded />}
						onClick={() => setOpenForm(true)}>
						<Typography variant="caption">{'ثبت سفارش'}</Typography>
					</Button>
				</div>
			</Toolbar>
		</Box>
	);
};

export default MainAppbar;
