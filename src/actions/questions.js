import { saveQuestion } from '../utils/api';
import { showLoading, hideLoading } from 'react-redux-loading'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'

export const receiveQuestions = questions => ({
    type: RECEIVE_QUESTIONS,
    questions
})

const addQuestion = question => ({
    type: ADD_QUESTION,
    question
})


export const handleAddQuestion = (optionOneText, optionTwoText) => (dispatch, getState) => {
    const { authedUser } = getState()

    dispatch(showLoading())

    return saveQuestion({
        optionOneText,
        optionTwoText,
        author: authedUser.id
    })
    .then(question => dispatch(addQuestion(question)))
    .then( () => dispatch(hideLoading()))
}