import { FaInbox, FaTelegram } from 'react-icons/fa';
import { Button } from '@mui/material';

const ContactContainer = () => {
	return (
		<div className="flex w-full justify-center">
			<div className="grid grid-cols-1 gap-5 md:w-1/3 w-full justify-items-center p-5">
				<Button
					fullWidth
					variant="contained"
					endIcon={<FaTelegram />}
					color="primary">
					Telegram
				</Button>
				<Button
					fullWidth
					variant="contained"
					endIcon={<FaInbox />}
					color="secondary">
					E-Mail
				</Button>
			</div>
		</div>
	);
};

export default ContactContainer;
