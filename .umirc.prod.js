import { defineConfig } from "umi";

export default defineConfig({
  define: {
    baseApi: "https://8-88.github.io/react-h5-template",
    "process.env": {
      NODE_ENV: "uat",
      UMI_ENV: "uat",
    },
  },
});
