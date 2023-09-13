import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import path from "path"
import autoprefixer from "autoprefixer"
import postCssPxToRem from "postcss-pxtorem"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.join(__dirname, "./src"),
    },
  },
  css: {
    postcss: {
      plugins: [
        autoprefixer({
          overrideBrowserslist: [
            "Android 4.1",
            "iOS 7.1",
            "Chrome > 31",
            "ff > 31",
            "ie >= 8",
          ],
        }),
        postCssPxToRem({
          propList: ["*"], // 需要转换的属性，这里选择全部都进行转换
          selectorBlackList: ["norem"], // 过滤掉norem-开头的class，不进行rem转换
          rootValue: 75, //这个值为设计稿的宽
          unitPrecision: 5, // 转化为rem后保留的小数
          replace: true, //rem替换px
          mediQuery: true, //兼容媒体查询 允许在媒体查询中转换px
          minPixelValue: 6, //设置要替换的最小像素值
          exclude: /node_modules/i, //node_modules里的不转换
        }),
      ],
    },
  },
  server: {
    hmr: true,
    proxy: {
      "/api": {
        target: "http://jsonplaceholder.typicode.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""), // 将api重写成空，也就是实际请求不带api前缀
      },
    },
  },
})
