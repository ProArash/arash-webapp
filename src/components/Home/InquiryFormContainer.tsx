'use client';

import {
	CancelRounded,
	DescriptionRounded,
	PersonRounded,
	PhoneAndroidRounded,
	SaveRounded,
} from '@mui/icons-material';
import { Button, Dialog, Paper, TextField, Typography } from '@mui/material';
import CustomAdornment from '../CustomAdornment';

const InquiryFormContainer = ({
	open,
	setClose,
}: {
	open: boolean;
	setClose: () => void;
}) => {
	return (
		<Dialog open={open} onClose={setClose} maxWidth={'md'}>
			<Paper
				component={'form'}
				className="flex flex-col gap-5 p-5 md:w-[700px] w-full">
				<Typography>
					{'درخواست شما در کمتر از 24 ساعت پاسخ داده میشه.'}
				</Typography>
				<TextField
					label={'نام کامل'}
					placeholder="آریا کشاورز"
					slotProps={{
						input: {
							startAdornment: (
								<CustomAdornment>
									<PersonRounded />
								</CustomAdornment>
							),
						},
					}}
				/>
				<TextField
					label={'موبایل'}
					placeholder="09123456789"
					slotProps={{
						input: {
							startAdornment: (
								<CustomAdornment>
									<PhoneAndroidRounded />
								</CustomAdornment>
							),
						},
					}}
				/>
				<TextField
					label={'شرح پروژه'}
					placeholder="پروژه فروشگاهی با قابلیت ..."
					multiline
					slotProps={{
						input: {
							startAdornment: (
								<CustomAdornment>
									<DescriptionRounded />
								</CustomAdornment>
							),
						},
					}}
				/>
				<div className="flex md:flex-row flex-col gap-5 w-full">
					<Button
						variant="contained"
						color="success"
						fullWidth
						type="submit"
						startIcon={<SaveRounded />}>
						{'ثبت درخواست'}
					</Button>
					<Button
						variant="outlined"
						color="error"
						fullWidth
						type="button"
						startIcon={<CancelRounded />}
						onClick={setClose}>
						{'لفو'}
					</Button>
				</div>
			</Paper>
		</Dialog>
	);
};

export default InquiryFormContainer;
