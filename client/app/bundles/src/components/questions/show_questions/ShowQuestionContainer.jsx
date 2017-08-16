// Module Imports
import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

// project files
import QuestionDetail from "./QuestionDetail";
import * as questionActions from "../../../actions/questionActions";
import ScrollToTopOnMount from "../../common/ScrollToTop";
import AllAnswers from '../../answers/AllAnswers';

class ShowQuestionConatiner extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.actions.loadQuestionById(this.props.match.params.id);
  }

  render() {
    let showQuestion, showAnswers = null;
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
      showQuestion = <QuestionDetail question={this.props.showQuestion} />;
      showAnswers = <AllAnswers answers={this.props.showQuestion.answers} />;
    }

    return (
      <div className="show-question">
        <div className="container">
          <ScrollToTopOnMount />
          {showQuestion}
          {showAnswers}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    isloading: state.questions.isloading,
    showQuestion: state.questions.showQuestion
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(questionActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(
  ShowQuestionConatiner
);