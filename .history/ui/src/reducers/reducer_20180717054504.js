import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'

import user from './user'
import user from './question'

export default combineReducers({
  routing: routerReducer,
  form: formReducer, // 追加
  user,
  question
})