const AuthLayout = ({children}) => {
    return (
        <div className="mt-20 flex items-center justify-center">
            <div className="border border-primary-500 rounded-md w-full lg:max-w-md p-2">
                {children}
            </div>
        </div>
    );
}

export default AuthLayout;
