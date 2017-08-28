import React from "react";
import TopAnswer from "../answers/TopAnswer";
import IndexStats from "../common/IndexStats";
import IndexQuestionDetail from "./IndexQuestionDetail";
import PostForm from "./PostForm";
import QuestionButtons from "./QuestionButtons";
import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup';

class QuestionIndexRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showForm: false,
      postType: "comments",
      postResponse: null,
    };
    this.onClickPost = this.onClickPost.bind(this);
    this.handleSubmitPost = this.handleSubmitPost.bind(this);
    this.updatePostState = this.updatePostState.bind(this);
    this.onClickLike = this.onClickLike.bind(this);
    this.onDeleteQuestion = this.onDeleteQuestion.bind(this);
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
    if(this.state.postType === "comments"){
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
    this.props.actions.createPostOnQuestion(this.props.question.id, payload, this.state.postType);
    this.setState({ showForm: !this.state.showForm });
  }


  /************** Question Functions *********************/
  onClickLike(){
    if(this.props.liked){
      this.props.actions.likeUnlikeQuestion(this.props.question.id, "unlike");
    }else{
      this.props.actions.likeUnlikeQuestion(this.props.question.id, "like");
    }
  }

  onDeleteQuestion(e){
    e.preventDefault();
    const payload = {
      question: { 
        id: this.props.question.id,
      }
    }
    this.props.actions.deleteQuestion(payload);
  }

  render() {
    const createdByCurrent = (this.props.question.user && 
      this.props.currentUser.id === this.props.question.user.id) ? true : false;
    const showAnswer = (this.props.question.answers && this.props.question.answers.length > 0)
      ? <TopAnswer answer={this.props.question.answers[0]} />
      : <h6><i>No answers submitted yet. Be the first!</i></h6>;

    const showForm = this.state.showForm ? 
      <PostForm 
        formType={this.state.postType}
        handleHideForm={this.onClickPost}
        handleSubmitPost={this.handleSubmitPost}
        updatePostState={this.updatePostState}
        /> 
      : null;

    return (
      <div className="card d-block img-fluid mb-2">
        <div className="card-block px-5 pb-1">
            <IndexQuestionDetail 
              onDeleteQuestion={this.onDeleteQuestion}
              onEditQuestion={this.props.onEditQuestion}
              question={this.props.question} 
              createdByCurrent={createdByCurrent}/>
            <hr />
        </div>
        <div className="card-block px-5 pt-1">
          {showAnswer}
          <hr />
          <div className="row">
            <div className="col-sm-6">
              {!this.state.showForm && <IndexStats question={this.props.question} />}

            </div>
            <div className="col-sm-6">
              {!this.state.showForm && <QuestionButtons 
                onClickPost={this.onClickPost} 
                onClickLike={this.onClickLike}
                liked={this.props.liked}
                pullRight={true}
              />}
            </div>
          </div>
          
            <ReactCSSTransitionGroup
              transitionName="form-transition"
              transitionEnterTimeout={300}
              transitionLeaveTimeout={200}>
              {showForm}
            </ReactCSSTransitionGroup>
        </div>
      </div>
    );
  }
}

export default QuestionIndexRow;