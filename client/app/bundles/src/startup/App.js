import React from "react";
// import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';

import "../stylesheets/App.scss";
import QuestionsIndex from '../components/questions/QuestionsIndex';
import LandingPage from '../components/landing_page/LandingPage';
import ShowQuestionContainer from '../components/questions/show_questions/ShowQuestionContainer';




const App = () => {
    console.log("made it to app");
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path='/questions' component={QuestionsIndex}/>
          <Route path='/questions/:id' component={ShowQuestionContainer}/>
        </Switch>
      </Router>
    );
}



export default App;


