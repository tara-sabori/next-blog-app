import React from 'react';
import Card from './Card';
import { getAllDataDashbord } from '@/services/dataDashbord';

const CardsWrapper = async () => {
    const { userData, listComment, listPost } = await getAllDataDashbord();
    return (
        <div className="grid gap-6 md:grid-cols-3 mb-8">
            <Card title={'کاربران'} value={userData?.length} type={'users'} />
            <Card title={'کامنت‌ها'} value={listComment?.commentsCount} type={'comments'} />
            <Card title={'پست‌ها'} value={listPost?.length} type={'posts'} />
        </div>
    );
}

export default CardsWrapper;
