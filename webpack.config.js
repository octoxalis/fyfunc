// webpack.config.js
module.exports = {
  module: {
    rules: [
      {
        test: /sharp\.node$/i,
        use: 'raw-loader',
      },
    ],
  },
};