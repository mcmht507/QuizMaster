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

// axiosをthunkの追加引数に加える
const thunkWithClient = thunk.withExtraArgument(client)
// redux-thunkをミドルウェアに適用
const store = createStore(reducer, applyMiddleware(thunkWithClient))

const render = Component => {
  ReactDOM.render(
    <AppContainer warnings={false}>
      <Provider store={store}>
        <Component />
      </Provider>
    </AppContainer>,
    document.getElementById('root'),
  )
}
render(App)
// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./App', () => { render(App) })
}