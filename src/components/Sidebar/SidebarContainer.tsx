'use client';
import { FaCode, FaHome, FaInfo, FaList, FaMobile } from 'react-icons/fa';
import LogoItem from './LogoItem';
import SidebarItem from './SidebarItem';
import { useState } from 'react';
import { Box, Paper } from '@mui/material';
import ThemeSwitch from '../ThemeSwitch';

const SidebarContainer = () => {
	const [selected, setSelected] = useState<string | undefined>(undefined);
	const handleSelectedItem = (url: string) => {
		setSelected(url);
	};
	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				gap: '10px',
				width: '70px',
				alignItems: 'center',
				height: '100%',
			}}>
			<LogoItem />
			<Box
				component={Paper}
				sx={{
					borderRadius: '20px',
				}}
				className="flex flex-col p-5 gap-5 rounded-md w-full items-center h-full">
				<SidebarItem
					onClick={() => handleSelectedItem('#1')}
					selected={selected == '#1' ? true : false}
					icon={<FaHome />}
					url="#"
				/>
				<SidebarItem
					onClick={() => handleSelectedItem('#2')}
					selected={selected == '#2' ? true : false}
					icon={<FaList />}
					url="#"
				/>
				<SidebarItem
					onClick={() => handleSelectedItem('#3')}
					selected={selected == '#3' ? true : false}
					icon={<FaInfo />}
					url="#"
				/>
				<SidebarItem
					onClick={() => handleSelectedItem('#4')}
					selected={selected == '#4' ? true : false}
					icon={<FaCode />}
					url="#"
				/>
				<SidebarItem
					onClick={() => handleSelectedItem('#5')}
					selected={selected == '#5' ? true : false}
					icon={<FaMobile />}
					url="#"
				/>
				<div className="grow" />
				<ThemeSwitch />
			</Box>
		</Box>
	);
};

export default SidebarContainer;
