"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function Search() {
    const searchParams = useSearchParams();
    const userSearch = searchParams.get('search') || '';
    const router = useRouter();
    const pathname = usePathname();

    const formSubmit = (e) => {
        e.preventDefault();
        const search = e.target.search;
        const searchValue = search.value;
        const newParams = new URLSearchParams(searchParams.toString());
        newParams.set("page", "1");
        if (searchValue) {
            newParams.set("search", searchValue);
        } else {
            newParams.delete("search");
        }

        router.push(pathname + "?" + newParams.toString(), { scroll: false });
        // router.push(`${pathname}?${newParams.toString()}`, { scroll: false });
    };

    return (
        <form onSubmit={formSubmit}>
            <div className="relative z-10">
            <input
                type="text"
                name="search"
                placeholder="جستجو ..."
                autoComplete="off"
                defaultValue={userSearch}
                className="textField__input py-3 text-xs bg-secondary-0"
            />
            <button
                type="submit"
                className="absolute left-0 top-0 ml-3 flex h-full items-center"
            >
                <MagnifyingGlassIcon className="h-4 text-secondary-400" />
            </button>
            </div>
        </form>
    );
}
