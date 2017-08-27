// Module Imports
import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup';
import { Link } from 'react-router-dom';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';


// project files
import QuestionDetail from "./QuestionDetail";
import * as questionActions from "../../../actions/questionActions";
import ScrollToTopOnMount from "../../common/ScrollToTop";
import AllAnswers from "../../answers/AllAnswers";
import IndexQuestionTags from "../../tags/IndexQuestionTags";
import PostForm from "../PostForm";
import QuestionAuthor from './QuestionAuthor';
import AllComments from '../../comments/AllComments';
import * as utils from '../../common/utils';
import FixedNav from '../../common/FixedNav';


class ShowQuestionConatiner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showForm: false,
      postType: "comments",
      postResponse: null,
      postId: null,
      activeTab: '1',
    }
    this.onClickPost = this.onClickPost.bind(this);
    this.handleSubmitPost = this.handleSubmitPost.bind(this);
    this.toggleShowForm = this.toggleShowForm.bind(this);
    this.updatePostState = this.updatePostState.bind(this);
    this.onDeleteComment = this.onDeleteComment.bind(this);
    this.toggleTab = this.toggleTab.bind(this);
  }

  componentWillMount() {
    this.props.actions.loadQuestionById(this.props.match.params.id);
  }


  /************** Comment/Answer Functions *********************/
  onClickPost(type, post = "") {
    this.setState({ 
      showForm: !this.state.showForm, 
      postType: type,
      postResponse: post ? post.body : null,
      postId: post ? post.id : null,
    });

  }

  toggleShowForm(){
    this.setState({showForm: !this.state.showForm});
  }

  updatePostState(e){
    this.setState({postResponse: e.target.value});

  }

  handleSubmitPost(e){
    e.preventDefault();
    let payload= '';
    if(this.state.postType === "comments"){
      payload = {
        comment: {
          body: this.state.postResponse,
          id: this.state.postId,
        }
      };
    }else{
      payload = {
        answer: {
          response: this.state.postResponse
        }
      };
    }
    if(this.state.postId){
        this.props.actions.editPostOnQuestion(this.state.postId, this.props.showQuestion.id, payload, "comments") 
    }else{
      this.props.actions.createPostOnQuestion(this.props.showQuestion.id, payload, this.state.postType );
    }
    this.setState({ showForm: !this.state.showForm });
  }

  onDeleteComment(post, type){
    this.props.actions.deletePostOnQuestion(post.id, this.props.showQuestion.id, type);
  }

  toggleTab(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  render() {
    let showQuestion, showAnswers, stats, tags, author, comments, tabs, tabContent = null;
    const showForm = this.state.showForm ? 
      <PostForm 
        formType={this.state.postType}
        handleHideForm={this.toggleShowForm}
        handleSubmitPost={this.handleSubmitPost}
        updatePostState={this.updatePostState}
        post={ {body: this.state.postResponse}}
        editPost={this.state.postId ? true : false}/> 
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
          onClickPost={this.onClickPost}
          currentUser={this.props.currentUser}
          actions={this.props.actions}/>);
      showAnswers = this.props.showQuestion.answers ? 
        <AllAnswers 
          answers={this.props.showQuestion.answers} 
          question={this.props.showQuestion}
          toggleEditPost={this.toggleEditPost}
          currentUser={this.props.currentUser}
          questionAuthorFlag={this.props.showQuestion.user && this.props.currentUser.id === this.props.showQuestion.user.id}/> : "";
      tags = this.props.showQuestion.tags ? (
        <div className="tags-container center-items">
           <IndexQuestionTags question={this.props.showQuestion} />
        </div>
      ) : "";
      author = this.props.showQuestion.user ? 
        <Link to={`/users/${this.props.showQuestion.user.id}`} style={{color: "#555544", textDecoration: "none"}} >
          <QuestionAuthor question={this.props.showQuestion}/> 
        </Link> : "";
      comments = this.props.showQuestion.comments && this.props.showQuestion.comments.length>0 ? 
        <AllComments 
        comments={this.props.showQuestion.comments} 
        currentUser={this.props.currentUser}
        onDeletePost={this.onDeleteComment}
        toggleEditPost={this.onClickPost}
        /> : "";
      tabs = (  
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggleTab('1'); }}
            >
              Answers
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggleTab('2'); }}
            >
              Comments
            </NavLink>
          </NavItem>
        </Nav>);
      tabContent = (
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            {showAnswers}
          </TabPane>
          <TabPane tabId="2">
            {comments}
          </TabPane>
        </TabContent>);
    }

    return (
      <div>
        <FixedNav includeSort={false}/>
        <div className="show-question-top-container card mt-5">
          <ScrollToTopOnMount />
          <div className="container py-3 px-0">
            <div className="show-question">
              {author}
              {showQuestion}
              {tags}
              <ReactCSSTransitionGroup
                transitionName="form-transition"
                transitionEnterTimeout={300}
                transitionLeaveTimeout={200}>
                {showForm}
              </ReactCSSTransitionGroup>
              {tabs}
              {tabContent}
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