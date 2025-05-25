import CategoryList from "@/app/blogs/_components/category-list/CategoryList";
import Search from "@/ui/Search";

export const metadata = {
    title: "بلاگ‌ها",
    description: "اپلیکیشن مدیریت بلاگ",
};
const Layout = ({ children }) => {
    return (
        <div>
            <div className="grid grid-cols-1 gap-3 lg:grid-cols-3 lg:gap-0 text-secondary-700 mb-12 items-center">
                <h1>لیست بلاگ‌ها</h1>
                <Search />
            </div>
            <div className="grid grid-cols-12 gap-8">
                <div className="col-span-12 lg:col-span-3 xl:col-span-2 text-secondary-500 space-y-1">
                    <CategoryList />
                </div>
                <div className="col-span-12 lg:col-span-9 xl:col-span-10 pb-4 text-secondary-500 space-y-1">
                    {children}
                </div>
            </div>
        </div>
    );
}

export default Layout;
