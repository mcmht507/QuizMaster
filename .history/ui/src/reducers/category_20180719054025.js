const LOAD = 'categories/LOAD'

const initialState = {
  categories: null,
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
      .get('http://localhost:3000/questions')
      .then(res => res.data)
      .then(questions => {
        // dispatchしてreducer呼び出し
        dispatch({ type: LOAD, questions, result: true })
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: LOAD, questions: null, result: false })
      })
  }
}