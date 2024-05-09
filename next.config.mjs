/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'www.pokemon.com',
                port: '',
                pathname: '**',
            },
        ],
    },
};

export default nextConfig;
