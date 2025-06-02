'use client';

import { CssBaseline, ThemeProvider } from '@mui/material';
import { ReactNode } from 'react';
import { customTheme } from './theme';

const CustomThemeProvider = ({ children }: { children: ReactNode }) => {
	return (
		<ThemeProvider theme={customTheme}>
			<CssBaseline />
			{children}
		</ThemeProvider>
	);
};

export default CustomThemeProvider;
