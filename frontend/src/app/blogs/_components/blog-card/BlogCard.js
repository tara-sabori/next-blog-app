import Image from "next/image";
import Link from "next/link";
import BlogInteraction from "./BlogInteraction";
const BlogCard = ({ _id, title, slug, coverImageUrl, author, readingTime, isLiked, isBookmarked,likesCount }) => {
    return (
        <div className="flex flex-col gap-4">
            {/* image cover */}
            <Link href={`/blogs/${slug}`}>
                <div className="rounded-lg relative aspect-video overflow-hidden">
                    <Image
                        fill
                        src={coverImageUrl}
                        alt={title}
                        className="object-cover object-center hover:scale-110 transition-all ease-in"
                        quality={80}
                    />
                </div>
            </Link>
            <div className="flex flex-col gap-4">
                {/* title and author info */}
                <Link href={`/blogs/${slug}`}>
                    <p className="text-sm xl:text-base">{title}</p>
                </Link>
                <div className="flex justify-between items-center text-xs xl:text-sm">
                    <div className="flex items-center gap-1">
                        <Image
                            src={author?.avatarUrl || '/images/avatar.png'}
                            height={24}
                            width={24}
                            alt={title}
                            className="rounded-full" />
                        <span>{author?.name}</span>
                    </div>
                    <span className="pt-1">{readingTime} دقیقه</span>
                </div>
                {/* intraction */}
                <BlogInteraction
                    idBlog={_id}
                    likesCount={likesCount}
                    isLiked={isLiked}
                    isBookmarked={isBookmarked}
                />
            </div>
        </div>
    );
}

export default BlogCard;
