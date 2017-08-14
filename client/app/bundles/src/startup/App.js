import React from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import "../stylesheets/App.scss";
import QuestionsIndex from '../components/questions/QuestionsIndex';
import LandingPage from '../components/landing_page/LandingPage';



const App = () => {
    console.log("made it to app");
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path='/questions' component={QuestionsIndex}/>
          
        </Switch>
      </Router>
    );
}



export default App;


