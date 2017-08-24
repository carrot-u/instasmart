// Import modules
import React from 'react';
import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup';

// Import project files
import PostForm from "../questions/PostForm";
import AllComments from '../comments/AllComments';
import AnswerButtons from './AnswerButtons';
import PostCreatorOptions from '../common/PostCreatorOptions';

class AnswerDetail extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      comment: null,
      showForm: false,
      answerLiked: false,
      answerResponse: this.props.answer.response,
      editPost: false,

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

  toggleEditPost(){
    this.setState({ 
      editPost: !this.state.editPost,
      showForm: !this.state.showForm
    });
  }

  updatePostState(e){
    if(!this.state.editPost){
      this.setState({comment: e.target.value});
    }else{
      this.setState({answerResponse: e.target.value});
    }
  }

  handleSubmit(e){
    e.preventDefault();
    let payload = this.state.editPost ? {answer: {response: this.state.answerResponse}}
      :{comment: {body: this.state.comment}};
    this.state.editPost ? this.props.actions.editPostOnQuestion(this.props.answer.id, this.props.questionId, payload, "answers") 
      : this.props.actions.createCommentOnAnswer(this.props.answer.id, this.props.questionId, payload);
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

  onDeletePost(post, type){
    if(type === "answers"){
      this.props.actions.deletePostOnQuestion(this.props.answer.id, this.props.questionId, type);
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
        onDeletePost={this.onDeletePost}/> : "";


    const showForm = this.state.showForm ? 
      <PostForm 
        formType={this.state.editPost ? "answer" : "comment"}
        handleHideForm={this.onToggleForm}
        handleSubmitPost={this.handleSubmit}
        updatePostState={this.updatePostState}
        editPost={this.state.editPost}
        post={this.state.answerResponse}
        /> 
      : null;

    if(this.props.answer.user){
      answerBy = `${this.props.answer.user.first_name} ${this.props.answer.user.last_name}`;
      authorImage =  <img src={this.props.answer.user.image} className="profile-image mr-1"/>;
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
            {authorImage} <br />
            
        </div>
        <div className="col-sm-11 pt-2 container">
          <div className="row" style={{height: "100%"}}>
            <div className="pl-3" style={{width: "100%"}}>
              <small className=""><i>
              {answerBy} on {this.props.answer.created_at}
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
                commentCount={commentCount}/>}
              {comments}

            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default AnswerDetail;

