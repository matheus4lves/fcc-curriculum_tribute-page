const path = require("path");
const postCSSPlugins = [require("postcss-mixins"), require("postcss-simple-vars"), require("postcss-import"), require("postcss-nested"), require("autoprefixer")];

module.exports = {
  entry: "./app/assets/scripts/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: postCSSPlugins,
              },
            },
          },
        ],
      },
    ],
  },
  mode: "development",
  devServer: {
    host: "0.0.0.0",
    hot: true,
    open: {
      app: {
        name: "firefox",
      },
    },
    port: 3000,
    static: {
      directory: path.join(__dirname, "app"),
    },
  },
};
