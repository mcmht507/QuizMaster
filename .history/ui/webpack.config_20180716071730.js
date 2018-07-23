module.exports = {
  entry: './index.js', // エントリポイントのjsxファイル
  output: {
    filename: 'bundle.js' // 出力するファイル
  },
  module: {
    loaders: [{
      test: /\.js?$/, // 拡張子がjsで
      exclude: /node_modules/, // node_modulesフォルダ配下は除外
      loader: 'babel-loader', // babel-loaderを使って変換する
      query: {
        plugins: ["transform-react-jsx"] // babelのtransform-react-jsxプラグインを使ってjsxを変換
      }
    }]
  }
}