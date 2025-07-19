"use client";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import rtlPlugin from "@mui/stylis-plugin-rtl";
import { ReactNode, useEffect, useState } from "react";
import { customTheme } from "../Theme/theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { SnackbarProvider } from "./SnackbarProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { DashboardProvider } from "./DashboardProvider";

const rtlCache = createCache({
	key: "muirtl",
	stylisPlugins: [prefixer, rtlPlugin],
});

const query = new QueryClient();

const CustomAppProvider = ({ children }: { children: ReactNode }) => {
	const [mounted, setMounted] = useState<boolean>(false);

	useEffect(() => {
		setMounted(true);
	}, [mounted]);

	if (!mounted) return null;

	return (
		<AppRouterCacheProvider>
			<QueryClientProvider client={query}>
				<CacheProvider value={rtlCache}>
					<ThemeProvider theme={customTheme} defaultMode="light">
						<CssBaseline />
						<DashboardProvider>
							<SnackbarProvider>{children}</SnackbarProvider>
						</DashboardProvider>
					</ThemeProvider>
				</CacheProvider>
			</QueryClientProvider>
		</AppRouterCacheProvider>
	);
};

export default CustomAppProvider;
