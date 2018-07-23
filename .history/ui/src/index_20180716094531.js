import React from 'react'
import ReactDOM from 'react-dom'
// applyMiddlewareを追加
import { createStore, applyMiddleware } from 'redux'
// react-reduxのProviderコンポーネントを追加
import { Provider } from 'react-redux'
import App from './App'
// reducerを読み込み（後述）
import reducer from './reducer'

// storeを作成
const store = createStore(reducer)

// Providerタグで囲うとApp内でstoreが利用可能になる
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)