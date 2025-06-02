'use client';
import { createTheme } from '@mui/material/styles';

export const customTheme = createTheme({
	colorSchemes: {
		dark: {
			palette: {
				primary: {
					main: '#003566',
					// main: '#FFCCD5',
				},
				secondary: {
					main: '#ffd000',
					// main: '#ebe0ff',
				},
				error: {
					main: '#c1121f',
				},
				warning: {
					main: '#fb8500',
				},
			},
		},
		light: {
			palette: {
				primary: {
					main: '#003566',
					// main: '#FFCCD5',
				},
				secondary: {
					main: '#ffd000',
					// main: '#ebe0ff',
				},
				error: {
					main: '#c1121f',
				},
				warning: {
					main: '#fb8500',
				},
			},
		},
	},
	components: {
		MuiButton: {
			styleOverrides: {
				root: {
					borderRadius: '10px',
					textTransform: 'none',
				},
			},
		},
	},
});
