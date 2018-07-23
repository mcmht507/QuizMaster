const LOAD = 'categories/LOAD'

const initialState = {
  categories: "aaaaaaaa"
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
  console.log("categories");
  return (dispatch, getState, client) => {
    return client
      .get('http://localhost:3000/categories')
      .then(res => res.data)
      .then(categories => {
        console.log(categories);
        dispatch({ type: LOAD, categories, result: true })
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: LOAD, categories: null, result: false })
      })
  }
}