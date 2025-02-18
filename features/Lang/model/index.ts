import { usePathname } from "next/navigation";

import { LanguageCode } from "@/shared/types";

export const switchLocale = (locale: LanguageCode) => {
  const pathName = document.location.pathname;

  if (!pathName) return "/";

  const segments = pathName.split("/");
  segments[1] = locale;

  return segments.join("/");
};
