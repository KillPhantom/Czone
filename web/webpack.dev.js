const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    static: "./dist",
    port: 8080,
    historyApiFallback: true,
    proxy: {
      "/api": {
        target: "http://localhost:8080",
        router: () => "http://localhost:8888",
        logLevel: "debug" /*optional*/,
      },
    },
  },
});
