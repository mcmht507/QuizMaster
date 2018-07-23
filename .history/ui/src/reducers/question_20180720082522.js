const LOAD = 'questions/LOAD'

const initialState = {
  login_user: null,
}

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD:
      return {
        questions: action.questions,
        result: action.result,
      }
    default:
      return state
  }
}

export function load(param) {
  
  return (dispatch, getState, client) => {
    return client
      .get('http://localhost:3000/questions')
      .then(res => res.data)
      .then(questions => {
        dispatch({ type: LOAD, questions, result: true })
      })
      .catch((err) => {
        dispatch({ type: LOAD, questions: null, result: false })
      })
  }
}