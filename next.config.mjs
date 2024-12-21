export default {
  // eslint: {
  //   ignoreDuringBuilds: true, // Disables linting during build (optional)
  // },

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'source.unsplash.com', // Replace with your allowed hostnames
      },
      // Add more hostnames as needed
    ],
  },

  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.module.rules.push({
        test: /\.html$/,
        use: ['html-loader'],
      });
    }
    return config;
  },

  // Other Next.js configurations can go here
  reactStrictMode: true, // Example
  swcMinify: true, // Example
};