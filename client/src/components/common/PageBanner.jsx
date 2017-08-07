import React from "react";
import StickyNavbar from "./StickyNavBar";
import QuestionsNavContent from "../questions/QuestionsNavContent";
import logo from "../../images/carrot.png";
import NewQuestionModal from "./NewQuestionModal";



class PageBanner extends React.Component {
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
    this.updateQuestionState = this.updateQuestionState.bind(this);
    this.submitQuestion = this.submitQuestion.bind(this);
    this.questionFormIsValid = this.questionFormIsValid.bind(this);
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

  updateQuestionState(event) {
    const field = event.target.name;
    let newQuestion = Object.assign({}, this.state.newQuestion);
    newQuestion[field] = event.target.value;
    return this.setState({newQuestion: newQuestion});
  }

  questionFormIsValid(){
    let formIsValid = true;
    let errors = {};

    if (this.state.newQuestion.summary.length < 10) {
      errors.summary = 'The question must be at least 10 characters.';
      formIsValid = false;
    }

    this.setState({errors: errors});
    return formIsValid;
  }


  submitQuestion(event) {
    event.preventDefault();
    if (!this.questionFormIsValid()) {
      return;
    }
    this.setState({saving: true});

    this.props.actions.createQuestion(this.state.newQuestion);
    this.onToggleModal();
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
            onChange={this.updateQuestionState}
            onSubmit={this.submitQuestion}
            errors={this.state.errors}
          />
        </StickyNavbar>


      </div>
    );
  }
}

export default PageBanner;