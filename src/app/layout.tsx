import type { Metadata } from "next";
import { roboto, notojp } from "@/utils/font";
import "./globals.css";

export const metadata: Metadata = {
  title: "見たことない魔物カウンター",
  description: "何回「見たことない魔物」を見たかをカウント",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${roboto.variable} ${notojp.variable} antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
