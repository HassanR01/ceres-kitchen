/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["lh3.googleusercontent.com", "res.cloudinary.com"],
        remotePatterns: [
            {
                protocol: "http",
                hostname: "**",
            },
        ],
    }
}

module.exports = nextConfig
