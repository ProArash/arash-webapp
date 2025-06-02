'use client';
import { IconButton, useColorScheme } from '@mui/material';
import { FaMoon, FaSun } from 'react-icons/fa';

const ThemeSwitch = () => {
	const { mode, setMode } = useColorScheme();
	return (
		<IconButton onClick={() => setMode(mode == 'dark' ? 'light' : 'dark')}>
			{mode == 'dark' ? <FaSun /> : <FaMoon />}
		</IconButton>
	);
};

export default ThemeSwitch;
