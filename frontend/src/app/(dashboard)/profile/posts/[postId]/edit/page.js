import { getPostByIdApi } from '@/services/postService';
import Breadcrumbs from '@/ui/BreadCrumbs';
import { notFound } from 'next/navigation';
import React from 'react';
import CreatePostForm from '../../create/_/CreatePostForm';

const EditPostPage =async ({ params }) => {
    const breadcrumbs = [
        { label: 'پست‌ها', href: '/profile/posts' },
        { label: 'ویرایش پست', href: `/profile/${params?.id}/edit`, active: true },
    ]
    console.log(params);
    const {post}=await getPostByIdApi(params?.postId);
    console.log(post);
    if(!post){
        notFound();
    }
    return (
        <div>
            <Breadcrumbs breadcrumbs={breadcrumbs} />
            <CreatePostForm post={post} />
        </div>
    );
}

export default EditPostPage;
