import React from 'react';
import { Route, Switch } from 'react-router-dom';
// import Layout from '../layout/Layout';
import QuestionsIndex from '../components/questions/QuestionsIndex';
import LandingPage from '../components/landing_page/LandingPage';

export default (
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route path='/questions' component={QuestionsIndex}/>
    </Switch>
);