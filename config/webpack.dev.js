const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const path = require("path");

module.exports = merge(common("style-loader"), {
  mode: "development",
  devtool: "eval-source-map",
  devServer: {
    port: 3000,
    open: {
      app: {
        name: "Google Chrome",
      },
    },
    static: {
      directory: path.resolve(__dirname, "../dist"),
    },
    hot: true,
    historyApiFallback: true,
  },
});
