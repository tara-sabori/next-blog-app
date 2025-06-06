'use client'
import { useAuth } from "@/context/AuthContex";
import NavLink from "./NavLink";

const navLinks = [
    {
        id: 1,
        children: 'خانه',
        path: '/'
    },
    {
        id: 2,
        children: 'بلاگ‌ها',
        path: '/blogs'
    },
]
const Header = () => {
    const { state: { isAuthenticated, isLoading } } = useAuth();
    return (
        <header className={`z-10 shadow-md bg-inherit mb-10 sticky top-0
        transition-all duration-200 border-b border-b-secondary-300 py-2
        ${isLoading ? 'blur-sm opacity-70' : 'blur-none opacity-100'}`}>
            <nav className="container xl:max-w-screen-xl">
                <ul className="flex itc justify-between">
                    <div className="flex items-center gap-8">
                        {
                            navLinks?.map(navLink => <li key={navLink?.id}>
                                <NavLink path={navLink?.path}>
                                    {navLink?.children}
                                </NavLink>
                            </li>)
                        }
                    </div>
                    <li>
                        {
                            isAuthenticated ? <NavLink path={'/profile'}>پروفایل</NavLink> :
                                <NavLink path={'/signin'}>ورود</NavLink>
                        }
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
