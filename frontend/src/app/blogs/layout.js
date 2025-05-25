import Header from "@/components/header/Header";

export default function Layout({ children }) {
    return (
        <>
            <Header />
            <div className="container xl:max-w-screen-xl"> {children}</div>
        </>
    );
}
