import { MessageContainer } from "@/components/message";
import type { Metadata } from "next";
import { Inter, Noto_Sans_KR, Hahmlet } from "next/font/google";
import "./globals.css";

const hahmlet = Hahmlet({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "디아블로 게스트 초대",
  description: "당신을 디아블로 클럽의 게스트로 초대합니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={hahmlet.className}>
        <main className="w-full h-full max-w-[720px] mx-auto">{children}</main>
        <MessageContainer />
      </body>
    </html>
  );
}
