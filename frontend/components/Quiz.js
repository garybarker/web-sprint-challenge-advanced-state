import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import * as actions from '../state/action-creators'

function Quiz(props) {

  const {quiz, selectedAnswer, selectAnswer, fetchQuiz} = props


  useEffect(() => {
    fetchQuiz()
  }, []);

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

            <button id="submitAnswerBtn">Submit answer</button>
          </>
        ) : 'Loading next quiz...'
      }
    </div>
  )
}

export default connect(st => st, actions)(Quiz)
