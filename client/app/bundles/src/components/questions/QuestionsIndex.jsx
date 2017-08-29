// Modules
import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

// Project File
import * as questionActions from "../../actions/questionActions";
import * as modalActions from "../../actions/modalActions";
import * as warningModalActions from "../../actions/warningModalActions";
import QuestionIndexRow from "./QuestionIndexRow";
import PageBanner from "../common/PageBanner";
import * as utils from "../common/utils";
import ScrollToTopOnMount from '../common/ScrollToTop';
import FixedNav from '../common/FixedNav';
import WarningModal from '../common/WarningModal';



class QuestionIndex extends React.Component {
  constructor(props){
    super(props);
    this.onEditQuestion = this.onEditQuestion.bind(this);
  }


  componentWillMount(){
    this.props.actions.loadQuestions();
  }

  onEditQuestion(question){
    this.props.questionModalActions.selectEditQuestion(question);
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
      const noResults = "No Questions Loaded"; 
      listQuestions = (this.props.questions && this.props.questions.length > 0)
      ? this.props.questions.map(question => {
          const liked = utils.checkLikedByUser(question.votes_for, this.props.currentUser.id);
          return (
            <QuestionIndexRow 
              key={question.id} 
              question={question} 
              showAnswerForm={true} 
              actions={this.props.actions}
              warningModalActions={this.props.warningModalActions}
              onEditQuestion={this.onEditQuestion}
              currentUser={this.props.currentUser}
              liked={liked}
              />
          );
        })
      : <h2><i style={{color: "white"}}>{noResults}</i></h2>;
    }

    return (
      <div>
        <FixedNav includeSort={true}/>
        <WarningModal />
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
    currentUser: state.users.currentUser,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(questionActions, dispatch),
    questionModalActions: bindActionCreators(modalActions, dispatch),
    warningModalActions: bindActionCreators(warningModalActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionIndex);