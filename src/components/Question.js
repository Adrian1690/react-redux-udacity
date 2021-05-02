import React from 'react';
import { connect } from 'react-redux';

class Question extends React.Component{

    render(){
        const { question } = this.props
        console.log(question)

        if(question === null){
            return <p>This Question doesn't exist</p>
        }

        return (
            <h1>Question page</h1>
        )
    }
}

const mapStateToProps = ({questions}, { id }) => {
    const question = questions[id] || null;

    return{
        question
    }
}

export default connect(mapStateToProps)(Question)