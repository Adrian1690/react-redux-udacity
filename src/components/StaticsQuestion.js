import React from 'react';
import { getUserClass } from '../utils/thumbs';

const StaticsQuestion = ({ question, optionAnswered, author }) => {
    const optionOneVotes = question.optionOne.votes.length;
    const optionTwoVotes = question.optionTwo.votes.length;
    const totalVotes = optionOneVotes + optionTwoVotes;
    const avatarClass = getUserClass(author.id);

    return (
    <div className='question'>
        <div className='name-user'>{author.name} asks</div>
        <div className='question-info'>
            <span className={`avatar ${avatarClass}`} />
            <div className='question-info-detail'>
                <p>Results</p>
                <div className='vote'>
                    Would you rather be <b>{question.optionOne.text}</b>{' '}
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
                <div className='vote'>
                    Would you rather be <b>{question.optionTwo.text}</b>{' '}
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
        </div>

    </div>
    )
}

export default StaticsQuestion;