import type { Metadata } from "next";
import { roboto, notojp, notoemoji } from "@/utils/font";
import "./globals.css";
import Meta from "@/components/meta";
import { DESCRIPTION, OG_IMAGE, TITLE } from "@/libs/constants";
import { GoogleAnalytics } from "@next/third-parties/google";
import { GA_MEASUREMENT_ID } from "@/libs/constants";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    type: "website",
    title: TITLE,
    description: DESCRIPTION,
    siteName: TITLE,
    images: {
      url: OG_IMAGE
    },
  }
}

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="ja">
      <Meta />
      {/* https://nextjs.org/docs/app/building-your-application/optimizing/third-party-libraries#google-analytics */}
      <GoogleAnalytics gaId={GA_MEASUREMENT_ID}/>
      <body
        className={`${notoemoji.variable} ${roboto.variable} ${notojp.variable} antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
}

export default RootLayout