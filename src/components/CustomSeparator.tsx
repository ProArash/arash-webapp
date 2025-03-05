const CustomSeparator = ({ title, num }: { title: string; num: number }) => {
	return (
		<div className="flex w-full justify-between items-center gap-5 p-5">
			<span className="text-xl font-bold">{title}</span>
			<div className="border-b-2 border-dotted w-full" />
			<span className="text-xl font-bold">{num < 10 ? `0${num}` : num}</span>
		</div>
	);
};

export default CustomSeparator;
