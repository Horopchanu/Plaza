module.exports = {
  env: {
    production: {
      presets: [["@babel/preset-env", { loose: true }]],
    },
    test: {
      presets: [["@babel/preset-env", { loose: true }]],
    },
  },
};
