const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/bootstrap.js",
  output: {
    path: `${__dirname}/../build`,
    filename: "bootstrap.js",
  },

  module: {
    rules: [{
      test: /\.js$/,
      exclude: /(node_modules)/,
      use: {
        loader: "babel-loader",
        options: {
          presets: ["env", "stage-0", "react"],
        },
      },
    }],
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: "Noox Testing Page",
    }),
  ],
};
