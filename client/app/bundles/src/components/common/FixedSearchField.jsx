import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";

// Import Project files
import * as questionsActions from '../../actions/questionActions';

const FixedSearchField props => {
  return(
    <form className="form-inline my-sm-0">
      <input
        className="form-control nav-search-bar"
        type="search"
        placeholder="Search"
      />
    </form>
  )
}

