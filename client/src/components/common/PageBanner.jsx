import React from "react";
import logo from "../../images/carrot.png";
import NavbarContainer from './NavbarContainer';


class PageBanner extends React.Component {

  render(){
    return(
      <div className="banner">
        <div className="overlay">
          <div className="page-title">
            <img src={logo} alt="carrot icon" className="banner-image" />
            <p className="banner-text"><i>Questions</i></p>
          </div>
        </div>
        <NavbarContainer 
          actions={this.props.actions}
        />
      </div>
    );
  }
}

export default PageBanner;

