import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();

  // Create a Supabase client that reads/writes from cookies
  const supabase = createMiddlewareClient({ req, res });

  // Get the current user
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // If no user, redirect to home
  if (!user) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return res;
}

export const config = {
  matcher: ["/dashboard/:path*", "/admin/:path*"],
};
