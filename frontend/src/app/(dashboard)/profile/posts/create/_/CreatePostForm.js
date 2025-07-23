'use client'
import RHFTextField from '@/ui/RHFTextField';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import React, { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import RHFSelect from '@/ui/RHFSelect';
import { getGategoryList } from '@/services/categoryServices';
import Image from 'next/image';
import { XMarkIcon } from '@heroicons/react/24/outline';
import FileInput from '@/ui/FileInput';
import toast from 'react-hot-toast';
import { createPostApi } from '@/services/postService';
import { useRouter } from 'next/navigation';

const schema = yup
    .object({
        title: yup
            .string()
            .min(5, "حداقل ۵ کاراکتر را وارد کنید")
            .required("عنوان ضروری است"),
        briefText: yup
            .string()
            .min(5, "حداقل ۱۰ کاراکتر را وارد کنید")
            .required("توضیحات ضروری است"),
        text: yup
            .string()
            .min(5, "حداقل ۱۰ کاراکتر را وارد کنید")
            .required("توضیحات ضروری است"),
        slug: yup.string().required("اسلاگ ضروری است"),
        category: yup.string().required("دسته بندی ضروری است"),
        readingTime: yup
            .number()
            .positive()
            .integer()
            .required("زمان مطالعه ضروری است")
            .typeError("یک عدد را وارد کنید"),
    })
    .required();

const CreatePostForm = ({ post }) => {
    const {
        title,
        text,
        slug,
        briefText,
        readingTime,
        category,
        coverImage,
        coverImageUrl: prevCoverImage
    } = post;
    let editPostValue = {};
    if (post?._id) {
        editPostValue = {
            title,
            text,
            slug,
            briefText,
            readingTime,
            category: category?._id,
            coverImage,
        }
    }
    const { register, formState: { errors }, handleSubmit, reset, control, setValue } = useForm(
        {
            mode: 'onTouched',
            resolver: yupResolver(schema),
            defaultValues: editPostValue
        }
    );
    const [categories, setCategories] = useState([]);
    const [loadingCat,setLoadingCat]=useState(true);
    const router = useRouter();

    useEffect(() => {
        const getData = async () => {
            try {
                const { categories } = await getGategoryList();
                setCategories(categories)
                console.log(categories);
            } catch (error) {
                setCategories([])
                console.log(error);
            }finally{
                setLoadingCat(false);
            }
        }
        getData();
    }, [])
    const [coverImageUrl, setCoverImageUrl] = useState(prevCoverImage || null);

    const onSubmit = async (data) => {
        const formData = new FormData();

        for (const key in data) {
            formData.append(key, data[key]);
        }

        try {
            const data = await createPostApi(formData);
            toast.success('باموفقیت ایجاد شد.')
            router.push('/profile/posts')
        } catch (error) {
            console.log(error);
            toast.error('مشکلی رخ داده است.')
        }
    }

    return (
        <form className='form' onSubmit={handleSubmit(onSubmit)}>
            <RHFTextField
                name={'title'}
                label={'عنوان'}
                errors={errors}
                register={register}
                isRequired
            />
            <RHFTextField
                name="briefText"
                label="متن کوتاه"
                errors={errors}
                register={register}
                isRequired
            />
            <RHFTextField
                name="text"
                label="متن"
                errors={errors}
                register={register}
                isRequired
            />
            <RHFTextField
                name="slug"
                label="اسلاگ"
                errors={errors}
                register={register}
                isRequired
            />
            <RHFTextField
                type='number'
                name="readingTime"
                label="زمان مطالعه"
                errors={errors}
                register={register}
                isRequired
            />
            {loadingCat?<span>در حال بارگذاری</span>:<RHFSelect
                name="category"
                label="دسته بندی"
                errors={errors}
                register={register}
                isRequired
                options={categories}
            />}
            <Controller
                name="coverImage"
                control={control}
                rules={{ required: "کاور پست الزامی است" }}
                render={({ field: { value, onChange, ...rest } }) => {
                    return (
                        <FileInput
                            label="انتخاب کاور پست"
                            name="coverImage"
                            isRequired
                            errors={errors}
                            {...rest}
                            value={value?.fileName}
                            onChange={(event) => {
                                const file = event.target.files[0];
                                console.log(file);
                                onChange(file);
                                setCoverImageUrl(URL.createObjectURL(file));
                                // event.target.value = null;
                            }}
                        />
                    );
                }}
            />
            {
                coverImageUrl && <div className='relative'>
                    <Image
                        width={250}
                        height={250}
                        alt='cover-image'
                        src={coverImageUrl}
                        className='object-cover object-center'
                    />
                    <button
                        onClick={() => {
                            setCoverImageUrl(null);
                            setValue('coverImage', null);
                        }}
                        className='absolute left-0 top-0'>
                        <XMarkIcon className='w-6 h-6' />
                    </button>
                </div>
            }
            <button type='submit' className='bg-primary-900 text-secondary-100 p-1.5 rounded-lg'>
                تایید
            </button>
        </form>
    );
}

export default CreatePostForm;
