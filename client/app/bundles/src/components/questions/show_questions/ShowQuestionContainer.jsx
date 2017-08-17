// Module Imports
import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

// project files
import QuestionDetail from "./QuestionDetail";
import * as questionActions from "../../../actions/questionActions";
import ScrollToTopOnMount from "../../common/ScrollToTop";
import AllAnswers from "../../answers/AllAnswers";
import QuestionStats from "./QuestionStats";
import IndexQuestionTags from "../../tags/IndexQuestionTags";


class ShowQuestionConatiner extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.actions.loadQuestionById(this.props.match.params.id);
  }

  render() {
    let showQuestion, showAnswers, stats, tags = null;
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
      stats = (
        <div className="stats-container">
          <QuestionStats question={this.props.showQuestion} />
        </div>
      );
      tags = (
        <div className="tags-container center-items">
           <IndexQuestionTags question={this.props.showQuestion} />
        </div>
      );
    }

    return (
      <div className="container">
        <div className="row">
          <ScrollToTopOnMount />
          <div className="col-md-10 show-question">
            {showQuestion}
            {showAnswers}
          </div>
          <div className="col-md-2 stat-tags-col px-0">
            <div className="pt-2">
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