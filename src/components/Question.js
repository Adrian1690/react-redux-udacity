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
        const { question, author, optionAnswered } = this.props
        const { selectedOption } = this.state
        console.log(question)
        console.log(optionAnswered)

        if(question === null){
            return <p>This Question doesn't exist</p>
        }

        if(optionAnswered !== null) {
            return <StaticQuestion
                        author={author}
                        question={question}
                        optionAnswered={optionAnswered}
                    />
        }

        return (
            <div className='question'>
                <div className='name-user'>{author.name} asks</div>
                <form
                    className='new-question'
                    onSubmit={this.handleSubmit}>

                    <label>
                        <input
                            type="radio"
                            value="optionOne"
                            checked={selectedOption === 'optionOne'}
                            onChange={this.handleInput}
                        />
                            {question.optionOne.text}
                    </label>

                    <label>
                        <input
                            type="radio"
                            value="optionTwo"
                            checked={selectedOption === 'optionTwo'}
                            onChange={this.handleInput}
                        />
                            {question.optionTwo.text}
                    </label>
                    <button
                        className='btn btn-success'
                        type="submit"
                    >Submit</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = ({authedUser, users, questions}, { id }) => {
    const question = questions[id] || null;
    const user = users[authedUser.id];
    const author = users[question.author]

    //Check if user already answer this question
    const optionAnswered = user.answers[id] || null
    return{
        author,
        question,
        optionAnswered
    }
}

export default connect(mapStateToProps)(Question)