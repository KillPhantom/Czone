//webpack.config.js
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const tsconfig = require("./tsconfig.json");
var webpack = require("webpack");
module.exports = {
  entry: "./src/index.tsx",
  watch: true,
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "[name].bundle.js",
    publicPath: "/",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.ttf$/,
        use: [
          {
            loader: "ttf-loader",
            options: {
              name: "fonts/[hash].[ext]",
            },
          },
        ],
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: "url-loader",
        options: {
          name: "/public/icons/[name].[ext]",
        },
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    alias: Object.keys(tsconfig.compilerOptions.paths).reduce(
      (aliases, aliasName) => {
        aliases[aliasName.slice(0, -2)] = path.resolve(
          __dirname,
          `${tsconfig.compilerOptions.paths[aliasName][0].slice(0, -1)}`
        );

        return aliases;
      },
      {}
    ),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "index.html"),
    }),
    new webpack.ProvidePlugin({
      React: "react",
    }),
  ],
};
