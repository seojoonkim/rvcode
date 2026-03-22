import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RV 바이브코딩 | AI로 나만의 도구 만들기",
  description:
    "텍스트 → 마법: AI로 나만의 도구 만들기. RV 바이브코딩 세션에서 코딩 없이 나만의 웹앱을 만들어보세요.",
  openGraph: {
    title: "RV 바이브코딩",
    description: "텍스트 → 마법: AI로 나만의 도구 만들기",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${inter.variable} ${geistMono.variable} antialiased`}
    >
      <head>
        <link
          rel="stylesheet"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
      </head>
      <body className="min-h-screen bg-background text-foreground">
        <a href="#preparation" className="skip-link">
          사전 준비로 건너뛰기
        </a>
        {children}
      </body>
    </html>
  );
}
