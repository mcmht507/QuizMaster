import React from 'react'
import ReactDOM from 'react-dom'
import createHistory from 'history/createBrowserHistory'
// applyMiddlewareを追加
import { createStore, applyMiddleware } from 'redux'
// react-reduxのProviderコンポーネントを追加
import { Provider } from 'react-redux'
import client from 'axios'
import thunk from 'redux-thunk'
import { AppContainer } from 'react-hot-loader'
import { routerMiddleware } from 'react-router-redux'

import App from './components/App'
// reducerを読み込み（後述）
import reducer from './reducers/reducer'

// ブラウザ履歴保存用のストレージを作成
const history = createHistory()
// axiosをthunkの追加引数に加える
const thunkWithClient = thunk.withExtraArgument(client)
// routerMiddlewareとredux-thunkをミドルウェアに適用
const store = createStore(reducer, applyMiddleware(routerMiddleware(history), thunkWithClient))

const render = Component => {
  ReactDOM.render(
    <AppContainer warnings={false}>
      <Provider store={store}>
        <Component history={history} />
      </Provider>
    </AppContainer>,
    document.getElementById('root'),
  )
}

render(App)
// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./components/App', () => { render(App) })
}