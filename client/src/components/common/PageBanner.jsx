import React from "react";
<<<<<<< HEAD
import logo from "../../images/carrot.png";
import NavbarContainer from './NavbarContainer';
=======
import StickyNavbar from "./StickyNavBar";
import QuestionsNavContent from "../questions/QuestionsNavContent";
import logo from "../../images/carrot.png";
import NewQuestionModal from "./NewQuestionModal";

>>>>>>> e38e3bd2e1f8e2713d8ce259ae57093feb96126b


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

