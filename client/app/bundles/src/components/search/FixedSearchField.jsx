import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";

// Import Project files
import * as questionsActions from '../../actions/questionActions';
import searchButton from "../../images/search_button.svg";

const FixedSearchField = props => {
  return(
    <form className="form-inline" onSubmit={props.onSearch}>
      <input
        className="form-control"
        type="search"
        placeholder="Search"
        value={props.queryValue}
        onChange={props.updatedSearchQuery}
      />
      <button className="search-button btn">
        <img src={searchButton} onClick={props.onSearch}/>
      </button>
    </form>
  )
}

export default FixedSearchField;
