import type { Metadata } from "next";
import "./globals.css";
import { LocaleProvider } from "@/lib/LocaleContext";

export const metadata: Metadata = {
  title: "Mezmo Change — Change your scribbles into smart notes in 5 seconds",
  description:
    "Mezmo Change는 AI 손글씨 구조화 서비스입니다. 사진 한 장으로 엉망인 메모를 5초 만에 깔끔한 디지털 노트로 변환합니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr">
      <body className="font-sans antialiased">
        <LocaleProvider>{children}</LocaleProvider>
      </body>
    </html>
  );
}
