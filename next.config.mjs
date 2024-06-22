/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: [
      'shopping-phinf.pstatic.net',
      't1.kakaocdn.net',
      'k.kakaocdn.net',
      'lh3.googleusercontent.com',
      'review-image-3team.s3.ap-northeast-2.amazonaws.com',
    ],
    remotePatterns: [
      {
        hostname: '**',
      },
    ],
  },
  sassOptions: {
    includePaths: ['styles'],
    additionalData: `@import "src/styles/globals.scss";`,
  },
  webpack: config => {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
};

export default nextConfig;
