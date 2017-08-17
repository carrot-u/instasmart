// Modules
import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

// Project File
import * as questionActions from "../../actions/questionActions";
import * as modalActions from "../../actions/modalActions";
import QuestionIndexRow from "./QuestionIndexRow";
import PageBanner from "../common/PageBanner";
import * as utils from "../common/utils";
import ScrollToTopOnMount from '../common/ScrollToTop';


class QuestionIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: null,
    };

    this.onEditQuestion = this.onEditQuestion.bind(this);
    this.sort = this.sort.bind(this);
  }

  componentWillMount(){
    this.props.actions.loadQuestions();
  }

  onEditQuestion(question){
    this.props.modalActions.selectEditQuestion(question);
  }

  sort(array, sortType){
    switch(sortType){
      case "answered":
        return utils.sortByAnwerCount(array);

      default:
        return utils.sortByUpdateDate(array);

    }
  }

  render() {

    let listQuestions = null;
    if (this.props.isLoading){
      listQuestions = (<div className="container loading-questions row mt-4">
              <div className="col-3 offset-5">
                <i className="fa fa-spinner fa-spin fa-4x fa-fw mb-3"></i>
                {' '}Loading...
              </div>          
            </div>);

    } else { 
      console.log(this.props.questions);
      listQuestions = (this.props.questions && this.props.questions.length > 0)
      ? this.sort(this.props.questions, "").map(question => {
          return (
            <QuestionIndexRow 
              key={question.id} 
              question={question} 
              showAnswerForm={true} 
              actions={this.props.actions}
              onEditQuestion={this.onEditQuestion}
              />
          );
        })
      : <i>No Questions available</i>;
    }


    return (
      <div>
        <ScrollToTopOnMount />
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
    isLoading: state.questions.isLoading,
    showQuestionModal: state.modal.showQuestionModal
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(questionActions, dispatch),
    modalActions: bindActionCreators(modalActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionIndex);