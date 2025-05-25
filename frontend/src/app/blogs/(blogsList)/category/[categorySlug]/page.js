import setCookieOnReq from "@/utils/setCookieOnReq";
import { cookies } from "next/headers";
import MainBlogs from "@/app/blogs/_components/MainBlogs";
import queryString from "query-string";
// import LoadingBlog from "@/app/blogs/loading";
// import { Suspense } from "react";

const CategoryPage = async ({ params,searchParams }) => {
    const { categorySlug } = params;
    const queries = queryString.stringify(searchParams)+'&'+`categorySlug=${categorySlug}`;
    const cookieStore = cookies();
    const options = setCookieOnReq(cookieStore);
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/post/list/?${queries}`
        , options);
    const { data: { posts } } = await res.json();
    console.log(posts);
    return (
        <div className="flex flex-col gap-4">
            <h3>لیست پست‌ها</h3>
            <MainBlogs posts={posts} />
        </div>
    );
}

export default CategoryPage;
