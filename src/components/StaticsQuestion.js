import React from 'react';
import { Progress } from 'reactstrap';

const StaticsQuestion = ({ question, optionAnswered, author }) => {
    const optionOneVotes = question.optionOne.votes.length;
    const optionTwoVotes = question.optionTwo.votes.length;
    const totalVotes = optionOneVotes + optionTwoVotes;

    return (
    <div className='question'>
        <div className='name-user'>
            Asked by {author.name}
        </div>
        <div className='question-info'>
            <span className={`avatar ${author.id}`} />
            <div className='question-info-detail'>
                <p>Results</p>
                <div className='vote'>
                    Would you rather be <b>{question.optionOne.text}</b>{' '}
                    {
                        optionAnswered === 'optionOne' && (
                            <span className='vote-selected'>Your vote</span>
                        )
                    }
                    <div>
                        <Progress color="success" value={Math.round(optionOneVotes / (totalVotes) * 100)} >
                            {Math.round(optionOneVotes / (totalVotes) * 100) } %
                        </Progress>
                        {optionOneVotes} out of {totalVotes}
                    </div>
                </div>
                <div className='vote'>
                    Would you rather be <b>{question.optionTwo.text}</b>{' '}
                    {
                        optionAnswered === 'optionTwo' && (
                            <span className='vote-selected'>Your vote</span>
                        )
                    }
                    <div>
                        <Progress color="success" value={Math.round(optionTwoVotes / (totalVotes) * 100)} >
                            {Math.round(optionTwoVotes / (totalVotes) * 100) } %
                        </Progress>
                        {optionTwoVotes} out of  {totalVotes}
                    </div>
                </div>
            </div>
        </div>

    </div>
    )
}

export default StaticsQuestion;