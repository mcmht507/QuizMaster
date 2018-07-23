const LOAD = 'questions/LOAD'

const initialState = {
  login_user: null,
}

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD:
      return {
        categories: action.categories,
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
      .then(categories => {
        dispatch({ type: LOAD, categories, result: true })
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: LOAD, categories: null, result: false })
      })
  }
}