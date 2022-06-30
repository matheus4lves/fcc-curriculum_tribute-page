const path = require("path");

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
        use: ["style-loader", "css-loader"],
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
