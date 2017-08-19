import React from "react";
import TopAnswer from "../answers/TopAnswer";
import IconStats from "../common/IconStats";
import IndexQuestionDetail from "./IndexQuestionDetail";
import QuestionForm from "./QuestionForm";
import QuestionButtons from "./QuestionButtons";
import QuestionCreatorOptions from "./QuestionCreatorOptions";
import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup';

class QuestionIndexRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showForm: false,
      postType: null,
      postResponse: null,
      liked: false
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
    this.props.actions.createPostOnQuestion(this.props.question.id, payload, `${this.state.postType}s`);
    this.setState({ showForm: !this.state.showForm });
  }


  /************** Question Functions *********************/
  onClickLike(){
    if(this.props.question.liked){
      this.props.actions.likeUnlikeQuestion(this.props.question.id, "unlike");
    }else{
      this.props.actions.likeUnlikeQuestion(this.props.question.id, "like");
    }
    this.setState({ liked: !this.state.liked });
  }

  onDeleteQuestion(e){
    e.preventDefault();
    const payload = {
      question: this.props.question
    }
    this.props.actions.deleteQuestion(payload);
  }

  render() {
    const showAnswer = (this.props.question.answers && this.props.question.answers.length > 0)
      ? <TopAnswer answer={this.props.question.answers[0]} />
      : <h6><i>No answers submitted yet. Be the first!</i></h6>;

    const showForm = this.state.showForm ? 
      <QuestionForm 
        formType={this.state.postType}
        handleHideForm={this.onClickPost}
        handleSubmitPost={this.handleSubmitPost}
        updatePostState={this.updatePostState}
        /> 
      : null;

    return (
      <div className="card d-block img-fluid mb-2">
        <div className="card-header">
            <IndexQuestionDetail question={this.props.question} />
        </div>
        <div className="card-block">
          {showAnswer}

          <div className="row">
            <div className="col-sm-4">
              <IconStats question={this.props.question} />
              <QuestionCreatorOptions 
                onDeleteQuestion={this.onDeleteQuestion}
                onEditQuestion={this.props.onEditQuestion}
                question={this.props.question}/>
            </div>
            <div className="col-sm-8">
              <QuestionButtons 
                onClickPost={this.onClickPost} 
                onClickLike={this.onClickLike}
                liked={this.state.liked}
                pullRight={true}
              />
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