'use client';
import { createTheme } from '@mui/material/styles';
import localFont from 'next/font/local';
import { green, red, amber, lightBlue, grey } from '@mui/material/colors';

const vazirFont = localFont({
	src: '../../assets/font/vazir/Vazir-Regular-FD.woff2',
	display: 'auto',
});

// main colors
const primaryColor = '#003262';
const secondaryColor = '#FFBF00';

// dark colors
const darkTextPrimary = '#F5F5F5';
const darkBackgroundColor = '#111111';
const darkPaperColor = '#000000';

// light colors
const textPrimary = '#111111';
const backgroundColor = '#F5F5F5';
const paperColor = '#FEFEFA';

export const customTheme = createTheme({
	direction: 'rtl',
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
					default: darkBackgroundColor,
					paper: darkPaperColor,
				},
				text: {
					primary: darkTextPrimary,
				},
				divider: grey['700'],
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
					default: backgroundColor,
					paper: paperColor,
				},
				text: {
					primary: textPrimary,
				},
				divider: grey['700'],
			},
		},
	},
	typography: {
		allVariants: {
			fontFamily: vazirFont.style.fontFamily,
			textAlign: 'justify',
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
	components: {
		MuiButton: {
			styleOverrides: {
				root: {
					borderRadius: '24px',
					textTransform: 'none',
					height: '32px',
					padding: '20px',
					md: {
						height: '48px',
					},
				},
			},
		},
		MuiPaper: {
			styleOverrides: {
				root: {
					borderRadius: '24px',
				},
			},
		},
	},
});
