'use client';
import {
	Box,
	Button,
	Drawer,
	IconButton,
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

const MainAppbar = () => {
	const path = usePathname();
	const [open, setOpen] = useState<boolean>(false);
	const [openForm, setOpenForm] = useState<boolean>(false);
	const isMobile = useMediaQuery(customTheme.breakpoints.down('md'));
	if (path == '/auth/' || path == '/auth') return null;
	return (
		<Box
			color="primary"
			sx={{
				width: `calc(100% - ${isMobile ? '1px' : '20px'})`,
				margin: isMobile ? '0' : '10px',
				borderRadius: isMobile ? '0 0 16px 16px' : '16px',
				top: isMobile ? '0' : '10px',
				position: 'fixed',
				zIndex: 50,
				backdropFilter: 'blur(30px)',
				boxShadow: `0px 0px 10px rgba(0, 0, 0, .5)`,
			}}>
			<InquiryFormContainer
				open={openForm}
				setClose={() => setOpenForm(false)}
			/>
			<Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
				<AppbarItems />
			</Drawer>
			<Toolbar className="flex justify-between md:p-5 p-1">
				{isMobile && (
					<>
						<IconButton onClick={() => setOpen(true)}>
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
					<Button
						variant="contained"
						color="primary"
						startIcon={<ShoppingCartCheckoutRounded />}
						onClick={() => setOpenForm(true)}>
						<Typography variant="caption">
							{'سفارش پروژه'}
						</Typography>
					</Button>
				</div>
			</Toolbar>
		</Box>
	);
};

export default MainAppbar;
