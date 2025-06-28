import Header from "./profile/_components.js/Header";
import SideBar from "./profile/_components.js/SideBar";

const Layout = ({ children }) => {
    return (
        <div className="bg-secondary-0">
            <div className="grid grid-cols-12 grid-rows-[auto_1fr] min-h-screen">
                <aside className="hidden lg:block col-span-3 xl:col-span-2 row-span-2">
                    <SideBar />
                </aside>
                <div className="col-span-12 lg:col-span-9 xl:col-span-10 row-span-1">
                    <Header />
                </div>
                <main className="col-span-12 lg:col-span-9 xl:col-span-10 bg-secondary-100 rounded-tr-3xl p-4 md:p-6 overflow-y-auto">
                    <div className="xl:max-w-screen-xl ">{children}</div>
                </main>
            </div>
        </div>
    );
}

export default Layout;
