'use client'
import { useAuth } from "@/context/AuthContex";
import API from "@/services/API";
import ButtonIcon from "@/ui/ButtonIcon";
import { BookmarkIcon, BookmarkSlashIcon, ChatBubbleLeftIcon, HeartIcon } from '@heroicons/react/24/solid'
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const BlogInteraction = ({ isLiked, isBookmarked, idBlog, likesCount }) => {
    const { state: { isAuthenticated } } = useAuth();
    const router = useRouter();

    const handleLikeBlog = async () => {
        if (!isAuthenticated) {
            toast.error('وارد حساب کاربری خود شوید.');
            return
        }
        try {
            const { data: { data } } = await API.post(`/post/like/${idBlog}`);
            toast.success(data?.message);
            router.refresh();
            console.log(data?.message);
        } catch (error) {
            toast.error(error?.response?.data?.message)
            console.log(error);
        }
    }
    const handleBookmarked = async () => {
        if (!isAuthenticated) {
            toast.error('وارد حساب کاربری خود شوید.');
            return
        }
        try {
            const { data: { data } } = await API.post(`/post/bookmark/${idBlog}`);
            toast.success(data?.message);
            router.refresh();
            console.log(data?.message);
        } catch (error) {
            toast.error(error?.response?.data?.message);
            console.log(error);
        }
    }
    return (
        <div className="flex items-center gap-x-4">
            <ButtonIcon onClick={handleLikeBlog}>
                <sub>{likesCount > 99 ? '+99' : likesCount}</sub>
                <HeartIcon strokeWidth={1.5} className={`${isLiked ? 'text-red-500' : 'text-white stroke-gray-500'} size-5`} />
            </ButtonIcon>
            <ButtonIcon>
                <ChatBubbleLeftIcon strokeWidth={1.5} className="size-5 stroke-gray-500 text-white" />
            </ButtonIcon>
            <ButtonIcon onClick={handleBookmarked}>
                {
                    isBookmarked ? <BookmarkSlashIcon strokeWidth={1} className="size-5 stroke-gray-500 text-white" /> :
                        <BookmarkIcon strokeWidth={1.5} className="size-5 stroke-gray-500 text-white" />
                }

            </ButtonIcon>
        </div>
    );
}

export default BlogInteraction;
