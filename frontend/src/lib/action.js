'use server';

import { createCommentApi } from "@/services/commentService";
import setCookieOnReq from "@/utils/setCookieOnReq";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

// export const createComment = async (postId, parentId, formData) => { //whitout useFormSatet
export const createComment = async (prevState, { formData, postId, parentId }) => {
    console.log(formData);
    const newFormData = {
        postId,
        parentId,
        text: formData?.get('text')
    }
    console.log(newFormData);
    const cookieStore =await cookies();
    const options =await setCookieOnReq(cookieStore);
    try {
        const { message } = await createCommentApi(newFormData, options);
        console.log(message);
        revalidatePath('/blogs/[slug]');
        return { message } //when use useActionSate
    } catch (error) {
        console.log(error);
        const errorMessage = error?.response?.data?.message;
        return { error: errorMessage } //when use useActionSate
    }
}