import React from 'react';
import { connect } from 'react-redux';
import Question from './Question';

const QuestionPage =  props => {

    const { id } = props;
    return (
        <div>
            <Question id={id} />
        </div>
)}

const mapStateToProps = ({ questions }, props) => {
    const { id } = props.match.params

    return {
        id
    }
}

export default connect(mapStateToProps)(QuestionPage)