'use client';

import { Alert, IconButton, Snackbar, Typography } from '@mui/material';
import { createContext, ReactNode, useState } from 'react';
import { BsX } from 'react-icons/bs';

let globalSnackbar:
	| ((
			message: string,
			severity: 'error' | 'success' | 'warning' | 'info'
	  ) => void)
	| null = null;

interface SnackbarProps {
	showSnackbar: (
		message: string,
		severity: 'error' | 'success' | 'warning' | 'info'
	) => void;
}

const SnackbarContext = createContext<SnackbarProps | undefined>(undefined);

export const SnackbarProvider = ({ children }: { children: ReactNode }) => {
	const [snackbar, setSnackbar] = useState<{
		message: string;
		severity: 'error' | 'success' | 'warning' | 'info';
		open: boolean;
	}>({ message: '', severity: 'error', open: false });

	const handleClose = () => {
		setSnackbar({ ...snackbar, open: false });
	};

	const showSnackbar = (
		message: string,
		severity: 'error' | 'success' | 'warning' | 'info'
	) => {
		setSnackbar({ message, open: true, severity });
	};

	globalSnackbar = showSnackbar;

	return (
		<SnackbarContext.Provider value={{ showSnackbar }}>
			{children}
			<Snackbar
				open={snackbar.open}
				onClose={handleClose}
				autoHideDuration={3000}
				anchorOrigin={{ horizontal: 'center', vertical: 'bottom' }}>
				<Alert
					severity={snackbar.severity}
					color={snackbar.severity}
					variant="standard">
					<div className="flex justify-between items-center gap-5">
						<Typography variant="caption">
							{snackbar.message}
						</Typography>
						<IconButton
							onClick={handleClose}
							size="small"
							color={'default'}>
							<BsX />
						</IconButton>
					</div>
				</Alert>
			</Snackbar>
		</SnackbarContext.Provider>
	);
};

export const useSnackbar = () => {
	const context = createContext(SnackbarContext);
	if (!context) console.log('Snackbar context not initialized.');
	return context;
};

export const showSnackbar = (
	message: string,
	severity: 'error' | 'success' | 'warning' | 'info'
) => {
	if (globalSnackbar) globalSnackbar(message, severity);
	else console.log('Snackbar is null');
};
