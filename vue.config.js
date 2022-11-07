const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false, // 단일 컴포넌트명을 쓸수있게 해줌
});
