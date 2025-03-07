import ProfileImage from './ProfileImage';
import myImg from '@/assets/MeContainer/me.jpeg';

const MeContainer = () => {
	return (
		<div className="flex flex-col w-full">
			<ProfileImage fullName="Arash Ghanbari" img={myImg} />
		</div>
	);
};

export default MeContainer;
