import React from "react";
import StickyNavbar from "./StickyNavBar";
import QuestionsNavContent from "../questions/QuestionsNavContent";
import QuestionModalContainer from "./QuestionModalContainer";



class NavbarContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      condenseNav: false,
      showNewQuestionModal: false,
      saving: false,
      newQuestion: {
        summary: null,
        body: null,
        tag_list: null,
      },
      errors: {},
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
      <StickyNavbar
        isCondensed={this.state.condenseNav}
      >
        <QuestionsNavContent 
          handleOnSearchFocus={this.handleOnSearchFocus}
          handleOnSearchBlur={this.handleOnSearchBlur}
          onClickNewQuestion={this.onClickNewQuestion}
        />
        <QuestionModalContainer
          onClickNewQuestion={this.onClickNewQuestion}
          onToggleModal={this.onToggleModal}
          showNewQuestionModal={this.state.showNewQuestionModal}
          actions={this.props.actions}
        />
      </StickyNavbar>
    );
  }
}

export default NavbarContainer;