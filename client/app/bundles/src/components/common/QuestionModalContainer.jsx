import React from "react";

import NewQuestionModal from "./NewQuestionModal";
import * as utils from './utils';


class QuestionModalContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      saving: false,
      question: Object.assign({}, this.props.editQuestion),
      tags: [],
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
    let newQuestion = Object.assign({}, this.state.question);

    newQuestion[field] = event.target.value;
    return this.setState({question: newQuestion});
  }

  questionFormIsValid(){
    let formIsValid = true;
    let errors = {};

    if(this.state.question.summary === null){
      errors.summary = 'Please add a question.';
      formIsValid = false;
    }else{
      if (this.state.question.summary && this.state.question.summary.length < 10) {
        errors.summary = 'The question must be at least 10 characters.';
        formIsValid = false;
      }
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
    let payload={
      tag_list: this.props.editQuestion ? utils.formatTagsForServer(this.props.editQuestion.tags) : null,
      ...this.state.question,
    };
    //Check if this is a new question or an edit
    if(this.props.editQuestion && this.props.editQuestion.id){
      payload.id = this.props.editQuestion.id
      this.props.actions.editQuestion(payload);
    }else{
      this.props.actions.createQuestion(payload);
    }
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
          question={this.props.editQuestion}
          handleDeleteTag={this.props.handleDeleteTag}
          handleAdditionTag={this.props.handleAdditionTag}
          handleDragTag={this.props.handleDragTag}
          tags={this.props.editQuestion ? this.props.editQuestion.formattedTags : []}
        />
    );
  }
}

export default QuestionModalContainer;