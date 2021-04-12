const path = require('path')
const merge = require('webpack-merge').merge
const base = require('./webpack.base')
// const VueSSRServerPlugin = require('vue-server-renderer/server-plugin')

module.exports = merge(base, {
  target: 'node',
  entry: './src/entry.server.js',
  output: {
    path: path.join(__dirname, '../dist'),
    filename: 'bundle.server.js',
    libraryTarget: 'commonjs2'
  },
  plugins: [
    // new VueSSRServerPlugin()
  ]
})