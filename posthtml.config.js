module.exports = {
  plugins: {
    "posthtml-shorten": {
      shortener: {
        process: function (url) {
          return new Promise((resolve, reject) => {
            resolve(url.replace(".pug", ""));
          });
        },
      },
      tag: ["a"],
      attribute: ["href"],
    },
  },
};
