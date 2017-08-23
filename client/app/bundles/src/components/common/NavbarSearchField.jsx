// Modules
import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

// Project File
import * as questionActions from "../../actions/questionActions";
import * as utils from "../common/utils";

class NavbarSearchField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: null,
    };
  this.onSearch = this.onSearch.bind(this);
  }

  onSearch(search){
    this.props.questionActions.loadSearchResults(search);
  }

  // onSearch: function(){
    // let search = this.refs.search.getDOMNode().value;
    // this.props.onSearch(search);
  // },
  render() {
    return (
      <div className="">
        <form className="form-inline my-sm-0">
          <input
            className="form-control mr-sm-2 nav-search-bar"
            type="search"
            placeholder="Search"
            ref="search"
            onFocus={props.handleOnSearchFocus}
            onBlur={props.handleOnSearchBlur}
            onSearch={props.loadSearchResults(search)}
          />
        </form>
      </div>
    );
  }
};

export default NavbarSearchField;