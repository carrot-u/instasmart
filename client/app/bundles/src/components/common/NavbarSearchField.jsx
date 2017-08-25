import React from "react";

const NavbarSearchField = props => {
  return (
    <div className="">
      <form className="form-inline my-sm-0">
        <input
          className="form-control mr-sm-2 search-bar"
          type="search"
          placeholder="Search"
          onFocus={props.handleOnSearchFocus}
          onBlur={props.handleOnSearchBlur}
        />
      </form>
    </div>
  );
};

export default NavbarSearchField;