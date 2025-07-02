import React, { Suspense } from 'react';
import PostsTable from './_/components/PostsTable';
import Search from '@/ui/Search';
import Link from 'next/link';
import { PlusIcon } from '@heroicons/react/24/outline';
import queryString from 'query-string';
import Pagination from '@/ui/Pagination';
import { getAllPost } from '@/services/postService';

const PostsPage = async ({ searchParams }) => {
    const query = queryString?.stringify(searchParams);
    const { totalPages } = await getAllPost(query);
    return (
        <div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 text-secondary-700 mb-12 items-center'>
                <h1 className='font-bold text-xl'>لیست پست‌ها</h1>
                <Search />
                <Link
                    href="/profile/posts/create"
                    className="justify-self-end flex gap-x-4 py-3 items-center rounded-lg bg-primary-900 px-4 text-sm font-medium text-secondary-0 transition-colors hover:bg-primary-700"
                >
                    <span className="hidden md:block">ایجاد پست</span>{" "}
                    <PlusIcon className="w-5" />
                </Link>
            </div>
            <Suspense fallback={<p>در حال بارگذاری اطلاعات...</p>} key={[query, totalPages]}>
                <PostsTable query={query} />
            </Suspense>
            <div className="mt-5 flex w-full justify-center">
                <Pagination totalPages={totalPages} />
            </div>
        </div>
    );
}

export default PostsPage;

