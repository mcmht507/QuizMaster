const webpack = require('webpack')
const path = require('path');



// module.exports = {
//   // モードの設定、v4系以降はmodeを指定しないと、webpack実行時に警告が出る
//   mode: 'development',
//   // エントリーポイントの設定
//   entry: [
//     // './src/index.js'
//   ],
//   // 出力の設定
//   output: {
//     // 出力するファイル名
//     filename: 'bundle.js',
//     // 出力先のパス（v2系以降は絶対パスを指定する必要がある）
//     path: path.join(__dirname, 'public/js')
//   },
//   module: {
//     rules: [{
//       test: /\.js?$/,
//       exclude: /node_modules/,
//       loader: 'babel-loader',
//       query: {
//         plugins: ["transform-react-jsx", "babel-plugin-transform-decorators-legacy"]
//       }
//     }]
//   }
// };

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map', // ソースマップファイル追加 
  entry: [
    'babel-polyfill',
    'react-hot-loader/patch',
    './src/index.js', // エントリポイントのjsxファイル
    // __dirname + 'src/index', // エントリポイントのjsxファイル
  ],
  // React Hot Loader用のデバッグサーバ(webpack-dev-server)の設定
  devServer: {
    historyApiFallback: true,
    contentBase: __dirname +'/public/', // index.htmlの格納場所
    inline: true, // ソース変更時リロードモード
    hot: true, // HMR(Hot Module Reload)モード
    port: 8081, // 起動ポート
    // CORSの対策（debugホストが違うため)
    proxy: {
      // CORSを許可するパスとサーバ
      '/api/**': {
        target: 'http://localhost:8080',
        secure: false,
        changeOrigin: true
      }
    }
  },
  output: {
    // 出力するファイル名
    filename: 'bundle.js',
    // 出力先のパス（v2系以降は絶対パスを指定する必要がある）
    path: path.join(__dirname, 'public/js')
  },
  plugins: [
    new webpack.NamedModulesPlugin(), // 名前変更無効プラグイン利用
    new webpack.HotModuleReplacementPlugin() // HMR(Hot Module Reload)プラグイン利用 
  ],
  module: {
    rules: [{
      test: /\.js?$/, // 拡張子がjsで
      exclude: /node_modules/, // node_modulesフォルダ配下は除外
      include: __dirname,// プロジェクトディレクトリ配下のJSファイルが対象
      use: {
        loader: 'babel-loader',
        options: {
          plugins: ["transform-react-jsx", "babel-plugin-transform-decorators-legacy", "react-hot-loader/babel"] // babelのtransform-react-jsxプラグインを使ってjsxを変換
        }
      }
    }]
  }
}

