import { RECEIVE_USERS } from '../actions/users'
import { ADD_QUESTION, ADD_QUESTION_ANSWER } from '../actions/questions'

const users = (state = {}, action) => {
    switch(action.type){
        case RECEIVE_USERS:
            return {
                ...state,
                ...action.users
            }
        case ADD_QUESTION:
            const { question } = action
            return {
                ...state,
                [question.author]: {
                    ...state[question.author],
                    questions: state[question.author].questions.concat([question.id])
                }
            }
        case ADD_QUESTION_ANSWER:
            const { authedUser, qid, answer } = action

            return {
                ...state,
                [authedUser]: {
                    ...state[authedUser],
                    answers: {
                        ...state[authedUser].answers,
                        [qid]: answer
                    }
                }
            }

        default:
            return state
    }
}

export default users