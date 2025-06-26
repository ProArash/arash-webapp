'use client';
import { createTheme } from '@mui/material/styles';
import localFont from 'next/font/local';
import { green, red, amber, lightBlue, grey } from '@mui/material/colors';

const vazirFont = localFont({
	src: '../../assets/font/vazir/Vazir-Regular-FD.woff2',
	display: 'swap',
});

const primaryColor = '#003566';
const secondaryColor = '#ffd000';

export const customTheme = createTheme({
	direction: 'rtl',
	typography: {
		allVariants: {
			fontFamily: vazirFont.style.fontFamily,
		},
		h1: {
			fontSize: '10px',
		},
		h2: {
			fontSize: '35px',
		},
		h3: {
			fontSize: '30px',
		},
		h4: {
			fontSize: '25px',
			fontWeight: 'bolder',
		},
		h5: {
			fontSize: '20px',
			fontWeight: 'bolder',
		},
		h6: {
			fontSize: '15px',
		},
	},
	colorSchemes: {
		dark: {
			palette: {
				primary: {
					main: primaryColor,
				},
				secondary: {
					main: secondaryColor,
				},
				error: {
					main: red['500'],
				},
				warning: {
					main: amber['500'],
				},
				success: {
					main: green['500'],
				},
				info: {
					main: lightBlue['500'],
				},
				grey: {
					'500': grey['500'],
				},
				background: {
					default: '#171717',
					paper: '#020202',
				},
				text: {
					primary: grey['500'],
					secondary: grey['400'],
				},
			},
		},
		light: {
			palette: {
				primary: {
					main: primaryColor,
				},
				secondary: {
					main: secondaryColor,
				},
				error: {
					main: red['500'],
				},
				warning: {
					main: amber['500'],
				},
				success: {
					main: green['500'],
				},
				info: {
					main: lightBlue['500'],
				},
				grey: {
					'500': grey['500'],
				},
				background: {
					default: grey['50'],
				},
				text: {
					primary: primaryColor,
					secondary: grey['700'],
				},
			},
		},
	},
	components: {
		MuiButton: {
			styleOverrides: {
				root: {
					borderRadius: '16px',
					textTransform: 'none',
				},
			},
		},
	},
});
