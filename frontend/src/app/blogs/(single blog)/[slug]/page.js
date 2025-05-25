import PostComment from "@/app/blogs/_components/comments/PostComment";
import RelatedPost from "@/app/blogs/_components/related-post/RelatedPost";
import Image from "next/image";
import { notFound } from "next/navigation";

// for static rendering
// export const dynamicParams=false;
// export async function generateStaticParams() {
//     const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/post/list`);
//     const { data: { posts } } = await res.json();
//     // const slugs = posts?.map(post => ({ slug: post?.slug }))    برای کل پستها استاتیک باشه
//     const slugs = posts?.slice(0, 3)?.map(post => ({ slug: post?.slug }))   // برای تعداد مشخصی پستها استاتیک باشه
//     return slugs
// }

// export async function generateMetadata({ params }) {
//     const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/post/slug/${params.slug}`);
//     const { data } = await res.json();
//     const { post } = data || {}
//     return {
//         title: `پست ${post?.title}`
//     }
// }
async function SingleBlogPage({ params }) {
    const slug = params.slug;
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/post/slug/${slug}`);
    const { data } = await res.json();
    const { post } = data || {}
    console.log('details', post);
    if (!post) notFound();
    return (
        <div className="text-secondary-600 max-w-screen-md mx-auto">

            <h1 className="text-secondary-700 text-2xl font-bold mb-8">
                {post.title}
            </h1>
            <p className="mb-4">{post.briefText}</p>
            <p className="mb-8">{post.text}</p>
            <div className="relative aspect-video overflow-hidden rounded-lg mb-10">
                <Image
                    className="object-cover object-center hover:scale-110 transition-all ease-out duration-300"
                    fill
                    src={post.coverImageUrl}
                    alt={post.title}
                />
            </div>
            {post.related.length > 0 && <RelatedPost posts={post.related} />}
            <PostComment comments={post.comments} id={post._id} />
        </div>
    );
}

export default SingleBlogPage;
