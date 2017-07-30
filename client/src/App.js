import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import logo from './logo.svg';
import './App.css';
import * as questionActions from './actions/questionActions';


class App extends Component {
  constructor(props, context){
    super(props, context);
    this.state = {
      questions: null,
    };
    this.showQuestions = this.showQuestions.bind(this);
  }

  showQuestions(){
    console.log("questions: ", this.props.questions);
    console.log("questions: ", this.props.isLoading);


  }

  render() {

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
           <code>src/App.js</code> and save to reload.
        </p>
        <button className="btn" onClick={this.showQuestions} >Log Questions</button>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps){
  return {
    questions: state.questions.questions,
    isLoading: state.questions.isLoading,
  }
}
function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(questionActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
