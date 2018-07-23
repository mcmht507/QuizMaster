import React from 'React'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './components/App';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)