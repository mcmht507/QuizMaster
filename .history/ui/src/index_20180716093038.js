import React from 'React'
import ReactDOM from 'react-dom'
// applyMiddlewareを追加
import { createStore, applyMiddleware } from 'redux'
// react-reduxのProviderコンポーネントを追加
import { Provider } from 'react-redux'
import App from './components/App';
// reducerを読み込み（後述）
import reducer from './reducer'

ReactDOM.render(
  <App />,
  document.getElementById('root')
)