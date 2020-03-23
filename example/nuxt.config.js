const { resolve } = require('path')

module.exports = {
  rootDir: resolve(__dirname, '..'),
  buildDir: resolve(__dirname, '.nuxt'),
  head: {
    title: '@hexdigital/nuxt-intercom'
  },
  srcDir: __dirname,
  render: {
    resourceHints: false
  },
  modules: [
    { handler: require('../') }
  ],
  plugins: [
    '~/plugins/intercom'
  ],
  intercom: {
    appId: process.env.INTERCOM_ID || 'test'
  }
}