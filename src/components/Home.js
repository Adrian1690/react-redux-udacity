import React from 'react'
import { connect } from 'react-redux';

const Home = props => {
    //console.log(props)
    return (
        <h1>Home</h1>
    )
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