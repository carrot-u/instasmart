import React from "react";
import NewQuestionModal from "./NewQuestionModal";


class QuestionModalContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      saving: false,
      newQuestion: {
        summary: null,
        body: null,
        tag_list: null,
      },
      errors: {},
    };
    this.onClickNewQuestion = this.onClickNewQuestion.bind(this);
    this.onToggleModal = this.onToggleModal.bind(this);
    this.updateQuestionState = this.updateQuestionState.bind(this);
    this.submitQuestion = this.submitQuestion.bind(this);
    this.questionFormIsValid = this.questionFormIsValid.bind(this);
  }

  onClickNewQuestion(){
    this.props.onClickNewQuestion();
  }

  onToggleModal(){
    this.props.onToggleModal();
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
        <NewQuestionModal 
          isOpen={this.props.showNewQuestionModal} 
          onToggleModal={this.onToggleModal}
          onChange={this.updateQuestionState}
          onSubmit={this.submitQuestion}
          errors={this.state.errors}
        />
    );
  }
}

export default QuestionModalContainer;