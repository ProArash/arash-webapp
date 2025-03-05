import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';

type Props = {
	img: StaticImport | string;
	fullName: string;
};

const ProfileImage = ({ img, fullName }: Props) => {
	return (
		<div className="flex flex-col gap-5 w-full justify-center p-5 rounded-full items-center">
			<Image
				src={img}
				alt="background image"
				width={200}
				height={200}
				className="object-contain rounded-full shadow-3xl shadow-primary"
			/>
			<h3 className="font-bold">{fullName}</h3>
		</div>
	);
};

export default ProfileImage;
