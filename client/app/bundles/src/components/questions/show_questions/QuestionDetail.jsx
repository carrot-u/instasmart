import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup';


import IndexQuestionTags from "../../tags/IndexQuestionTags";
import QuestionStatButtons from './QuestionStatButtons';
import QuestionButtons from "../QuestionButtons";
import QuestionAuthor from './QuestionAuthor'
import QuestionCreatorOptions from "../QuestionCreatorOptions";
import QuestionForm from './QuestionForm';
import * as utils from '../../common/utils';

class QuestionDetail extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      showEditQuestionForm: false,
      editQuestion: {
        id: props.question.id,
        summary: props.question.summary,
        body: props.question.body,
        tags: props.question.tags
      },
      questionLiked: utils.checkLikedByUser(this.props.question.votes_for, this.props.currentUser.id),
      errors: {},
    }
    this.onSubmitEditQuestion = this.onSubmitEditQuestion.bind(this);
    this.onDeleteQuestion = this.onDeleteQuestion.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
    this.updateQuestionState = this.updateQuestionState.bind(this);
    this.onClickLike = this.onClickLike.bind(this);

  }

  onSubmitEditQuestion(e){
    e.preventDefault();
    if (!this.questionFormIsValid()) {
      return;
    }
    this.state.editQuestion.tag_list = utils.formatTagsForServer(this.props.unformattedTags);
    this.props.actions.editQuestion(this.state.editQuestion);
    this.toggleEdit();
  }

  toggleEdit(){
    !this.state.showEditQuestionForm ? this.props.selectEditQuestion(this.props.question, false) : "";
    this.setState({showEditQuestionForm: !this.state.showEditQuestionForm});
  } 

  updateQuestionState(event) {
    const field = event.target.name;
    let newQuestion = Object.assign({}, this.state.editQuestion);

    newQuestion[field] = event.target.value;
    return this.setState({editQuestion: newQuestion});
  }

  onDeleteQuestion(e){
    this.props.warningModalActions.warningModalSetProceedActions(this.props.actions.deleteQuestion, this.props, '/home?#/questions');
    this.props.warningModalActions.setWarningText("Are you sure you want to delete this question?", "Confirm Deletion");
  }

  questionFormIsValid(){
    let formIsValid = true;
    let errors = {};

    if(this.state.editQuestion.summary === null){
      errors.summary = 'Please add a question.';
      formIsValid = false;
    }else{
      if (this.state.editQuestion.summary && this.state.editQuestion.summary.length < 10) {
        errors.summary = 'The question must be at least 10 characters.';
        formIsValid = false;
      }
    }

    this.setState({errors: errors});
    return formIsValid;
  }


  onClickLike(){
    if(this.state.questionLiked){
      this.props.actions.likeUnlikeQuestion(this.props.question.id, "unlike");
    }else{
      this.props.actions.likeUnlikeQuestion(this.props.question.id, "like");
    }
    this.setState({ questionLiked: !this.state.questionLiked });
  }

  render(){
    const createdByCurrent =(this.props.question.user && 
      this.props.currentUser.id === this.props.question.user.id) ? true : false;
    const questionDetails = this.state.showEditQuestionForm ? null : (
      <div> 
        <h3 className="py-1 question-summary">{this.props.question.summary}</h3>
        {this.props.question.body && <i><h6 className="mx-1 py-1 question-detail text-muted">{this.props.question.body}</h6></i> }
        <IndexQuestionTags question={this.props.question} />
      </div>);
    const questionForm = this.state.showEditQuestionForm  ? 
      (<QuestionForm 
        errors={this.state.errors} 
        onChange={this.updateQuestionState}
        question={this.props.question}
        toggleEdit={this.toggleEdit}
        onSubmit={this.onSubmitEditQuestion}
        handleDeleteTag={this.props.handleDeleteTag}
        handleAdditionTag={this.props.handleAdditionTag}
        handleDragTag={this.props.handleDragTag}
        tags={this.props.tags}/>) : null;

    return (
      <div className="show-question-detail">
        <div className="question-summary col-md-12 pb-2 ml-2">
          {questionDetails}
          {questionForm}
          <hr></hr>
          <div className="card-block row py-0 my-0">
             {!this.state.showEditQuestionForm && <QuestionStatButtons 
              question={this.props.question} 
              onClickLike={this.onClickLike}
              onClickPost={this.props.onClickPost}/>}
          </div>
          {createdByCurrent && !this.state.showEditQuestionForm &&
           <QuestionCreatorOptions 
            onDeleteQuestion={this.onDeleteQuestion}
            onEditQuestion={this.toggleEdit}
            />}
        </div>
      </div>
    );
  }
}

export default QuestionDetail;