import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'

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

    return (
        <div className='question-portrait'>
            <span>{userOwner.name} asks</span>
            <div className='question-info'>
                <span className='avatar'>img</span>
                <div className='question-info-detail'>
                    Would you rather
                    <span>...{optionOne}...</span>
                    <button onClick={() => setToQuestionDetail(true)}>View Poll</button>
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
