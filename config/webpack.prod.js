const { merge } = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const common = require("./webpack.common.js");

const isAnalyze = process.env.ANALYZE === "true";

module.exports = merge(common(MiniCssExtractPlugin.loader), {
  mode: "production",
  devtool: "source-map",
  optimization: {
    splitChunks: {
      chunks: "all",
    },
    runtimeChunk: "single",
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "styles/[name].[contenthash].css",
    }),
    ...(isAnalyze
      ? [
          new BundleAnalyzerPlugin({
            analyzerMode: "server",
            openAnalyzer: true,
          }),
        ]
      : []),
  ],
});
