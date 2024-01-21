const path = require("path")

module.exports = {
  entry: {
   index: "./src/index.js"
  },
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true
  },
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    static: "./src"
  },
  optimization: {
    runtimeChunk: "single",
  }
}