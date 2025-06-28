"use client";
import Link from "next/link";
import ButtonIcon from "@/ui/ButtonIcon";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
// import Drawer from "@/ui/Drawer";
import SideBar from "./SideBar";
import { useAuth } from "@/context/AuthContex";
import Image from "next/image";
import Drawer from "@/ui/Drawer";

function Header() {
    const [isOpenDrawer, setIsOpenDrawer] = useState(false);
    const { state } = useAuth();

    return (
        <header
            className={`bg-secondary-0 ${state?.isLoading ? "bg-opacity-30 blur-md" : ""}`}
        >
            <div className="flex items-center justify-between py-5 px-4 lg:px-8">
                <button
                    className="block lg:hidden border-none"
                    variant="outline"
                    onClick={() => setIsOpenDrawer(!isOpenDrawer)}
                >
                    {isOpenDrawer ? <XMarkIcon className="w-5 h-5" /> : <Bars3Icon className="w-5 h-5" />}
                </button>

                <span className="text-sm lg:text-lg font-bold text-secondary-700">
                    سلام؛ {state?.user?.name}
                </span>

                <Link href="/profile">
                    <Image
                        src={state?.user?.avatarUrl || '/images/avatar.png'}
                        alt="user profile"
                        width={30}
                        height={30}
                        className="rounded-full"
                    />
                </Link>

                <Drawer open={isOpenDrawer} onClose={() => setIsOpenDrawer(false)}>
                    <SideBar onClose={() => setIsOpenDrawer(false)} />
                </Drawer>
            </div>
        </header>
    );
}
export default Header;
