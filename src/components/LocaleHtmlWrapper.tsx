"use client";
import { ReactNode } from "react";
import { Inter } from "next/font/google";
import { useLocalization } from "../lib/LocalizationProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export default function LocaleHtmlWrapper({
  children,
}: {
  children: ReactNode;
}) {
  const { locale } = useLocalization();

  return (
    <html
      lang={locale}
      dir={locale === "ar" ? "rtl" : "ltr"}
      className={inter.variable}
    >
      <body className="bg-black text-gray-100 font-sans">{children}</body>
    </html>
  );
}
