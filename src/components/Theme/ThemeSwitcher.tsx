'use client';
import { Nightlight, Sunny } from '@mui/icons-material';
import { IconButton, useColorScheme } from '@mui/material';

const ThemeSwitcher = () => {
	const { mode, setMode } = useColorScheme();
	return (
		<IconButton
			onClick={() => setMode(mode == 'dark' ? 'light' : 'dark')}
			className="md:bottom-5 bottom-2 md:left-5 left-2 !fixed z-10"
			sx={{
				width: '48px',
				height: '48px',
				minWidth: '48px',
				borderRadius: '50%',
			}}
			color="primary">
			{mode == 'dark' ? (
				<Sunny color="action" />
			) : (
				<Nightlight color="action" />
			)}
		</IconButton>
	);
};

export default ThemeSwitcher;
