"use client";
import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import CustomAdornment from "../../components/CustomAdornment";
import { useForm } from "react-hook-form";
import { IAuthRequest } from "../../api/auth/auth.dto";
import { useSignIn } from "../../api/auth/auth.mutation";
import LogoContainer from "../../components/Appbar/LogoContainer";
import Image from "next/image";
import img1 from "@/assets/auth/bg.svg";
import { useRouter } from "next/navigation";
import { showSnackbar } from "../../components/Providers/SnackbarProvider";
import { AppRoutes } from "../../utils/AppRoutes";
import { BsArrowRightCircle, BsKey, BsPhone } from "react-icons/bs";

const SignInPage = () => {
	const { handleSubmit, register } = useForm<IAuthRequest>();
	const signIn = useSignIn();
	const router = useRouter();
	const handleFormSumbit = async (data: IAuthRequest) => {
		signIn.mutate(data, {
			onSuccess: (res) => {
				showSnackbar(res.message, "success");
				router.replace(AppRoutes.home);
			},
			onError:(err)=>{
				showSnackbar(err.response.data.message,'error')
			}
		});
	};
	return (
		<div className="flex justify-between h-screen w-full">
			<Box
				component={Paper}
				sx={{
					borderRadius: "0 24px 24px 0",
				}}
				className="flex flex-col md:gap-10 gap-5 md:w-1/2 w-full md:p-10 p-5"
			>
				<div className="flex w-full">
					<LogoContainer />
				</div>
				<Typography variant="h5">ورود به حساب کاربری</Typography>

				<form
					onSubmit={handleSubmit(handleFormSumbit)}
					className="flex flex-col gap-5 w-full"
				>
					<TextField
						dir="ltr"
						error={signIn.isError}
						placeholder="09123456789"
						type="tel"
						{...register("mobile")}
						slotProps={{
							input: {
								startAdornment: <CustomAdornment icon={<BsPhone />} />,
							},
						}}
					/>
					<TextField
						dir="ltr"
						placeholder="********"
						error={signIn.isError}
						type="password"
						{...register("password")}
						slotProps={{
							input: {
								startAdornment: <CustomAdornment icon={<BsKey />} />,
							},
						}}
					/>
					<Button
						variant="contained"
						type="submit"
						loading={signIn.isPending}
						startIcon={<BsArrowRightCircle />}
					>
						<Typography>{"ورود / ثبت نام"}</Typography>
					</Button>
				</form>
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
