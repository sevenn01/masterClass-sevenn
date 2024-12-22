/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    webpack: (config, { dev }) => {
      if (dev) {
        config.watchOptions = {
          poll: 1000,   // Check for changes every second
          aggregateTimeout: 300,   // Delay the rebuild after the first change
        };
      }
      return config;
    },
    /*
    webpackDevMiddleware: config => {
      config.watchOptions = {
        poll: 800,
        aggregateTimeout: 300,
      }
      return config
    },*/

    images: {
      domains:['']
    }
  };
  
  export default nextConfig;
  