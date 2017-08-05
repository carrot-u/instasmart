import React from "react";
import {BrowserRouter as Router, Route} from 'react-router-dom';

import "./stylesheets/App.css";
import QuestionsIndex from './components/questions/QuestionsIndex';


const App = () => {

    return (
      <Router>
        <div>
          <Route exact path="/" component={QuestionsIndex} />

        </div>
      </Router>
    );
}



export default App;