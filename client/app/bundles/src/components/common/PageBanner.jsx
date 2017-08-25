import React from "react";
import logo from "../../images/logo.jpg";
import NavbarContainer from './NavbarContainer';
import { Link } from 'react-router-dom';


class PageBanner extends React.Component {

  render(){
    return(
      <div className="banner">
        <div className="overlay">
          <div className="page-title">
            <Link to="/" id="banner" className="container-fluid">
              <img id="logo" src={logo} alt="Carrot With Monocle"/>
            </Link>
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

