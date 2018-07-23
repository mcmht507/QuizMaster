const LOAD = 'items/LOAD'

const initialState = {
  login_user: null,
}

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD:
      return {
        items: action.items,
        result: action.result,
      }
    default:
      return state
  }
}

export function load() {
  console.log("question");
  return (dispatch, getState, client) => {
    return client
      .get('http://localhost:3000/categories')
      .then(res => res.data)
      .then(items => {
        console.log(items);
        dispatch({ type: LOAD, items, result: true })
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: LOAD, items: null, result: false })
      })
  }
}