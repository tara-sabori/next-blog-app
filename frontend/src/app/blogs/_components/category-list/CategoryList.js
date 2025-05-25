import Link from "next/link";

const CategoryList = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/category/list`);
    const { data: { categories } } = await res.json();
    console.log(categories);
    return (
        <div className="flex flex-col gap-4">
            <h3 className="text-primary-900">لیست دسته‌بندی‌ها</h3>
            <ul className="flex flex-nowrap lg:flex-col gap-4 max-w-[400px] md:max-w-screen-md lg:w-fit overflow-x-auto overflow-y-hidden lg:overflow-hidden pb-2 lg:pb-0">
                <li>
                    <Link href={`/blogs`}>همه</Link>
                </li>
                {
                    categories?.map(category => <li key={category?._id}>
                        <Link className="whitespace-nowrap" href={`/blogs/category/${category?.slug}`}>{category?.title}</Link>
                    </li>)
                }
            </ul>
        </div>
    );
}

export default CategoryList;
