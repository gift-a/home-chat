const path = require("path");

module.exports = {
  css: {
    // Enable CSS source maps.
    sourceMap: true,
    // Enable CSS modules for all CSS/pre-processor files.
    // This option does not affect *.vue files.
    modules: true
  },
  // paths: {},

  // Configure Webpack's dev server.
  // https://github.com/vuejs/vue-cli/blob/dev/docs/cli-service.md
  devServer: {
    host: '0.0.0.0',
    port: 8080,
    public: 'localhost',
    disableHostCheck: true,
    watchOptions: {
      poll: true,
    }
  },
};
