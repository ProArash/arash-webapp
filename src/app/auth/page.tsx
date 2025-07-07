'use client';
import { Box, Button, Paper, TextField, Typography } from '@mui/material';
import { BsArrowRightCircleFill, BsKey, BsTelephone } from 'react-icons/bs';
import CustomAdornment from '../../components/CustomAdornment';
import { useForm } from 'react-hook-form';
import { IAuthRequest } from '../../api/auth/auth.dto';
import { useSignIn } from '../../api/auth/auth.mutation';
import ErrorContainer from '../../components/ErrorContainer';
import LogoContainer from '../../components/Appbar/LogoContainer';
import Image from 'next/image';
import img1 from '@/assets/auth/1.jpg';

const SignInPage = () => {
	const { handleSubmit, register } = useForm<IAuthRequest>();
	const signIn = useSignIn();
	const handleFormSumbit = async (data: IAuthRequest) => {
		signIn.mutate(data);
	};
	return (
		<div className="flex justify-between h-screen w-full -mt-36">
			<Box
				component={Paper}
				sx={{
					borderRadius: '0 24px 24px 0',
				}}
				className="flex flex-col md:gap-10 gap-5 md:w-1/2 w-full md:p-10 p-5">
				<div className="flex w-full justify-center">
					<LogoContainer />
				</div>
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
						placeholder="a123456789"
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
						<Typography>{'ورود / ثبت نام'}</Typography>
					</Button>
				</form>
				{signIn.isError && <ErrorContainer error={signIn.error} />}
			</Box>
			<div className="w-full h-full p-10 md:flex hidden items-center justify-center">
				<Image
					src={img1}
					alt="auth image"
					width={0}
					height={0}
					className="object-contain rounded-xl h-full w-fit"
				/>
			</div>
		</div>
	);
};

export default SignInPage;
