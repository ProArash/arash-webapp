"use client";
import { Button, TextField } from "@mui/material";
import CustomAdornment from "../../../components/CustomAdornment";
import {
	BsCheck2,
	BsPersonCircle,
	BsPhoneFill,
	BsShieldCheck,
} from "react-icons/bs";
import { useCurrentProfile } from "../../../api/auth/auth.mutation";
import { SubmitHandler, useForm } from "react-hook-form";
import { IProfileRequest, UserRole } from "../../../api/auth/auth.dto";
import { useEffect, useState } from "react";
import EditProfileSkeleton from "./_components/EditProfileSkeleton";
import z, { ZodError } from "zod";
import { IErrorObject } from "../../../utils/IErrorObject";
import { useEditCurrentProfile } from "../../../api/user/user.mutation";

const EditProfilePage = () => {
	const {
		mutate: profileMutate,
		data: profileData,
		isPending: profilePending,
		isSuccess: profileSuccess,
	} = useCurrentProfile();
	const { register, watch, handleSubmit, reset } = useForm<IProfileRequest>({
		defaultValues: {
			name: "",
		},
	});
	const { mutate: editMutate, isPending: editPending } =
		useEditCurrentProfile();
	const [error, setError] = useState<IErrorObject>({});
	const profileSchema = z.object({
		name: z.string().min(3),
	});
	const saveProfile: SubmitHandler<IProfileRequest> = (
		data: IProfileRequest,
	) => {
		console.log(data);
		try {
			profileSchema.parse(data);
			editMutate(data, {
				onSuccess: () => {
					profileMutate(undefined, {
						onSuccess: (res) => {
							reset({
								name: res.data.name,
							});
						},
					});
				},
			});
			setError({});
		} catch (error) {
			if (error instanceof ZodError) {
				if (error.errors[0].path[0]) {
					const errorObj: IErrorObject = {};
					error.errors.forEach((err) => {
						errorObj[err.path[0]] = err.message;
					});
					setError(errorObj);
				}
			}
		}
	};
	useEffect(() => {
		profileMutate(undefined, {
			onSuccess: (res) => {
				reset({
					name: res.data.name,
				});
			},
		});
	}, [profileMutate, reset]);
	if (profilePending) return <EditProfileSkeleton />;
	return (
		profileSuccess && (
			<div className="flex w-full h-full">
				<form
					onSubmit={handleSubmit(saveProfile)}
					className="flex flex-col gap-5 justify-between md:w-1/3 w-full"
				>
					<TextField
						label="نام"
						error={error.name ? true : false}
						helperText={error.name && error.name}
						slotProps={{
							input: {
								startAdornment: <CustomAdornment icon={<BsPersonCircle />} />,
								autoComplete: "off",
							},
						}}
						{...register("name")}
						defaultValue={watch("name") || ""}
					/>
					<TextField
						label="موبایل"
						slotProps={{
							input: {
								startAdornment: <CustomAdornment icon={<BsPhoneFill />} />,
							},
						}}
						disabled
						defaultValue={profileData.data.mobile}
					/>
					<TextField
						label="سطح دسترسی"
						slotProps={{
							input: {
								startAdornment: <CustomAdornment icon={<BsShieldCheck />} />,
							},
						}}
						disabled
						defaultValue={profileData.data.roles
							.map((v) => (v == UserRole.ADMIN ? "ادمین" : "کاربر"))
							.join(" , ")}
					/>
					<div className="grow" />
					<Button
						variant="contained"
						color="success"
						startIcon={<BsCheck2 />}
						fullWidth
						loading={editPending}
						type="submit"
					>
						{"ذخیره"}
					</Button>
				</form>
			</div>
		)
	);
};

export default EditProfilePage;
