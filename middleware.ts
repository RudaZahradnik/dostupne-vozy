import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith("/admin")) {
    const demo = request.cookies.get("admin_demo")?.value;
    if (!demo && request.nextUrl.pathname !== "/admin/vozy" && request.nextUrl.pathname !== "/admin/vozy/new") {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }
  return NextResponse.next();
}

export const config = { matcher: ["/admin/:path*"] };
