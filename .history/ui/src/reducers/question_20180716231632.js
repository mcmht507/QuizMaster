const LOAD = 'user/LOAD'

const initialState = {
  login_user: null,
}

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD:
      return {
        login_user: action.login_user,
        rrsult: action.result,
      }
    default:
      return state
  }
}

export function load() {
  return (dispatch, getState, client) => {
    return client
      .get('http://localhost:3000/questions')
      .then(res => res.data)
      .then(login_user => {
        // dispatchしてreducer呼び出し
        dispatch({ type: LOAD, login_user, result: true })
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: LOAD, login_user: null, result: false })
      })
  }
}