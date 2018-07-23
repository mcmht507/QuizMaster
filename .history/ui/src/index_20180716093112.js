import React from 'React'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App';
import reducer from './reducer'

ReactDOM.render(
  <Provider store={store}>
    <App />,
  </Provider>,
  document.getElementById('root')
)