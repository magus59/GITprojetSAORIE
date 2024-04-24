const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  transpileDependencies: true,

  chainWebpack: (config) => {
    config.module
      .use("file-loader")
      .loader("file-loader")
      .options({
        name: "[name].[ext]",
      })
      .end();
  },

  publicPath: process.env.NODE_ENV === "production" ? "/GITprojetSAORIE/" : "/",
});
