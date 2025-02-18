import createMiddleware from "next-intl/middleware";
import { fallbackLocale, locales } from "@/i18n";
import { NextRequest, NextResponse } from "next/server";
import { redirect } from "next/navigation";

const nextIntlMiddleware = createMiddleware({
  locales,
  defaultLocale: fallbackLocale,
});

export const config = {
  // Match only internationalized pathnames
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|robots.txt).*)"],
};

export default async function (req: NextRequest): NextResponse {
  const { cookies } = await import("next/headers");
  const token = cookies().get("accessToken")?.value;

  if (
    req.url.indexOf("profile") > -1 &&
    !token &&
    !req.url.includes("/callback")
  ) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return nextIntlMiddleware(req);
}
