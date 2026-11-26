
import { NextResponse } from "next/server";

export function GET() {
  const robots = `User-agent: *
Allow: /

Content-Signal: search=yes, ai-train=no

Sitemap: https://aardishinfotech.in/sitemap.xml
`;

  return new NextResponse(robots, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
