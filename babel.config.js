module.exports = {
  plugins: [
    [
      "module-resolver",
      {
        alias: {
          "#root": "./src/server"
        }
      }
    ]
  ],
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          node: "current"
        }
      }
    ]
  ]
};
