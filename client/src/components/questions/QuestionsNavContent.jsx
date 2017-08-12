import React from "react";
import { Link } from 'react-router-dom';
import NavbarSearchField from '../common/NavbarSearchField';
import logo from '../../images/carrot.png';



const QuestionsNavContent = props => {
  return (
    <ul className="list-inline nav-list row mb-0">
      <li className="pull-left hidden-nav">
        <Link to='/'>
          <img src={logo} className="navbar-logo" alt="logo" />
        </Link>
      </li>
      <li className="padding-3">
        <a className="nav-link" href="">Recent</a>
      </li>
      <li className="padding-3">
        <a className="nav-link" href="">Most Answered</a>
      </li>
      <li className="padding-3">
        <a className="nav-link" href="">Most Commented</a>
      </li>
      <li className="padding-3 ">
        <a className="nav-link" href="popular.html">Popular</a>
      </li>
      <li className="padding-3">
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
    </ul>
  );
};

export default QuestionsNavContent;