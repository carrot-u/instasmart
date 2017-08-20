import React from "react";
// import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';

import "../stylesheets/App.scss";
import QuestionsIndex from '../components/questions/QuestionsIndex';
import LandingPage from '../components/landing_page/LandingPage';
import UserProfileContainer from '../components/users/UserProfileContainer';
import ShowQuestionContainer from '../components/questions/show_questions/ShowQuestionContainer';




const App = () => {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path='/questions' component={QuestionsIndex}/>
          <Route path='/questions/:id' component={ShowQuestionContainer}/>
          <Route path='/users/:id' component={UserProfileContainer}/>
        </Switch>
      </Router>
    );
}



export default App;


