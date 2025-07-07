'use client';
import { Switch, Typography, useColorScheme } from '@mui/material';

const ThemeSwitcher = () => {
	const { mode, setMode } = useColorScheme();
	return (
		<div className="flex items-center">
			<Switch
				checked={mode == 'dark'}
				onChange={(e) => setMode(e.target.checked ? 'dark' : 'light')}
			/>
			<Typography variant="caption">{'حالت شب'}</Typography>
		</div>
	);
};

export default ThemeSwitcher;
