import React from "react";
import StickyNavbar from "./StickyNavBar";
import QuestionsNavContent from "../questions/QuestionsNavContent";
import logo from "../../images/carrot.png";

class PageBanner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      condenseNav: false
    };
    this.handleOnSearchFocus = this.handleOnSearchFocus.bind(this);
    this.handleOnSearchBlur = this.handleOnSearchBlur.bind(this);
  }

  handleOnSearchFocus() {
    console.log("search in focus");
    this.setState({ condenseNav: true });
  }

  handleOnSearchBlur() {
    console.log("search is blur");
    this.setState({ condenseNav: false });
  }

  render() {
    return (
      <div className="banner">
        <div className="overlay">
          <div className="page-title">
            <img src={logo} alt="carrot icon" className="banner-image" />
            <p className="banner-text"><i>Questions</i></p>
          </div>
        </div>
        <StickyNavbar
          isCondensed={this.state.condenseNav}
        >
          <QuestionsNavContent 
            handleOnSearchFocus={this.handleOnSearchFocus}
            handleOnSearchBlur={this.handleOnSearchBlur}
          />
        </StickyNavbar>
      </div>
    );
  }
}

export default PageBanner;