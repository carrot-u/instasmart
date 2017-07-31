import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import './stylesheets/App.css';
import * as questionActions from './actions/questionActions';
import QuestionIndexRow from './components/questions/QuestionIndexRow';
import PageBanner from './components/common/PageBanner';


class App extends Component {
  constructor(props, context){
    super(props, context);
    this.state = {
      questions: null,
    };
    this.logProps = this.logProps.bind(this);
  }

  logProps(){
    console.log("questions: ", this.props.questions);
    console.log("loading: ", this.props.isLoading);
  }

  render() {
    const listQuestions = this.props.questions.length > 0 ? this.props.questions.map(question => {
      return(<QuestionIndexRow
        key={question.id}
        question={question} />);
    }) : null;
    return (
      <div>   
        <PageBanner />
        <div className="container question-index">
          {listQuestions}
          <button className="btn" onClick={this.logProps} >Log Props</button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps){
  return {
    questions: state.questions.questions,
    isLoading: state.questions.isLoading,
  };
}
function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(questionActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
