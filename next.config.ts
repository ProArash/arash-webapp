import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	/* config options here */
	output: 'export',
	trailingSlash: true,
	images: {
		unoptimized: true,
	},
	devIndicators: false,
};



export default nextConfig;
