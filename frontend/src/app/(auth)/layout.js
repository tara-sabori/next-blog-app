import Header from "@/components/header/Header";

const AuthLayout = ({ children }) => {
    return (
        <>
            <Header />
            <div className="container xl:max-w-screen-xl">
                <div className="mt-20 flex items-center justify-center">
                    <div className="border border-primary-500 rounded-md w-full lg:max-w-md p-2">
                        {children}
                    </div>
                </div>
            </div>
        </>
    );
}

export default AuthLayout;
