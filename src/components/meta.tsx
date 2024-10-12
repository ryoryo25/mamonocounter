import url from "@/utils/config"
import Head from "next/head"

const Meta = () => {
  return (
    <head>
      <link
        rel="icon"
        type="image/png"
        href={url("/favicon/favicon-48x48.png")}
        sizes="48x48"
      />
      <link
        rel="icon"
        type="image/svg+xml"
        href={url("/favicon/favicon.svg")}
      />
      <link
        rel="shortcut icon"
        href={url("/favicon/favicon.ico")}
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href={url("/favicon/apple-touch-icon.png")}
      />
      <link
        rel="manifest"
        href={url("/favicon/site.webmanifest")}
      />
    </head>
  )
}

export default Meta