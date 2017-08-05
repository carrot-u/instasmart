// Modules
import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

// Project File
import * as questionActions from "../../actions/questionActions";
import QuestionIndexRow from "./QuestionIndexRow";
import PageBanner from "../common/PageBanner";

class QuestionIndex extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      questions: null
    };
  }

  render() {
    const listQuestions = this.props.questions.length > 0
      ? this.props.questions.map(question => {
          return <QuestionIndexRow key={question.id} question={question} />;
        })
      : null;

    return (
      <div>
        <PageBanner />
        <div className="container question-index">
          {listQuestions}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    questions: state.questions.questions,
    isLoading: state.questions.isLoading
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(questionActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionIndex);