import React from 'React'
import ReactDOM from 'react-dom'
// applyMiddlewareを追加
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App';
import reducer from './reducer'

ReactDOM.render(
  <App />,
  document.getElementById('root')
)