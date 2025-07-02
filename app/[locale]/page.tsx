"use client";
import { useTranslations } from "next-intl";

export default function HomePage() {
  const t = useTranslations();

  return (
    <main className="p-10">
      <h1 className="text-2xl font-bold">{t("welcome")}</h1>
    </main>
  );
}
