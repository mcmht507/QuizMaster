module.exports = {
  mode: 'development',
  entry: './index.js',
  output: {
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.js?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        plugins: ["transform-react-jsx"]
      }
    }]
  }
}