
import { NextResponse } from 'next/server';
export async function POST() {
  const res = NextResponse.redirect(new URL('/auth/login', 'http://localhost:3000'));
  res.cookies.set('role','',{ path:'/', maxAge:0 });
  return res;
}
