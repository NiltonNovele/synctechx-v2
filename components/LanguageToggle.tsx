"use client";

import { usePathname, useRouter } from "next/navigation";
import { useLocale } from "next-intl";

export default function LanguageToggle() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const newLocale = locale === "pt" ? "en" : "pt";

  const switchLocale = () => {
    const segments = pathname.split("/");
    segments[1] = newLocale;
    router.push(segments.join("/"));
  };

  return (
    <button
      onClick={switchLocale}
      className="px-4 py-2 border rounded bg-white hover:bg-gray-100"
    >
      {locale === "pt" ? "🇬🇧 Mudar para Inglês" : "🇵🇹 Switch to Portuguese"}
    </button>
  );
}
