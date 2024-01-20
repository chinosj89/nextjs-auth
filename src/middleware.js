import { NextResponse } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request) {
    const path = request.nextUrl.pathname

    const isPublic = path === '/login' || path === '/signup'

    const token = request.cookies.get('token')?.value || ''

    // where you want the user to be directed if they are trying to access a public path and they have a token already
    if (isPublic && token) {
        return NextResponse.redirect(new URL('/', request.nextUrl))
    }
    // if neither then direct them to a login page
    if (!isPublic && !token) {
        return NextResponse.redirect(new URL('/login', request.nextUrl))
    }

}

// See "Matching Paths" below to learn more
export const config = {
    matcher: [
        '/',
        '/profile/:path*',
        '/login',
        '/signup',
    ]
}