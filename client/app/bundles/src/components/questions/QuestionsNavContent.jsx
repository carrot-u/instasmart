import React from "react";
import { Link } from 'react-router-dom';

import NavbarSearchField from '../common/NavbarSearchField';
import logo from '../../images/carrot.png';



const QuestionsNavContent = props => {
  return (
    <div className="navbar-nav" style={{width: "100%"}}>
        <li className="hidden-nav">
          <Link to='/'>
            <img src={logo} className="navbar-logo" alt="logo" />
          </Link>
        </li>
        <li className="padding-3 nav-item">
          <a className="nav-link" href="">Recent</a>
        </li>
        <li className="padding-3 nav-item">
          <a className="nav-link" href="">Most Answered</a>
        </li>
        <li className="padding-3 nav-item">
          <a className="nav-link" href="">Most Commented</a>
        </li>
        <li className="padding-3 nav-item">
          <a className="nav-link" href="popular.html">Popular</a>
        </li>
      <li className=" navbar-nav pull-right nav-item ml-auto">
        <li className="nav-item padding-3">
          <NavbarSearchField 
            handleOnSearchFocus={props.handleOnSearchFocus}
            handleOnSearchBlur={props.handleOnSearchBlur}
          />
        </li>
        <li className="nav-item">
          <button
            onClick={props.onClickNewQuestion}
            className="btn btn-success btn ask-button"
          >
            Ask a Question
          </button>
        </li>
      </li>
    </div>
  );
};

export default QuestionsNavContent;

// </ul>
// <ul className="nav-list navbar-nav pull-right">