// Modules
import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

// Project File
import Jumbotron from './Jumbotron';
import QuestionModalContainer from '../common/QuestionModalContainer';
import * as questionActions from "../../actions/questionActions";
import LandingNavbar from './LandingNavbar';



class LandingPage extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      showNewQuestionModal: false,
    };
    this.onClickNewQuestion = this.onClickNewQuestion.bind(this);
    this.onToggleModal = this.onToggleModal.bind(this);
  }

  onClickNewQuestion(){
    this.setState({ showNewQuestionModal: true });
  }

  onToggleModal(){
    this.setState({ showNewQuestionModal: !this.state.showNewQuestionModal });
  }

  render(){
    return(
      <div className="landing-page">
        <div className="overlay">
          <LandingNavbar />
          <Jumbotron 
            onClickNewQuestion={this.onClickNewQuestion}
          />
          <QuestionModalContainer
            onClickNewQuestion={this.onClickNewQuestion}
            onToggleModal={this.onToggleModal}
            showNewQuestionModal={this.state.showNewQuestionModal}
            actions={this.props.actions}
          />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {

  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(questionActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);