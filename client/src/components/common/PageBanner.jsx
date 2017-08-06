import React from "react";
import StickyNavbar from "./StickyNavBar";
import QuestionsNavContent from "../questions/QuestionsNavContent";
import logo from "../../images/carrot_2.png";
import NewQuestionModal from "./NewQuestionModal";


class PageBanner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      condenseNav: false,
      showNewQuestionModal: false,
    };
    this.handleOnSearchFocus = this.handleOnSearchFocus.bind(this);
    this.handleOnSearchBlur = this.handleOnSearchBlur.bind(this);
    this.onClickNewQuestion = this.onClickNewQuestion.bind(this);
    this.onToggleModal = this.onToggleModal.bind(this);
  }

  handleOnSearchFocus() {
    console.log("search in focus");
    this.setState({ condenseNav: true });
  }

  handleOnSearchBlur() {
    console.log("search is blur");
    this.setState({ condenseNav: false });
  }

  onClickNewQuestion(){
    this.setState({ showNewQuestionModal: true });
  }

  onToggleModal(){
    this.setState({ showNewQuestionModal: !this.state.showNewQuestionModal });
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
            onClickNewQuestion={this.onClickNewQuestion}
          />
          <NewQuestionModal 
            isOpen={this.state.showNewQuestionModal} 
            onToggleModal={this.onToggleModal}
          />
        </StickyNavbar>


      </div>
    );
  }
}

export default PageBanner;