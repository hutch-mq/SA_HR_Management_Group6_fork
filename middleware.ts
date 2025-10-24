
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
export function middleware(req: NextRequest) {
  const role = req.cookies.get('role')?.value;
  const { pathname } = req.nextUrl;
  const protectedPath = pathname.startsWith('/hr') || pathname.startsWith('/manager') || pathname.startsWith('/employee') || pathname === '/dashboard';
  if (!role && protectedPath) { const u = req.nextUrl.clone(); u.pathname = '/auth/login'; return NextResponse.redirect(u); }
  if (pathname === '/dashboard' && role) { const u = req.nextUrl.clone(); u.pathname = `/${role}/dashboard`; return NextResponse.redirect(u); }
  return NextResponse.next();
}
