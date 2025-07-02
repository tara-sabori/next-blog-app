'use client'
import { deletPost } from "@/services/postService";
import Table from "@/ui/Table";
import { shortDate } from "@/utils/dateFormatter";
import { toPersianDigits } from "@/utils/numberFormatter";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import toast from "react-hot-toast";
// import { toLocalDateShort } from "@/utils/dateFormatter";
// import truncateText from "@/utils/truncateText";
// import { DeletePost, UpdatePost } from "./Buttons";

// free, premium =>

const typeStyle = {
    free: {
        label: "رایگان",
        className: "badge--success",
    },
    premium: {
        label: "پولی",
        className: "badge--secondary",
    },
};

function PostRow({ index, post }) {
    const { _id, title, category, author, createdAt, type } = post;
    const deleteHandler = async () => {
        try {
            const res = await deletPost(_id);
        } catch (error) {
            toast.error('مشکلی رخ داده است.')
            console.log(error);
        }
    }
    return (
        <Table.Row>
            <td>{toPersianDigits(index + 1)}</td>
            <td>{title?.length > 30 ? title.slice(0, 30) + '...' : title}</td>
            <td>{category?.title}</td>
            <td>{author?.name}</td>
            <td>{shortDate(createdAt)}</td>
            <td>
                <span className={`badge ${typeStyle[type].className}`}>
                    {typeStyle[type].label}
                </span>
            </td>
            <td>
                <div className="flex items-center gap-x-3">
                    <Link href={`/profile/posts/${_id}/edit`}>
                        <PencilIcon className="w-5 h-5" />
                    </Link>
                    <button onClick={deleteHandler}>
                        <TrashIcon className="w-5 h-5" />
                    </button>
                </div>
            </td>
        </Table.Row>
    );
}
export default PostRow;

