import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../state/action-creators'

function Quiz(props) {

  const {quiz, selectedAnswer, selectAnswer, fetchQuiz, postAnswer} = props


  

  

  return (
    <div id="wrapper">
      {
        
        quiz !== null ? (
          <>
            
            <h2>{quiz.question}</h2>

            <div id="quizAnswers">
            {quiz.answers.map(answer => {
              return (
                <div className={selectedAnswer === answer.answer_id ? "answer selected" : "answer"}  
                  key={answer.answer_id} id={answer.answer_id}>
                  {answer.text}

                  <button onClick={() => selectAnswer(answer.answer_id)}>
                      {selectedAnswer === answer.answer_id ? 'SELECTED' : 'Select'}
                  </button>
                </div>
              )
            })}
            </div>

            <button id="submitAnswerBtn" onClick={() => postAnswer(quiz.quiz_id, selectedAnswer)}
              disabled={selectedAnswer ? false : true}
            >Submit answer</button>
          </>
        ) : (
          fetchQuiz(),
         'Loading next quiz...' 
        )
      }
    </div>
  )
}

export default connect(st => st, actions)(Quiz)
