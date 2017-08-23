// Modules
import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

// Project File
import * as questionActions from "../../actions/questionActions";

const NavbarSearchField = props => {
  return (
    <div className="">
      <form className="form-inline my-sm-0">
        <input
          className="form-control mr-sm-2 nav-search-bar"
          type="search"
          placeholder="Search"
          onFocus={props.handleOnSearchFocus}
          onBlur={props.handleOnSearchBlur}
          onSearch={props.handleOnSearchSearch}
        />
      </form>
    </div>
  );
};

export default NavbarSearchField;