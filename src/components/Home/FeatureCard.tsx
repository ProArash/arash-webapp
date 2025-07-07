'use client';
import { Box, Paper, Typography } from '@mui/material';
import { ReactNode } from 'react';

const FeatureCard = ({ title, icon }: { title: string; icon: ReactNode }) => {
	return (
		<Box
			component={Paper}
			className="!transition"
			sx={{
				display: 'flex',
				gap: '20px',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
				width: '100px',
				height: '100px',
				padding: '15px',
				borderRadius: '12px',
				cursor: 'pointer',
				':hover': {
					scale: 0.95,
				},
			}}>
			{icon}
			<Typography variant="caption">{title}</Typography>
		</Box>
	);
};

export default FeatureCard;
