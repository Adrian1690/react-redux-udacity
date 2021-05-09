import React from 'react';
import { connect } from 'react-redux';

const LeaderBoards = props => {

    const { leaderboards } = props;

    return(
        <div>
            <h2>Leaderboards</h2>
            <ul className="questions-section">
            {
                leaderboards.map(user => {
                    const answeredQuestions = Object.keys(user.answers).length;
                    const createdQuestions = user.questions.length;

                    return  (
                        <li key={user.id}>
                            <div className='question'>
                                <div className='name-user'>{user.name}</div>
                                <div className='question-info space-between'>
                                    <span className={`avatar ${user.id}`} />
                                    <div className='question-info-detail margin-0'>

                                        <span>
                                            Answered Questions
                                            <span>{answeredQuestions}</span>
                                        </span>
                                        <span>
                                            Created Questions
                                            <span>{createdQuestions}</span>
                                        </span>
                                    </div>
                                    <div className='score-section'>
                                        score
                                        <span>
                                            {answeredQuestions + createdQuestions}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </li>
                    )
                })
            }
            </ul>
        </div>
    )

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