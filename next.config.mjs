export default {
  eslint: {
    ignoreDuringBuilds: true,  // Disables linting during build
  },
    webpack: (config) => {
      config.module.rules.push({
        test: /\.html$/,
        use: ['html-loader'],
      });
      return config;
    },
  };
  