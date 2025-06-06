'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ path, children }) => {
    const pathName = usePathname();
    return (
        <Link
            className={`hover:text-secondary-900 transition-all ease-out ${path === pathName ? 'text-primary-900' : 'text-secondary-600'}`}
            href={path}>
            {children}
        </Link>
    );
}

export default NavLink;
