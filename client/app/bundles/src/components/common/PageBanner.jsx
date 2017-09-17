import React from "react";
import logo from "../../images/logo.jpg";
import NavbarContainer from './NavbarContainer';
import FixedSearchField from '../search/FixedSearchField';
import { Link } from 'react-router-dom';


class PageBanner extends React.Component {

  render(){
    return(
      <div className="banner">
        <div className="overlay">
          <div className="page-title">
            <img id="logo" src={logo} alt="Carrot With Monocle" className="pull-left"/>
            <div className="search-field-container center-items">
              <FixedSearchField />
            </div>
          </div>
        </div>
        <NavbarContainer 
          sort={this.props.sort}
          sortedBy={this.props.sortedBy}
        />
      </div>
    );
  }
}

export default PageBanner;

