import { cookies } from "next/headers";
import { getAllUserApi } from "./usersApiService";
import { listCommentApi } from "./commentService";
import { getAllPost } from "./postService";
import setCookieOnReq from "@/utils/setCookieOnReq";

export const getAllDataDashbord = async () => {
    const cookieStore = await cookies();
    const options = setCookieOnReq(cookieStore);
    try {
        const data = await Promise.all([
            getAllUserApi(options),
            listCommentApi(options),
            getAllPost()
        ])
        const userData = data[0]?.users;
        const listComment = data[1];
        const listPost = data[2]?.posts;
        return { userData, listComment, listPost };
    } catch (error) {
        console.log(error?.response?.data?.message);
        throw new Error('خطا در بارگذاری اطلاعات')
    }
}