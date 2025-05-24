'use client'
import useMoveBack from "@/hooks/useMoveBack";

const NotFound = () => {
    const moveBack=useMoveBack();
    return (
        <div className="my-20">
            <div className="mx-auto w-fit flex flex-col gap-4">
                <p className="font-semibold text-lg text-right text-secondary-800">صفحه‌ای که دنبالش بودید، پیدا نشد.</p>
                <button onClick={moveBack} className="flex items-center gap-2 text-right">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-primary-800">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>

                    <span className="text-secondary-600">برگشت</span>
                </button>
            </div>
        </div>
    );
}

export default NotFound;
