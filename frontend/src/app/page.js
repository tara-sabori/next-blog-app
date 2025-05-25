import Header from "@/components/header/Header";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center my-20 gap-8">
        <h1 className="font-bold text-lg 2xl:text-2xl text-secondary-800">
          اپلیکیشن مدیریت بلاگ
        </h1>
        <div className="text-center text-secondary-500">
          جایی که قرار بتونی یک اپلیکیشن بلاگ کامل رو مدیریت کنی
          <br /> بتونی بلاگ بسازی - کامنت بذاری و در پلنت همه اتفاقات رو رصد کنی!
        </div>
        <div className="flex justify-center items-center gap-x-8 mt-0">
          <button className="border border-secondary-400 text-secondary-500 rounded-lg p-2 text-xs 2xl:text-sm">
            <Link href={'/blogs'}>مطالعه بلاگ‌ها</Link>
          </button>
          <button className="bg-primary-900 text-secondary-100 rounded-lg p-2 text-xs 2xl:text-sm">
            <Link href={'/manage'}>مدیریت بلاگ‌ها</Link>
          </button>
        </div>
      </div>
    </>
  );
}
