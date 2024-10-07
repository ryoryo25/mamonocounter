/** @type {import('next').NextConfig} */
const nextConfig = {
    output: process.env.NODE_ENV == 'development' ? undefined : 'export',
};

export default nextConfig;
