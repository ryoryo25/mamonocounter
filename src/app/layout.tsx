import type { Metadata } from "next";
import { roboto, notojp } from "@/utils/font";
import "./globals.css";
import Meta from "@/components/meta";
import { ASSETS_PREFIX, DESCRIPTION, TITLE } from "@/libs/constants";
import url from "@/utils/config";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    type: "website",
    title: TITLE,
    description: DESCRIPTION,
    siteName: TITLE,
    images: {
      url: url(`${ASSETS_PREFIX}/og.png`)
    }
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <Meta />
      <body
        className={`${roboto.variable} ${notojp.variable} antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
