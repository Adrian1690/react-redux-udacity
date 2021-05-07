import React from 'react';

const StaticsQuestion = ({ question, optionAnswered }) => {
    const optionOneVotes = question.optionOne.votes.length;
    const optionTwoVotes = question.optionTwo.votes.length;
    const totalVotes = optionOneVotes + optionTwoVotes;

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
                {optionOneVotes} / {totalVotes}
                ({Math.round(optionOneVotes / (totalVotes) * 100) } %)
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
                {optionTwoVotes} / {totalVotes}
                ({Math.round(optionTwoVotes / (totalVotes) * 100) } %)
            </div>
        </div>
    </div>
    )
}

export default StaticsQuestion;