const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  publicPath: '/resoapp/',
  lintOnSave: true	// 关闭语法检查 

})
