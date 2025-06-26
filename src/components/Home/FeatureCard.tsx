'use client';
import { Box, Paper, Typography, useMediaQuery } from '@mui/material';
import { ReactNode } from 'react';
import { customTheme } from '../Theme/theme';

const FeatureCard = ({
	title,
	caption,
	icon,
}: {
	title: string;
	caption: string;
	icon: ReactNode;
}) => {
	const isMobile = useMediaQuery(customTheme.breakpoints.down('md'));
	return (
		<Box
			component={Paper}
			className="!transition"
			sx={{
				display: 'flex',
				gap: '20px',
				flexDirection: 'column',
				width: isMobile ? '100%' : '300px',
				height: '300px',
				padding: '15px',
				borderRadius: '12px',
				cursor: 'pointer',
				':hover': {
					scale: 0.9,
				},
			}}>
			{icon}
			<Typography variant="h4">{title}</Typography>
			<Typography variant="caption">{caption}</Typography>
		</Box>
	);
};

export default FeatureCard;
