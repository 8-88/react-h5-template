import { defineConfig } from "umi";
const pxtorem = require("postcss-pxtorem");

export default defineConfig({
  npmClient: "npm",
  extraPostCSSPlugins: [
    pxtorem({
      rootValue: 75, //这里根据设计稿大小配置,一般是375
      propList: ["*"],
    }),
  ],
  define: {
    baseApi: "https://8-88.github.io/react-h5-template",
    "process.env": {
      NODE_ENV: "dev",
      UMI_ENV: "dev",
    },
  },
  plugins: ["@umijs/plugins/dist/dva"],
  dva: {},
});
