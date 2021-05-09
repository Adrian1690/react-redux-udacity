import React from 'react';
import { connect } from 'react-redux';
import { handleAddQuestionAnswer } from '../actions/questions';
import StaticsQuestion from './StaticsQuestion';
import { Redirect } from 'react-router-dom';
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

        if(question === null){
            return <Redirect to='/404' />
        }

        if(optionAnswered !== null) {
            return <StaticsQuestion
                        author={author}
                        question={question}
                        optionAnswered={optionAnswered}
                    />
        }

        return (
            <div className='question'>
                <div className='name-user'>{author.name} asks</div>
                <div className='question-info'>
                    <span className={`avatar ${author.id}`} />
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
            </div>
        )
    }
}

const mapStateToProps = ({authedUser, users, questions}, { id }) => {
    const question = questions[id] || null;
    const user = users[authedUser.id];
    const author = question ? users[question.author] : null

    //Check if user already answer this question
    const optionAnswered = user.answers[id] || null
    return{
        author,
        question,
        optionAnswered
    }
}

export default connect(mapStateToProps)(Question)