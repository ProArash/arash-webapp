import { FaInbox, FaTelegram } from 'react-icons/fa';
import ContactCard from './ContactCard';

const ContactContainer = () => {
	return (
		<div className="flex w-full justify-center">
			<div className="grid grid-cols-1 gap-5 md:w-1/3 w-full justify-items-center">
				<ContactCard
					className="bg-blue-500"
					title="Telegram"
					icon={<FaTelegram />}
					value="https://t.me/ProArash"
				/>
				<ContactCard
					className="bg-red-500"
					title="E-Mail"
					icon={<FaInbox />}
					value="mailto:ghanbariarash1999@gmail.com"
				/>
			</div>
		</div>
	);
};

export default ContactContainer;
