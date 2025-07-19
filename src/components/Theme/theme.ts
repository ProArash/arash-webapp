"use client";
import { createTheme } from "@mui/material/styles";
import localFont from "next/font/local";
import { green, red, amber, lightBlue, grey } from "@mui/material/colors";

const vazirFont = localFont({
	src: "../../assets/font/vazir/Vazir-Regular-FD.woff2",
	display: "auto",
});

// main colors
const primaryColor = "#003262";
const secondaryColor = "#FFBF00";

// dark colors
const darkTextPrimary = "#F5F5F5";
const darkBackgroundColor = "#000000";
const darkPaperColor = "#111111";

// light colors
const textPrimary = "#111111";
const backgroundColor = "#F5F5F5";
const paperColor = "#FEFEFA";

export const customTheme = createTheme({
	direction: "rtl",
	colorSchemes: {
		dark: {
			palette: {
				primary: {
					main: primaryColor,
					contrastText: "#ffffff",
				},
				secondary: {
					main: secondaryColor,
					contrastText: "#ffffff",
				},
				error: {
					main: red["500"],
					contrastText: "#ffffff",
				},
				warning: {
					main: amber["500"],
					contrastText: "#ffffff",
				},
				success: {
					main: green["500"],
					contrastText: "#ffffff",
				},
				info: {
					main: lightBlue["500"],
					contrastText: "#ffffff",
				},
				grey: {
					"500": grey["500"],
				},
				background: {
					default: darkBackgroundColor,
					paper: darkPaperColor,
				},
				text: {
					primary: darkTextPrimary,
				},
				divider: grey["700"],
			},
		},
		light: {
			palette: {
				primary: {
					main: primaryColor,
				},
				secondary: {
					main: secondaryColor,
					contrastText: "#ffffff",
				},
				error: {
					main: red["500"],
					contrastText: "#ffffff",
				},
				warning: {
					main: amber["500"],
					contrastText: "#ffffff",
				},
				success: {
					main: green["500"],
					contrastText: "#ffffff",
				},
				info: {
					main: lightBlue["500"],
					contrastText: "#ffffff",
				},
				grey: {
					"500": grey["500"],
				},
				background: {
					default: backgroundColor,
					paper: paperColor,
				},
				text: {
					primary: textPrimary,
				},
				divider: grey["700"],
			},
		},
	},
	typography: {
		allVariants: {
			fontFamily: vazirFont.style.fontFamily,
			textAlign: "justify",
		},
		h1: {
			fontSize: "10px",
		},
		h2: {
			fontSize: "35px",
		},
		h3: {
			fontSize: "30px",
		},
		h4: {
			fontSize: "25px",
			fontWeight: "bolder",
		},
		h5: {
			fontSize: "20px",
			fontWeight: "bolder",
		},
		h6: {
			fontSize: "15px",
		},
	},
	components: {
		MuiButton: {
			styleOverrides: {
				root: {
					borderRadius: "16px",
					textTransform: "none",
					height: "32px",
					padding: "20px",
					md: {
						height: "48px",
					},
				},
			},
		},
		MuiPaper: {
			styleOverrides: {
				root: {
					borderRadius: "24px",
				},
			},
		},
		MuiTableCell: {
			styleOverrides: {
				head: {
					color: "white",
				},
			},
		},
		MuiTableHead: {
			styleOverrides: {
				root: ({ theme }) => ({
					backgroundColor: theme.palette.primary.main,
					color: "white",
				}),
			},
		},
		MuiTypography: {
			styleOverrides: {
				root: {
					lineHeight: "30px",
				},
			},
		},
	},
});
