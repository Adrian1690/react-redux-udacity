import React from 'react'
import { connect } from 'react-redux';
import QuestionPortrait from './QuestionPortrait'

class Home extends React.Component {

    state = {
        showUnanswered: true
    }

    toggleQuestions = () => {
        this.setState(currentState => ({
            showUnanswered: !currentState.showUnanswered
        }))
    }

    render(){
        const { showUnanswered } = this.state
        const { answersIds, notAnswersIds } = this.props
        const questionIds = showUnanswered ? notAnswersIds : answersIds

        return (
            <div>
                <button
                    disabled={showUnanswered}
                    onClick={this.toggleQuestions}>Unanswered Questions</button>{' '}
                <button
                    disabled={!showUnanswered}
                    onClick={this.toggleQuestions}>Answered questions</button>

                <ul className="questions-section">
                {
                    questionIds.map(questionId => (
                        <li key={questionId}>
                            <QuestionPortrait id={questionId} />
                        </li>
                    ))
                }
                </ul>
            </div>

        )
    }
}

const mapStateToProps = ({questions, users, authedUser}) => {
    let orderedQuestionsIds = Object.keys(questions).sort((a,b) => questions[b].timestamp - questions[a].timestamp)
    let answers = users[authedUser.id].answers

    let answersIds = [];
    let notAnswersIds = [];

    for (let question of orderedQuestionsIds){
        answers[question] ?
            answersIds.push(question)
            :
            notAnswersIds.push(question)
    }

    return {
        answersIds,
        notAnswersIds
    }
}

export default connect(mapStateToProps)(Home)