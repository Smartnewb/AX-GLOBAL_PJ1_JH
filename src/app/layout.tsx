import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LocaleProvider } from "@/lib/LocaleContext";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext", "cyrillic", "vietnamese"],
});

export const metadata: Metadata = {
  title: "MemoFlow AI — Turn Messy Notes into Clean Documents",
  description:
    "Snap a photo of your handwritten notes. Our AI reads your handwriting, understands context, and transforms it into perfectly structured digital text — in any language.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr">
      <body className={`${inter.variable} font-sans antialiased`}>
        <LocaleProvider>{children}</LocaleProvider>
      </body>
    </html>
  );
}
