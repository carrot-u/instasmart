import React from "react";
import { Link } from 'react-router-dom';

import NavbarSearchField from '../common/NavbarSearchField';
import logo from '../../images/carrot.png';



const QuestionsNavContent = props => {
  function handleActiveClass(currentButton){
    let classString = "nav-link";
    if(currentButton === props.sortedBy){
      classString += " active";
    }
    return classString;
  }

  return (
    <div className="navbar-nav" style={{width: "100%"}}>
        <li className="hidden-nav">
          <Link to='/'>
            <img src={logo} className="navbar-logo" alt="logo" />
          </Link>
        </li>
        <li className="padding-3 nav-item ">
          <a className={handleActiveClass("recent")} href="" onClick={(e) => {
            e.preventDefault();
            props.sort("recent");}
          }>
            Recent
          </a>
        </li>
        <li className="padding-3 nav-item ">
          <a className={handleActiveClass("answered")} href="" onClick={(e) => {
            e.preventDefault();
            props.sort("answered");}
          }>
            Most Answered
          </a>
        </li>
        <li className="padding-3 nav-item ">
          <a className={handleActiveClass("commented")} href="" onClick={(e) => {
            e.preventDefault();
            props.sort("commented");}
          }>
            Most Commented
          </a>
        </li>
        <li className="padding-3 nav-item ">
          <a className={handleActiveClass("votes")} href="" onClick={(e) => {
            e.preventDefault();
            props.sort("votes");}
          }>
            Popular
          </a>
        </li>
      <li className=" navbar-nav pull-right nav-item ml-auto">
        <div className="nav-item">
          <button
            onClick={props.onClickNewQuestion}
            className="btn ask-button btn-success"
          >
            Ask a Question
          </button>
        </div>
      </li>
    </div>
  );
};

export default QuestionsNavContent;

