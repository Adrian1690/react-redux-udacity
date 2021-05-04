import React from 'react';
import { connect } from 'react-redux';

const LeaderBoards = props => {

    const { leaderboards } = props;
    console.log(leaderboards)
    return <h2>Leaderboards</h2>
}

const mapStateToProps = ({users}) => {

    // Order descending by answered question +
    // created questions
    const leaderboards = Object.values(users).sort((a,b) => {
        return (Object.keys(b.answers).length + b.questions.length)
                - (Object.keys(a.answers).length + a.questions.length)
    })

    return {
        leaderboards
    }
}

export default connect(mapStateToProps)(LeaderBoards)