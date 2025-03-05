'use client';
import { FaCode, FaHome, FaInfo, FaList, FaMobile } from 'react-icons/fa';
import LogoItem from './LogoItem';
import SidebarItem from './SidebarItem';
import { useState } from 'react';

const SidebarContainer = () => {
	const [selected, setSelected] = useState<string | undefined>(undefined);
	const handleSelectedItem = (url: string) => {
		setSelected(url);
	};
	return (
		<div className="flex flex-col gap-2 w-[70px] items-center h-full">
			<LogoItem />
			<div className="flex flex-col p-5 gap-5 bg-secondary rounded-md w-full items-center h-full border border-border">
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
			</div>
		</div>
	);
};

export default SidebarContainer;
