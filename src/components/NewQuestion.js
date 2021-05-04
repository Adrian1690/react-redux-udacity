import React from 'react';
import { connect } from 'react-redux';
import { handleAddQuestion } from '../actions/questions';
import { Redirect } from 'react-router-dom'


class NewQuestion extends React.Component {

    state = {
        optionOne: '',
        optionTwo: '',
        toHome: false
    }

    handleInput = e => {
        const target =  e.target
        const name = target.name

        this.setState(() => ({
            [name]: target.value
        }))
    }

    handleSubmit = e => {
        e.preventDefault();

        const { dispatch } = this.props
        const { optionOne, optionTwo } = this.state

        dispatch(handleAddQuestion(optionOne, optionTwo))

        this.setState(() => ({
            optionOne: '',
            optionTwo: '',
            toHome: true
        }))
    }

    render(){

        const { optionOne, optionTwo, toHome } = this.state

        console.log('render')
        if(toHome === true){
            return <Redirect to='/' />
        }

        return (
            <div>
                Create

                <form onSubmit={this.handleSubmit}>
                    <input
                        value={optionOne}
                        onChange={this.handleInput}
                        type='text'
                        name='optionOne'
                        placeholder='Option One'
                    />
                    or
                    <input
                        value={optionTwo}
                        onChange={this.handleInput}
                        type='text'
                        name='optionTwo'
                        placeholder='Option Two'
                    />

                    <button type="submit">Add</button>
                </form>
            </div>

        )
    }

}

export default connect()(NewQuestion);