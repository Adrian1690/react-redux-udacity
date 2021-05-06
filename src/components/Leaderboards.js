import React from 'react';
import { connect } from 'react-redux';

const LeaderBoards = props => {

    const { leaderboards } = props;
    console.log(leaderboards)
    return(
        <div>
            <h2>Leaderboards</h2>
            {
                leaderboards.map(user => {
                    const answeredQuestions = Object.keys(user.answers).length;
                    const createdQuestions = user.questions.length;

                    return  <div key={user.id} style={{marginBottom: '10px'}}>
                        <span className='avatar' />
                        <div>
                            <span>{user.name}</span>
                            <div>
                                Answered Questions {answeredQuestions}
                            </div>
                            <div>
                                Created Questions {createdQuestions}
                            </div>
                        </div>
                        <span>
                                Total {answeredQuestions + createdQuestions}
                        </span>
                    </div>
                })
            }
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