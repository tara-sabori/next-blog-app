'use client'
import { createComment } from "@/lib/action";
import TextArea from "@/ui/TextArea";
import { useActionState, useEffect, useState } from "react";
import { useFormStatus } from "react-dom";
import toast from "react-hot-toast";

const CommentForm = ({ postId, parent, onClose }) => {
    const { pending } = useFormStatus();
    const [text, setText] = useState('');
    const parentId = parent ? parent?._id : null;
    const initialState = {
        error: '',
        message: ''
    }
    const [state, formAction, isPending] = useActionState(createComment, initialState)
    useEffect(() => {
        if (state?.message) {
            toast.success(state?.message);
            onClose();
        }
        if (state?.error) {
            toast.error(state?.error)
        }
    }, [state])
    return (
        <div>
            <div className="flex justify-center mt-4">
                <div className="max-w-md  w-full">
                    <form
                        className="space-y-7"
                        action={async (formData) => {
                            await formAction({ formData, postId, parentId });
                        }}
                    // action={createComment.bind(null, postId, parentId)} //whitout useActionState
                    >
                        <TextArea
                            name="text"
                            label={'ثبت نظر'}
                            value={text}
                            isRequired
                            onChange={(e) => setText(e.target.value)}
                        />
                        <button
                            disabled={isPending}
                            className="text-center p-1.5 rounded-lg bg-primary-800 text-secondary-50 min-w-[100px] w-fit relative"
                        >
                            {isPending ? <span>منتظر بمانید...</span> : <span>تایید</span>}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default CommentForm;
