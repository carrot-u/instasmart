import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as api from './api/api'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      questions: null,
    }
  }

  componentDidMount(){
    const questions = api.getQuestions();
    this.setState({
      questions: questions
    });
  }

  render() {
    console.log("questions: ", this.state.questions);

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
           <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
