const LOAD = 'user/LOAD'

const initialState = {
  users: null,
}

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD:
      return {
        users: action.results,
      }
    default:
      return state
  }
}

export function load() {
  // clientはaxiosの付与したクライアントパラメータ
  // 非同期処理をPromise形式で記述できる
  return (dispatch, getState, client) => {
    return client
      .get('http://localhost:3000/users/myself')
      .then(res => res.data)
      .then(login_user => {
        const login_user = datas
        // dispatchしてreducer呼び出し
        dispatch({ type: LOAD, login_user })
      })
      .catch((err) => {
        console.log(err);
        return null;
      })
  }
}