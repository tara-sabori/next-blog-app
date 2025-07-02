import { getAllPost } from '@/services/postService';
import Table from '@/ui/Table';
import React from 'react';
import PostRow from './PostRow';

const PostsTable = async ({ query = '' }) => {
    const { posts } = await getAllPost(query);

    return posts?.length < 1 ? <p>پستی یافت نشد.</p> :
        <Table>
            <Table.Header>
                <th>#</th>
                <th>عنوان</th>
                <th>دسته بندی</th>
                <th>نویسنده</th>
                <th>تاریخ ایجاد</th>
                <th>نوع</th>
                <th>عملیات</th>
            </Table.Header>
            <Table.Body>
                {posts.map((post, index) => (
                    <PostRow key={post._id} post={post} index={index} />
                ))}
            </Table.Body>
        </Table>
}

export default PostsTable;
