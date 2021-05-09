import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import { getUserClass } from '../utils/thumbs';
/**
 * Learning use state
 */

const QuestionPortrait = props => {

    const [toQuestionDetail, setToQuestionDetail] = useState(false)
    const { userOwner, question } = props
    const optionOne = question.optionOne.text
    //const optionTwo = questoin.optionTwo.text

    if(toQuestionDetail){
        return (
            <Redirect to={`/question/${question.id}`} />
        )
    }

    const avatarClass = getUserClass(userOwner.id);
    return (
        <div className='question'>
            <div className='name-user'>{userOwner.name} asks</div>
            <div className='question-info'>
                <span className={`avatar ${avatarClass}`} />
                <div className='question-info-detail'>
                    Would you rather
                    <span>{optionOne} <br />
                    or ...
                    </span>
                    <button
                        className='btn btn-success'
                        onClick={() => setToQuestionDetail(true)}
                        >View Poll</button>
                </div>
            </div>
        </div>
    )
}


const mapStateToProps = ({users, questions}, { id }) => {
    const question = questions[id];
    const userOwner = users[question.author]

    return {
        question,
        userOwner
    }
}

export default connect(mapStateToProps)(QuestionPortrait)
