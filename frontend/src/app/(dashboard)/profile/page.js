import { Suspense } from "react";
import CardsWrapper from "./_components.js/CardsWrapper";
import PostsTable from "./posts/_/components/PostsTable";

const ProfilePage = async () => {
    return (
        <>
            <div className="flex flex-col gap-1.5">
                <h3>اطلاعات کلی</h3>
                <Suspense fallback={<p>در حال بارگذاری اطلاعات...</p>}>
                    <CardsWrapper />
                </Suspense>
            </div>
            {/* اخرین پست ها */}
            <div className="flex flex-col gap-1.5">
                <h3>آخرین پست‌ها</h3>
                <Suspense fallback={<p>در حال بارگذاری اطلاعات...</p>}>
                    <PostsTable query="sort=latest&limit=5" />
                </Suspense>
            </div>
        </>
    );
}

export default ProfilePage;
