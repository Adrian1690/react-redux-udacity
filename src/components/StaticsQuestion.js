import React from 'react';

const StaticsQuestion = ({ question, optionAnswered }) => {
    const optionOneVotes = question.optionOne.votes.length
    const optionTwoVotes = question.optionTwo.votes.length
    return (<div>
        <img className='avatar' src='...' alt='img' />

        <div>
            Would you rather be {question.optionOne.text}{' '}
            {
                optionAnswered === 'optionOne' && (
                    <b>Your vote</b>
                )
            }
            <div>
                {optionOneVotes} / {optionOneVotes + optionTwoVotes}
            </div>
        </div>
        <div>
            Would you rather be {question.optionTwo.text}{' '}
            {
                optionAnswered === 'optionTwo' && (
                    <b>Your vote</b>
                )
            }
            <div>
                {optionTwoVotes} / {optionOneVotes + optionTwoVotes}
            </div>
        </div>
    </div>
    )
}

export default StaticsQuestion;