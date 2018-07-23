import React from 'react'
import ReactDOM from 'react-dom'
// applyMiddlewareを追加
import { createStore, applyMiddleware } from 'redux'
// react-reduxのProviderコンポーネントを追加
import { Provider } from 'react-redux'
import client from 'axios'
import thunk from 'redux-thunk'

import App from './components/App'
// reducerを読み込み（後述）
import reducer from './reducers/reducer'

const thunkWithClient = thunk.withExtraArgument(client)
// storeを作成
const store = createStore(reducer, applyMiddleware(thunkWithClient))

// Providerタグで囲うとApp内でstoreが利用可能になる
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)