const path = require('path')
const merge = require('webpack-merge').merge
const base = require('./webpack.base')
// const VueSSRClientPlugin = require('vue-server-renderer/client-plugin')

module.exports = merge(base, {
  entry: './src/entry.client.js',
  output: {
    path: path.join(__dirname, '../dist'),
    filename: 'bundle.client.js'
  },
  plugins: [
    // new VueSSRClientPlugin()
  ]

})