import { NextResponse } from "next/server";
import { middlewareAuth } from "./middlewareAuth";
export const middleware = async (req) => {
    const { pathname } = req.nextUrl;

    if (pathname.startsWith('/signin') || pathname.startsWith('/signup')) {
        const user = await middlewareAuth(req);
        if (user) return NextResponse.redirect(new URL(`/`, req.url));
    }

    if (pathname.startsWith('/profile')) {
        const user = await middlewareAuth(req);
        if (!user) return NextResponse.redirect(new URL(`/signin`, req.url));
    }
}

export const config = {
    matcher: ['/profile/:path*', '/signin', '/signup']
}