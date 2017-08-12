import React from "react";
import TopAnswer from "../answers/TopAnswer";
import IndexQuestionTags from "../tags/IndexQuestionTags";
import IconStats from "../common/IconStats";
import IndexQuestionDetail from "./IndexQuestionDetail";
import QuestionAnswerForm from "./QuestionAnswerForm";
import QuestionButtons from "./QuestionButtons";
import QuestionCreatorOptions from "./QuestionCreatorOptions";
import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup';

class QuestionIndexRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showAnswerForm: false,
      answerResponse: null
    };
    this.onClickAnswer = this.onClickAnswer.bind(this);
    this.handleSubmitAnswer = this.handleSubmitAnswer.bind(this);
    this.updateAnswerState = this.updateAnswerState.bind(this);
    this.onDeleteQuestion = this.onDeleteQuestion.bind(this);
  }


  /************** Answer Functions *********************/
  onClickAnswer(e) {
    e.preventDefault();
    this.setState({ showAnswerForm: !this.state.showAnswerForm });
  }

  updateAnswerState(e){
    this.setState({answerResponse: e.target.value});
  }

  handleSubmitAnswer(e){
    e.preventDefault();
    const payload = {
      answer: {
        response: this.state.answerResponse
      }
    };
    this.props.actions.createAnswer(this.props.question.id, payload);
    this.setState({ showAnswerForm: !this.state.showAnswerForm });
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

    const anwserForm = this.state.showAnswerForm ? 
      <QuestionAnswerForm 
        handleHideForm={this.onClickAnswer}
        handleSubmitAnswer={this.handleSubmitAnswer}
        updateAnswerState={this.updateAnswerState}
        /> 
      : null;

    return (
      <div className="card d-block img-fluid mb-2">
        <div className="card-header">
          <IndexQuestionDetail question={this.props.question} />
          <IndexQuestionTags question={this.props.question} />
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
              <QuestionButtons onClickAnswer={this.onClickAnswer} />
            </div>
          </div>
          
            <ReactCSSTransitionGroup
              transitionName="form-transition"
              transitionEnterTimeout={300}
              transitionLeaveTimeout={200}>
              {anwserForm}
            </ReactCSSTransitionGroup>
        </div>
      </div>
    );
  }
}

export default QuestionIndexRow;