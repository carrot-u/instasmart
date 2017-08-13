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
            <Link to="/">
              <img src={logo} alt="carrot icon" className="banner-image" />
            </Link>
            <p className="banner-text"><i>Questions</i></p>
          </div>
        </div>
        <NavbarContainer />
      </div>
    );
  }
}

export default PageBanner;

