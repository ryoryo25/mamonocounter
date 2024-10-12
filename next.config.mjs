/** @type {import('next').NextConfig} */
const nextConfig = {
    output: process.env.NODE_ENV == 'development' ? undefined : 'export',
    basePath: process.env.GITHUB_ACTIONS ? undefined : ''
};

export default nextConfig;
