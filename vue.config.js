module.exports = {
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "@/assets/_vars.scss";`
      }
    }
  },
  chainWebpack: config => { //https://stackoverflow.com/a/60402866/1235074
    config
    .plugin('html')
    .tap(args => {
      args[0].title = 'hiTarget!!'
      return args
    })
  }
}
