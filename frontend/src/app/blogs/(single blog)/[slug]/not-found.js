'use client'
import Link from "next/link";

const NotFound = () => {
    return (
        <div className="my-20">
            <div className="mx-auto w-fit flex flex-col gap-4">
                <p className="font-semibold text-lg text-right text-red-500">پستی با این مشخصات پیدا نشد.</p>
                <button className="flex items-center gap-2 text-right">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-primary-800">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                    <Link href={'/blogs'} className="text-secondary-600">رفتن یه صفحه‌ پست‌ها</Link>
                </button>
            </div>
        </div>
    );
}

export default NotFound;
