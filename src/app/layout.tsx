import "./globals.css";
import { ReactNode } from "react";
import { LocalizationProvider } from "../lib/LocalizationProvider";
import LocaleHtmlWrapper from "../components/LocaleHtmlWrapper";

// ...existing code...

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <LocalizationProvider>
      <LocaleHtmlWrapper>{children}</LocaleHtmlWrapper>
    </LocalizationProvider>
  );
}
