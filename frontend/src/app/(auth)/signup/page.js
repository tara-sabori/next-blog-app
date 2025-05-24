'use client'
import RHFTextField from "@/ui/RHFTextField";
import { useForm } from "react-hook-form";
import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup"
import API from "../../../services/API";
import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import Link from "next/link";

// export const metadata = {
//     title: 'ثبت نام'
// }

const schema = yup.object({
    name: yup.string().required('نام و نام‌خانوادگی الزامی است.').min(5, 'باید بیشتر از پنج حرف باشد').max(30, 'باید کمتر از 30 حرف باشد'),
    email: yup.string().email('ایمیل نامعتبر است.').required('ایمیل الزامی است.'),
    password: yup.string().required('رمز عبور الزامی است.').min(8, 'رمز عبور باید حداقل 8 کاراکتر باشد.'),
}).required()

const SignUpPage = () => {
    const { register, handleSubmit, formState: { errors, isLoading } } = useForm({
        resolver: yupResolver(schema),
        mode: 'onTouched',
    });
    const router = useRouter();
    const onSubmit = async (values) => {
        console.log(values);
        try {
            const { data: data } = await API.post('/user/signup', values);
            console.log(data?.user);
            toast.success('حساب کاربری شما با موفقیت ایجاد شد.');
            // router.push('/profile');
        } catch (error) {
            toast.error(error?.response?.data?.message)
            console.log(error);
        }
    }
    return (
        <div>
            <h1 className="text-center">ثبت نام</h1>
            <form className="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
                <RHFTextField
                    label={'نام و نام‌خانوادگی'}
                    name={'name'}
                    register={register}
                    isRequired
                    errors={errors}
                />
                <RHFTextField
                    label={'ایمیل'}
                    name={'email'}
                    dir="ltr"
                    register={register}
                    isRequired
                    errors={errors}
                />
                <RHFTextField
                    label={'رمز عبور'}
                    name={'password'}
                    type="password"
                    dir="ltr"
                    register={register}
                    isRequired
                    errors={errors}
                />
                <button type="submit" className="w-full bg-primary-900 rounded-md p-1.5 text-white">
                    تایید
                </button>
                <div className="flex items-center justify-center gap-2 text-xs">
                    <span>قبلا ثبت‌ نام کردید؟ </span>
                    <Link href={'/signin'} >ورود</Link>
                </div>
            </form>
        </div>
    );
}

export default SignUpPage;
