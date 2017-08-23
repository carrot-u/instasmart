// Module Imports
import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup';
import { Link } from 'react-router-dom';



// project files
import QuestionDetail from "./QuestionDetail";
import * as questionActions from "../../../actions/questionActions";
import ScrollToTopOnMount from "../../common/ScrollToTop";
import AllAnswers from "../../answers/AllAnswers";
import IndexQuestionTags from "../../tags/IndexQuestionTags";
import PostForm from "../PostForm";
import QuestionAuthor from './QuestionAuthor';
import AllComments from '../../comments/AllComments';



class ShowQuestionConatiner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showForm: false,
      postType: null,
      postResponse: null,

    }
    this.onClickPost = this.onClickPost.bind(this);
    this.handleSubmitPost = this.handleSubmitPost.bind(this);
    this.updatePostState = this.updatePostState.bind(this);
    this.onClickLike = this.onClickLike.bind(this);

  }

  componentWillMount() {
    this.props.actions.loadQuestionById(this.props.match.params.id);
  }


  /************** Comment/Answer Functions *********************/
  onClickPost(e, type) {
    e.preventDefault();
    this.setState({ 
      showForm: !this.state.showForm, 
      postType: type,
    });
  }

  updatePostState(e){
    this.setState({postResponse: e.target.value});
  }

  handleSubmitPost(e){
    e.preventDefault();
    let payload= '';
    if(this.state.postType === "comment"){
      payload = {
        comment: {
          body: this.state.postResponse
        }
      };
    }else{
      payload = {
        answer: {
          response: this.state.postResponse
        }
      };
    }
    this.props.actions.createPostOnQuestion(this.props.showQuestion.id, payload, `${this.state.postType}s`);
    this.setState({ showForm: !this.state.showForm });
  }

  onClickLike(){
    if(this.props.showQuestion.liked){
      this.props.actions.likeUnlikeQuestion(this.props.showQuestion.id, "unlike");
    }else{
      this.props.actions.likeUnlikeQuestion(this.props.showQuestion.id, "like");
    }
    this.setState({ questionLiked: !this.state.questionliked });
  }


  render() {
    let showQuestion, showAnswers, stats, tags, author, comments = null;
    const showForm = this.state.showForm ? 
      <PostForm 
        formType={this.state.postType}
        handleHideForm={this.onClickPost}
        handleSubmitPost={this.handleSubmitPost}
        updatePostState={this.updatePostState}
        /> 
      : null;
    if (this.props.isLoading || !this.props.showQuestion) {
      showQuestion = (
        <div className="container loading-questions row mt-4">
          <div className="col-3 offset-5">
            <i className="fa fa-spinner fa-spin fa-4x fa-fw mb-3" />
            {" "}Loading...
          </div>
        </div>
      );
    } else {
      showQuestion = (
        <QuestionDetail 
          question={this.props.showQuestion} 
          onClickLike={this.onClickLike}
          onClickPost={this.onClickPost}
          currentUser={this.props.currentUser}
          actions={this.props.actions}/>);
      showAnswers = this.props.showQuestion.answers ? 
        <AllAnswers 
          answers={this.props.showQuestion.answers} 
          questionId={this.props.showQuestion.id}/> : "";
      tags = this.props.showQuestion.tags ? (
        <div className="tags-container center-items">
           <IndexQuestionTags question={this.props.showQuestion} />
        </div>
      ) : "";
      author = this.props.showQuestion.user ? 
        <Link to={`/users/${this.props.showQuestion.user.id}`} style={{color: "#555544", textDecoration: "none"}} >
          <QuestionAuthor question={this.props.showQuestion}/> 
        </Link> : "";
      comments = this.props.showQuestion.comments ? <AllComments comments={this.props.showQuestion.comments} /> : "";

    }

    return (
      <div className="show-question-top-container">
        <ScrollToTopOnMount />
        <div className="row">
          <div className="col-md-10 show-question pr-0">
            {showQuestion}
            <ReactCSSTransitionGroup
              transitionName="form-transition"
              transitionEnterTimeout={300}
              transitionLeaveTimeout={200}>
              {showForm}
            </ReactCSSTransitionGroup>
            {comments}
            {showAnswers}
          </div>
          <div id= "author-info" className="col-md-2 stat-tags-col">
            <div className="pt-2">
              {author}
              <hr />
              {tags}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    isLoading: state.questions.isLoading,
    showQuestion: state.questions.showQuestion,
    currentUser: state.users.currentUser,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(questionActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(
  ShowQuestionConatiner
);