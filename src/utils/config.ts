import nextConfig from "../../next.config.mjs"

const url = (filename: string): string => {
  return nextConfig.basePath + filename
}

export default url