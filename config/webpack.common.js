const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/main.tsx",
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "bundle.[contenthash].js",
    clean: true,
    assetModuleFilename: "assets/[hash][ext][query]",
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    alias: {
      "@": path.resolve(__dirname, "../src"),
    },
  },
  dotenv: {
    prefix: "APP_PUBLIC_",
    dir: path.resolve(__dirname, "../"),
    template: [".env", ".env.local", ".env.[mode]", ".env.[mode].local"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
