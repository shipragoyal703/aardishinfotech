
import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const accept = request.headers.get("accept") || "";

  if (
    request.nextUrl.pathname === "/" &&
    accept.includes("text/markdown")
  ) {
    const url = request.nextUrl.clone();
    url.pathname = "/markdown";

    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/"]
};
