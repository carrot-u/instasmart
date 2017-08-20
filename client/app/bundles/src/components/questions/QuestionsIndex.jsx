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
      sortedBy: "recent"
    };

    this.onEditQuestion = this.onEditQuestion.bind(this);
    this.sortQuestions = this.sortQuestions.bind(this);
  }

  componentWillMount(){
    this.props.actions.loadQuestions();
  }

  onEditQuestion(question){
    this.props.modalActions.selectEditQuestion(question);
  }

  sortQuestions(sortType = "recent"){
    this.setState({sortedBy: sortType});
    this.props.actions.sortQuestions(sortType);
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
      console.log("questions props", this.props.questions);

      listQuestions = (this.props.questions && this.props.questions.length > 0)
      ? this.props.questions.map(question => {
          const liked = utils.checkLikedByUser(question.votes_for, this.props.currentUser.id);
          return (
            <QuestionIndexRow 
              key={question.id} 
              question={question} 
              showAnswerForm={true} 
              actions={this.props.actions}
              onEditQuestion={this.onEditQuestion}
              currentUser={this.props.currentUser}
              liked={liked}
              />
          );
        })
      : <i>No Questions available</i>;
    }


    return (
      <div>
        <PageBanner sort={this.sortQuestions} sortedBy={this.state.sortedBy}/>
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
    showQuestionModal: state.modal.showQuestionModal,
    currentUser: state.currentUser.currentUser,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(questionActions, dispatch),
    modalActions: bindActionCreators(modalActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionIndex);