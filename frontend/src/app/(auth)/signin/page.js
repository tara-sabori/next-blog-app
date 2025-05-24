'use client'
import RHFTextField from "@/ui/RHFTextField";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import Link from "next/link";
import API from "@/services/API";
import { useAuth } from "@/context/AuthContex";
import { useRouter } from "next/navigation";

// export const metadata = {
//     title: 'ورود'
// }
const schema = yup.object({
    email: yup.string().email('ایمیل نامعتبر است.').required('ایمیل الزامی است.'),
    password: yup.string().required('رمز عبور الزامی است.').min(8, 'رمز عبور باید حداقل 8 کاراکتر باشد.'),
}).required()

const SignInPage = () => {
    const { dispatch } = useAuth()
    const { register, handleSubmit, formState: { errors, isLoading } } = useForm({
        resolver: yupResolver(schema),
        mode: 'onTouched'
    });
    const router = useRouter();
    const onSubmit = async (values) => {
        console.log(values);
        dispatch({ type: 'loading' })
        try {
            const { data: data } = await API.post('/user/signin', values);
            console.log(data?.user);
            toast.success('با موفقیت وارد شدید.');
            dispatch({ type: 'signin', payload: data?.user })
            // router.push('/profile');
        } catch (error) {
            const errorMessage = error?.response?.data?.message;
            toast.error(errorMessage)
            dispatch({ type: 'rejected', payload: errorMessage })
            console.log(error);
        }
    }
    return (
        <div>
            <h1 className="text-center">ورود</h1>
            <form className="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
                <RHFTextField
                    label={'ایمیل'}
                    name={'email'}
                    register={register}
                    isRequired
                    dir="ltr"
                    type="email"
                    errors={errors}
                />
                <RHFTextField
                    label={'رمز عبور'}
                    name={'password'}
                    register={register}
                    isRequired
                    dir="ltr"
                    type="password"
                    errors={errors}
                />
                <button
                    disabled={isLoading}
                    type="submit" className="w-full bg-primary-900 rounded-md p-1.5 text-white disabled:bg-secondary-400">
                    ورود
                </button>
                <div className="flex items-center justify-center gap-2 text-xs">
                    <span>حساب کاربری ندارید؟</span>
                    <Link href={'/signup'} >ایجاد حساب</Link>
                </div>
            </form>
        </div>
    );
}

export default SignInPage;
