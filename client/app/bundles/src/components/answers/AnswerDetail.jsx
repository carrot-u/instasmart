// Import modules
import React from 'react';
import AnswerButtons from './AnswerButtons';
import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup';

// Import project files
import QuestionForm from "../questions/QuestionForm";
import AllComments from '../comments/AllComments';


class AnswerDetail extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      comment: null,
      showForm: false,
      answerLiked: false,
    }
    this.onClickComment = this.onClickComment.bind(this);
    this.handleSubmitComment = this.handleSubmitComment.bind(this);
    this.updateCommentState = this.updateCommentState.bind(this);
    this.onClickLike = this.onClickLike.bind(this);
  }

  /************** Comment Functions *********************/
  onClickComment(e) {
    e.preventDefault();
    this.setState({ showForm: !this.state.showForm });
  }

  updateCommentState(e){
    this.setState({comment: e.target.value});
  }

  handleSubmitComment(e){
    e.preventDefault();
    let payload = {
      comment: {
        body: this.state.comment
      }
    };
    console.log("payload", payload);
    this.props.actions.createCommentOnAnswer(this.props.answer.id, this.props.questionId, payload);
    this.setState({ showForm: !this.state.showForm });
  }

  onClickLike(){
    if(this.props.answer.liked){
      this.props.actions.likeUnlikeQuestionAnswer(this.props.answer.id, this.props.questionId, "unlike");
    }else{
      this.props.actions.likeUnlikeQuestionAnswer(this.props.answer.id, this.props.questionId, "like");
    }
    this.setState({ answerLiked: !this.state.answerliked });
  }



  render(){
    let answerBy = "";
    let authorImage = "";
    let comments = this.props.answer.comments ? 
      <AllComments comments={this.props.answer.comments} /> : "";


    const showForm = this.state.showForm ? 
      <QuestionForm 
        formType="comment"
        handleHideForm={this.onClickComment}
        handleSubmitPost={this.handleSubmitComment}
        updatePostState={this.updateCommentState}
        /> 
      : null;

    if(this.props.answer.user){
      answerBy = `${this.props.answer.user.first_name} ${this.props.answer.user.last_name}`;
      authorImage =  <img src={this.props.answer.user.image} className="profile-image mr-1"/>;
    }
    const commentCount = this.props.answer.comments ? this.props.answer.comments.length : 0;


    return (
      <div className="show-answer pr-4 row">
        <div className="col-sm-1 pt-2">
            {authorImage} <br />
            
        </div>
        <div className="col-sm-11 pt-2 container">
          <div className="row" style={{height: "100%"}}>
            <div className="pl-3" style={{width: "100%"}}>
              <small className=""><i>
              {answerBy} on {this.props.answer.created_at}
            </i></small>
              <p>{this.props.answer.response}</p>
              <ReactCSSTransitionGroup
                transitionName="form-transition"
                transitionEnterTimeout={300}
                transitionLeaveTimeout={200}>
                {showForm}
              </ReactCSSTransitionGroup>
            </div>
            <div className="align-self-end pl-3" style={{width: "100%"}}>
              <AnswerButtons 
                onClickComment={this.onClickComment}
                onClickLike={this.onClickLike}
                cached_votes_score={this.props.answer.cached_votes_score}
                commentCount={commentCount}/>
              {comments}

            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default AnswerDetail;

