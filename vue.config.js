module.exports = {
  publicPath: "./",
  devServer: {
    proxy: {
      "/editor": {
        target: "http://localhost:3366",
        changeOrigin: true,
        pathRewrite: {
          "^/manage": ""
        }
      }
    }
  }
}