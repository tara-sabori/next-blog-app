import BlogCard from "./blog-card/BlogCard";

const MainBlogs = async ({ posts }) => {
    console.log(posts);
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {
                posts?.length < 1 ? <span>موردی یافت نشد.</span> :
                    posts?.map(post =>
                        <div
                            key={post?.id}
                            className="p-1.5 rounded-lg border-2 border-secondary-100 shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1)]">
                            <BlogCard {...post} />
                        </div>)
            }
        </div>
    );
}

export default MainBlogs;
