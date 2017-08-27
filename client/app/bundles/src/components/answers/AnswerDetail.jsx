// Import modules
import React from 'react';
import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup';
import { Link } from 'react-router-dom';


// Import project files
import PostForm from "../questions/PostForm";
import AllComments from '../comments/AllComments';
import AnswerButtons from './AnswerButtons';
import AcceptedAnswerStar from './AcceptedAnswerStar';
import PostCreatorOptions from '../common/PostCreatorOptions';
import * as utils from '../common/utils';

class AnswerDetail extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      comment: null,
      showForm: false,
      answerLiked: utils.checkLikedByUser(this.props.answer.votes_for, this.props.currentUser.id),
      answerResponse: this.props.answer.response,
      editPost: false,
      editType: "comments",

    }
    this.onToggleForm = this.onToggleForm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updatePostState = this.updatePostState.bind(this);
    this.onClickLike = this.onClickLike.bind(this);
    this.toggleEditPost = this.toggleEditPost.bind(this);
    this.onDeletePost = this.onDeletePost.bind(this);
  }

  /************** Post Functions *********************/
  onToggleForm(e) {
    e.preventDefault();
    if(this.state.editPost && this.state.showForm){
      this.setState({ editPost: !this.state.editPost });
    }
    this.setState({ showForm: !this.state.showForm });

  }

  toggleEditPost(type, post = {}){
    if(post && type === "comments"){
      this.setState({ 
          comment: {
            id: post.id,
            body: post.body
          }
      });
    }
    this.setState({ 
      editPost: !this.state.editPost,
      showForm: !this.state.showForm,
      editType: type,
    });
  }

  updatePostState(e){
    if(this.state.editType !== "answers"){
      this.setState({comment: {
        body: e.target.value,
        id: this.state.comment ? this.state.comment.id : null,
      }});
    }else{
      this.setState({answerResponse: e.target.value});
    }
  }

  handleSubmit(e){
    e.preventDefault();
    let payload = this.state.editType === "answers" ? {answer: {response: this.state.answerResponse}}
      :{comment: {body: this.state.comment.body, id: this.state.comment.id ? this.state.comment.id : null}};
    if(this.state.editPost){
      if(this.state.editType === "answers"){
        this.props.actions.editPostOnQuestion(this.props.answer.id, this.props.question.id, payload, "answers"); 
      }else{
        this.props.actions.editPostOnAnswer(this.state.comment.id, this.props.answer.id, payload, "comments"); 
      }
    }else{
      this.props.actions.createCommentOnAnswer(this.props.answer.id, this.props.question.id, payload);
    }
    this.setState({ 
      showForm: !this.state.showForm,
      editPost: false,
      editType: "comments",
    });
  }

  onClickLike(){
    if(this.state.answerLiked){
      this.props.actions.likeUnlikeQuestionAnswer(this.props.answer.id, this.props.question.id, "unlike");
    }else{
      this.props.actions.likeUnlikeQuestionAnswer(this.props.answer.id, this.props.question.id, "like");
    }
    this.setState({ answerLiked: !this.state.answerLiked });
  }

  onDeletePost(post, type){
    if(type === "answers"){
      this.props.actions.deletePostOnQuestion(this.props.answer.id, this.props.question.id, type);
    }else{
      this.props.actions.deletePostOnAnswer(post.id, this.props.answer.id, type);
    }
  }

  render(){
    let authorImage, answerBy, creatorOptions = "";
    let comments = this.props.answer.comments && this.props.answer.comments.length>0  ? 
      <AllComments 
        comments={this.props.answer.comments} 
        currentUser={this.props.currentUser}
        onDeletePost={this.onDeletePost}
        toggleEditPost={this.toggleEditPost}/> : "";


    const showForm = this.state.showForm ? 
      <PostForm 
        formType={this.state.editType}
        handleHideForm={this.onToggleForm}
        handleSubmitPost={this.handleSubmit}
        updatePostState={this.updatePostState}
        editPost={this.state.editPost}
        post={this.state.editType === "comments" ? this.state.comment : this.state.answerResponse}
        /> 
      : null;

    if(this.props.answer.user){
      answerBy = `${this.props.answer.user.name}`;
      authorImage =  (
        <Link to={`/users/${this.props.answer.user.id}`}>
          <img src={this.props.answer.user.image} className="profile-image mr-1"/>
        </Link>);
      creatorOptions = this.props.answer.user.id === this.props.currentUser.id ?
        <PostCreatorOptions 
          editPost={this.toggleEditPost} 
          post={this.props.answer} 
          onDeletePost={this.onDeletePost}
          type="answers"/> : null;
    }
    const commentCount = this.props.answer.comments ? this.props.answer.comments.length : 0;

    return (
      <div className="show-answer pr-4 row">
        <div className="col-sm-1 pt-2">
          <div className="row center-items">
              {authorImage} <br />
          </div>
          <div className="row center-items pt-2">
            <AcceptedAnswerStar 
              answerAccepted={this.props.answerAccepted} 
              onAcceptAnswer={this.props.onAcceptAnswer}
              answer={this.props.answer}
              questionAuthorFlag={this.props.questionAuthorFlag}/>
          </div>
        </div>
        <div className="col-sm-11 pt-2 container">
          <div className="row" style={{height: "100%"}}>
            <div className="pl-3" style={{width: "100%"}}>
              <small className=""><i>
              {answerBy} {this.props.answer.created_at} ago
            </i></small>
              <p>{this.props.answer.response}</p>
              {!this.state.editPost && creatorOptions}
              <ReactCSSTransitionGroup
                transitionName="form-transition"
                transitionEnterTimeout={300}
                transitionLeaveTimeout={200}>
                {showForm}
              </ReactCSSTransitionGroup>
            </div>
            <div className="align-self-end pl-3" style={{width: "100%"}}>
              {!this.state.editPost && <AnswerButtons 
                onClickComment={this.onToggleForm}
                onClickLike={this.onClickLike}
                cached_votes_score={this.props.answer.cached_votes_score}
                commentCount={commentCount}
                liked={this.state.answerLiked}/>}
              {!this.state.editPost && comments}
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default AnswerDetail;

