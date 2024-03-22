const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})


module.exports = {
  devServer: {
    proxy: {
      '/users': {
        target: 'https://capstone-wnov.onrender.com',
        changeOrigin: true
      }
    }
  }
}