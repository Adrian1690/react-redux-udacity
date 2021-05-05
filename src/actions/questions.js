import { saveQuestion, saveQuestionAnswer } from '../utils/api';
import { showLoading, hideLoading } from 'react-redux-loading'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'
export const ADD_QUESTION_ANSWER = 'ADD_QUESTION_ANSWER'

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

const addQuestionAnswer = ({ authedUser, qid, answer }) => ({
    type: ADD_QUESTION_ANSWER,
    authedUser,
    qid,
    answer
})

export const handleAddQuestionAnswer = (qid, answer) => (dispatch, getState) => {
    const { authedUser } = getState()
    const authedUserId = authedUser.id
    dispatch(showLoading())

    return saveQuestionAnswer({ authedUser: authedUserId , qid, answer })
        .then(() => dispatch(addQuestionAnswer({  authedUser: authedUserId , qid, answer })))
        .then(() => dispatch(hideLoading()))
}