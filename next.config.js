const Dotenv = require('dotenv-webpack');

module.exports = {
  webpack: (config, { webpack }) => {
    config.plugins.push(new webpack.IgnorePlugin(/\/__tests__\//));
    config.plugins.push(new Dotenv());
    return config;
  },
  webpackDevMiddleware: (config) => {
    config.watchOptions = {
      poll: 2000,
      aggregateTimeout: 600,
    };

    return config;
  },
};
