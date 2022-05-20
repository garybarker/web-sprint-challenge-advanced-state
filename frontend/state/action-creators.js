import * as types from './action-types'
import axios from 'axios'


// ❗ You don't need to add extra action creators to achieve MVP


const URL = 'http://localhost:9000/api/quiz'

export function moveClockwise() { 
  return {
    type: types.MOVE_CLOCKWISE,
    
  }
}

export function moveCounterClockwise() { 
  return {
    type: types.MOVE_COUNTERCLOCKWISE,
    
  }
}

export function selectAnswer(answerId) { 
  return {
    type: types.SET_SELECTED_ANSWER,
    payload: answerId
  }
}

export function setMessage(str) { 
  return {
    type: types.SET_INFO_MESSAGE,
    payload: str
  }
}

export function setQuiz(quiz) { 
  return { 
    type: types.SET_QUIZ_INTO_STATE, 
    payload: quiz
  }
}

export function inputChange(id, value) { 
  return {
    type: types.INPUT_CHANGE,
    payload: {
      inputId: id,
      value: value
    }
  }
}

export function resetForm() { 
  return {
    type: types.RESET_FORM
  }
}

// ❗ Async action creators
export function fetchQuiz() {
  return function (dispatch) {
    // First, dispatch an action to reset the quiz state (so the "Loading next quiz..." message can display)
    dispatch(setQuiz(null))
    // On successful GET:
    axios.get(`${URL}/next`)
    .then(res => {
    dispatch(setQuiz(res.data))
  })
  .catch(err => {
    console.error(err)
  })
  }
    // - Dispatch an action to send the obtained quiz to its state
  }

export function postAnswer(quiz_id, answer_id) {
  return function (dispatch) {
    // On successful POST:
    axios.post(`${URL}/answer`, { quiz_id, answer_id })
    .then(res => {
    // - Dispatch an action to reset the selected answer state
    dispatch(selectAnswer(null))
    // - Dispatch an action to set the server message to state
    dispatch(setMessage(res.data.message))
    // - Dispatch the fetching of the next quiz
    dispatch(fetchQuiz())
  })
  .catch(err => {
    console.error(err)
  })
}
}
export function postQuiz() {
  return function (dispatch) {
    // On successful POST:
    axios.post(`${URL}/new`, {question_text: this.state.form.newQuestion.text})
    // - Dispatch the correct message to the the appropriate state
    // - Dispatch the resetting of the form
  }
}
// ❗ On promise rejections, use log statements or breakpoints, and put an appropriate error message in state
