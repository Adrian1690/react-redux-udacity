import React from 'react';
import { connect } from 'react-redux';
import { handleAddQuestionAnswer } from '../actions/questions'
import StaticQuestion from './StaticsQuestion'
class Question extends React.Component{

    state = {
        selectedOption: 'optionOne'
    }

    handleInput = e => {
        const target = e.target;
        const value = target.value;

        this.setState({
          selectedOption: value
        });
    }


    handleSubmit = e => {
        e.preventDefault();

        const { selectedOption } = this.state
        const { question, dispatch } = this.props

        dispatch(handleAddQuestionAnswer(question.id, selectedOption))
    }

    render(){
        const { question, optionAnswered } = this.props
        const { selectedOption } = this.state
        console.log(question)
        console.log(optionAnswered)

        if(question === null){
            return <p>This Question doesn't exist</p>
        }

        if(optionAnswered !== null) {
            return <StaticQuestion
                        question={question}
                        optionAnswered={optionAnswered}
                    />
        }

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="radio"
                        value="optionOne"
                        checked={selectedOption === 'optionOne'}
                        onChange={this.handleInput}
                    />
                        {question.optionOne.text}
                    <input
                        type="radio"
                        value="optionTwo"
                        checked={selectedOption === 'optionTwo'}
                        onChange={this.handleInput}
                        />
                        {question.optionTwo.text}

                    <button type="submit">Submit</button>
                </form>
            </div>
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