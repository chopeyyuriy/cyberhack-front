import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";

import { LanguageCode } from "@/shared/types";

export const fallbackLocale: LanguageCode = "ru";

export const locales: LanguageCode[] = [fallbackLocale, "en"];

export default getRequestConfig(async ({ locale }) => {
  const baseLocale = new Intl.Locale(locale).baseName;

  if (!locale.includes(baseLocale)) notFound();

  return {
    messages: (await import(`@/messages/${baseLocale}.json`)).default,
  };
});
