/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	env: {
		siteTitle: "Jacks Portfolio",
		siteDescription: "My technology journey so far!",
		siteUrl: "https://www.jackhawkins.xyz/",
		siteImagePreviewUrl: "preview image path in png format",
	},
};

module.exports = nextConfig;
