import setCookieOnReq from "@/utils/setCookieOnReq";
import { cookies } from "next/headers";
import MainBlogs from "@/app/blogs/_components/MainBlogs";
import queryString from "query-string";
// import { Suspense } from "react";
// import LoadingBlog from "../loading";

// export const experimental_ppr=true; //patial pre-rendering

const BlogPage = async ({searchParams}) => {
    const queries=queryString.stringify(searchParams);
    const cookieStore = cookies();
    const options = setCookieOnReq(cookieStore);
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/post/list?${queries}`, options);
    const { data: { posts } } = await res.json();
    return (
        <div className="flex flex-col gap-4">
            <h3>لیست پست‌ها</h3>
            {/* <Suspense fallback={<LoadingBlog />}> */}
                <MainBlogs posts={posts} />
            {/* </Suspense> */}
        </div>
    );
}

export default BlogPage;
