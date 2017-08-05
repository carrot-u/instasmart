import React from "react";
import TopAnswer from "../answers/TopAnswer";
import IndexQuestionTags from "../tags/IndexQuestionTags";
import IconStats from "../common/IconStats";
import IndexQuestionDetail from "./IndexQuestionDetail";
import QuestionAnswerForm from "./QuestionAnswerForm";
import QuestionButtons from "./QuestionButtons";
import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup'

class QuestionIndexRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showAnswerForm: false
    };
    this.onClickAnswer = this.onClickAnswer.bind(this);
  }

  onClickAnswer() {
    this.setState({ showAnswerForm: !this.state.showAnswerForm });
  }

  render() {
    const showAnswer = this.props.question.answers.length > 0
      ? <TopAnswer answer={this.props.question.answers[0]} />
      : <h5>No answers submitted yet. Be the first!</h5>;

    const anwserForm = this.state.showAnswerForm ? <QuestionAnswerForm /> : null;

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
            </div>
            <div className="col-sm-8">
              <QuestionButtons onClickAnswer={this.onClickAnswer} />
            </div>
          </div>
          
            <ReactCSSTransitionGroup
              transitionName="form-transition"
              transitionEnterTimeout={300}
              transitionLeaveTimeout={200}
            >
              {anwserForm}
            </ReactCSSTransitionGroup>
        </div>
      </div>
    );
  }
}

export default QuestionIndexRow;