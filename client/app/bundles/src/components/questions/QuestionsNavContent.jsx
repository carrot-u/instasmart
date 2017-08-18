import React from "react";
import { Link } from 'react-router-dom';

import NavbarSearchField from '../common/NavbarSearchField';
import logo from '../../images/carrot.png';



const QuestionsNavContent = props => {
  return (
    <div className="navbar-nav">
      <ul className="navbar-nav nav-list mb-0 mr-auto">
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

        <li className="padding-3 nav-item">
          <NavbarSearchField 
            handleOnSearchFocus={props.handleOnSearchFocus}
            handleOnSearchBlur={props.handleOnSearchBlur}
          />
        </li>
        <li className="nav-item pull-right">
          <button
            onClick={props.onClickNewQuestion}
            className="btn btn-success btn ask-button"
          >
            Ask a Question

          </button>
        </li>
      </ul>
    </div>
  );
};

export default QuestionsNavContent;

// </ul>
// <ul className="nav-list navbar-nav pull-right">