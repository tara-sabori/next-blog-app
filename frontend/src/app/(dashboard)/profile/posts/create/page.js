import Breadcrumbs from '@/ui/BreadCrumbs';
import React from 'react';
import CreatePostForm from './_/CreatePostForm';

const CreatePostPage = () => {
    const breadcrumbs = [
        { label: 'پست‌ها', href: '/profile/posts' },
        { label: 'ایجاد پست', href: '/profile/posts/create', active: true },
    ]
    return (
        <div>
            <Breadcrumbs breadcrumbs={breadcrumbs} />
            <CreatePostForm />
        </div>
    );
}

export default CreatePostPage;
