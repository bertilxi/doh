const path = require("path");

module.exports = {
  pwa: {
    name: "Doh",
    themeColor: "#ffcf00",
    msTileColor: "#FFFFFF",
    iconPaths: {
      favicon32: "images/icons/icon-72x72.png",
      favicon16: "images/icons/icon-72x72.png",
      appleTouchIcon: "images/icons/icon-152x152.png",
      msTileImage: "images/icons/icon-144x144.png"
    }
  },
  css: {
    loaderOptions: {
      postcss: {
        path: path.join(__dirname, "postcss.config.js")
      }
    }
  }
};
