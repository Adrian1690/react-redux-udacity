import React from 'react';
import { connect } from 'react-redux';

class Question extends React.Component{

    render(){
        const { question, optionAnswered } = this.props
        console.log(question)
        console.log(optionAnswered)

        if(question === null){
            return <p>This Question doesn't exist</p>
        }

        return (
            <h1>Question page</h1>
        )
    }
}

const mapStateToProps = ({authedUser, users, questions}, { id }) => {
    const question = questions[id] || null;
    const user = users[authedUser.id];

    //Check if user already answer this question
    const optionAnswered = user.answers[id] || null
    return{
        question,
        optionAnswered
    }
}

export default connect(mapStateToProps)(Question)