'use client';
import { Box, Button, Paper, TextField, Typography } from '@mui/material';
import {
	BsArrowRightCircleFill,
	BsKey,
	BsPerson,
	BsTelephone,
} from 'react-icons/bs';
import CustomAdornment from '../../components/CustomAdornment';
import { useForm } from 'react-hook-form';
import { IAuthRequest } from '../../api/auth/auth.dto';
import { useCurrentProfile, useSignIn } from '../../api/auth/auth.mutation';
import { showSnackbar } from '../../components/Providers/SnackbarProvider';
import ErrorContainer from '../../components/ErrorContainer';

const SignInPage = () => {
	const { handleSubmit, register } = useForm<IAuthRequest>();
	const signIn = useSignIn();
	const currentUser = useCurrentProfile();
	const handleFormSumbit = async (data: IAuthRequest) => {
		signIn.mutate(data);
	};
	return (
		<div className="flex h-screen w-full p-5">
			<Box
				component={Paper}
				sx={{
					borderRadius: '16px',
				}}
				className="flex flex-col gap-10 md:w-1/3 w-full p-5">
				<Typography variant="h5">ورود به حساب کاربری</Typography>

				<form
					onSubmit={handleSubmit(handleFormSumbit)}
					className="flex flex-col gap-5 w-full">
					<TextField
						label={'موبایل'}
						error={signIn.isError}
						placeholder="09123456789"
						type="tel"
						{...register('username')}
						slotProps={{
							input: {
								startAdornment: (
									<CustomAdornment>
										<BsTelephone />
									</CustomAdornment>
								),
							},
						}}
					/>
					<TextField
						label={'رمز عبور'}
						placeholder="!@Aa123456789"
						error={signIn.isError}
						type="password"
						{...register('password')}
						slotProps={{
							input: {
								startAdornment: (
									<CustomAdornment>
										<BsKey />
									</CustomAdornment>
								),
							},
						}}
					/>
					<Button
						variant="contained"
						type="submit"
						loading={signIn.isPending}
						startIcon={<BsArrowRightCircleFill />}>
						<Typography>ورود/ثبت نام</Typography>
					</Button>
				</form>
				<Button
					variant="contained"
					type="button"
					onClick={async () => {
						await currentUser.mutateAsync(undefined, {
							onSuccess: (res) => {
								if (res.data)
									showSnackbar(res.data.username, 'info');
							},
						});
					}}
					startIcon={<BsPerson />}>
					<Typography>{'profile'}</Typography>
				</Button>
				{signIn.isError && <ErrorContainer error={signIn.error} />}
			</Box>
		</div>
	);
};

export default SignInPage;
