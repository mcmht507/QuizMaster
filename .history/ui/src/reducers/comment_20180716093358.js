// reducerで受け取るaction名を定義
const LOAD = 'comment/LOAD'

// 初期化オブジェクト
const initialState = {
  comments: null,
}

// reducerの定義（dispatch時にコールバックされる）
export default function reducer(state = initialState, action = {}) {
  // actionの種別に応じてstateを更新する
  switch (action.type) {
    case LOAD:
      return {
        comments: action.comments,
      }
    default:
      // 初期化時はここに来る（initialStateのオブジェクトが返却される）
      return state
  }
}

// actionの定義
export function load() {
  const comments = 'hello'
  // action種別と更新stateを返却(dispatchされる)
  return { type: LOAD, comments }
}