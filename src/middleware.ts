import { NextRequest, NextResponse } from 'next/server';
import { getCSP } from './app/csp';

export function middleware(_request: NextRequest) {
  const response = NextResponse.next();
  response.headers.set('Content-Security-Policy', getCSP());

  return response;
}

export const config = {
  matcher: [
    {
      source: '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
      missing: [
        { type: 'header', key: 'next-router-prefetch' },
        { type: 'header', key: 'purpose', value: 'prefetch' },
      ],
    },
  ],
}; 