import { NextResponse } from 'next/server'

export function middleware(request) {
  const { pathname, searchParams } = request.nextUrl

  // If user visits root path without language parameter
  if (pathname === '/') {
    // Check if there's a language override parameter
    const langParam = searchParams.get('lang')
    
    // If no language parameter and no referer (direct visit), redirect to Greek
    const referer = request.headers.get('referer') || ''
    const isDirectVisit = !referer || !referer.includes(request.nextUrl.origin)
    
    if (isDirectVisit && langParam !== 'en') {
      return NextResponse.redirect(new URL('/el', request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: '/((?!api|_next/static|_next/image|favicon.ico).*)',
}
