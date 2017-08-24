import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup';


import IndexQuestionTags from "../../tags/IndexQuestionTags";
import QuestionStatButtons from './QuestionStatButtons';
import QuestionButtons from "../QuestionButtons";
import QuestionAuthor from './QuestionAuthor'
import QuestionCreatorOptions from "../QuestionCreatorOptions";
import QuestionForm from './QuestionForm';


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
      errors: {},
    }
    this.onSubmitEditQuestion = this.onSubmitEditQuestion.bind(this);
    this.onDeleteQuestion = this.onDeleteQuestion.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
    this.updateQuestionState = this.updateQuestionState.bind(this);
  }

  onSubmitEditQuestion(e){
    e.preventDefault();
    if (!this.questionFormIsValid()) {
      return;
    }
    this.props.actions.editQuestion(this.state.editQuestion);
    this.toggleEdit();
  }

  toggleEdit(){
    this.setState({showEditQuestionForm: !this.state.showEditQuestionForm});
  } 

  updateQuestionState(event) {
    const field = event.target.name;
    let newQuestion = Object.assign({}, this.state.editQuestion);

    newQuestion[field] = event.target.value;
    return this.setState({editQuestion: newQuestion});
  }

  onDeleteQuestion(e){
    this.props.actions.deleteQuestion(this.props);
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

  render(){
    const createdByCurrent =(this.props.question.user && 
      this.props.currentUser.id === this.props.question.user.id) ? true : false;
    const questionDetails = this.state.showEditQuestionForm ? null : (
      <div> 
        <h3 className="py-1 question-summary">{this.props.question.summary}</h3>
        <i><h6 className="py-1 question-detail">{this.props.question.body}</h6></i>
      </div>);
    const questionForm = this.state.showEditQuestionForm  ? 
      (<QuestionForm 
        errors={this.state.errors} 
        onChange={this.updateQuestionState}
        question={this.props.question}
        toggleEdit={this.toggleEdit}
        onSubmit={this.onSubmitEditQuestion}/>) : null;

    return (
      <div className="row pt-1 pl-1 mr-0 show-question-detail bg-faded">
      <Link to="/questions">
        <button id="back-btn" className="btn m-2">Back</button>
      </Link>
        <div className="question-summary col-md-12 pb-2 ml-2">
          {questionDetails}

          {questionForm}
          <div className="row pb-0 mb-0">
             {!this.state.showEditQuestionForm && <QuestionStatButtons 
              question={this.props.question} 
              onClickLike={this.props.onClickLike}
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