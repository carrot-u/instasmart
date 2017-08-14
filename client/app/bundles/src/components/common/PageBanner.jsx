import React from "react";
import logo from "../../images/carrot.png";
import NavbarContainer from './NavbarContainer';
import { Link } from 'react-router-dom';


class PageBanner extends React.Component {

  render(){
    return(
      <div className="banner">
        <div className="overlay">
          <div className="page-title">
            <a onClick={() => {window.location.href="/"}} >
              <img src={logo} alt="carrot icon" className="banner-image" />
            </a>
            <p className="banner-text"><i>Questions</i></p>
          </div>
        </div>
        <NavbarContainer />
      </div>
    );
  }
}

export default PageBanner;

