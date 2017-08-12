// Modules
import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

// Project File
import Jumbotron from './Jumbotron';
import QuestionModalContainer from '../common/QuestionModalContainer';
import * as questionActions from "../../actions/questionActions";
import * as modalActions from "../../actions/modalActions";
import LandingNavbar from './LandingNavbar';
import LandingPageCardsContainer from './LandingPageCardsContainer';



class LandingPage extends React.Component{


  render(){
    return(
      <div className="landing-page">
        <div className="overlay">
          <LandingNavbar />
          <Jumbotron 
            onClickNewQuestion={this.props.modalActions.showModal}
          />
          <QuestionModalContainer
            onClickNewQuestion={this.props.modalActions.showModal}
            onToggleModal={this.props.modalActions.toggleModal}
            showNewQuestionModal={this.props.showQuestionModal}
            actions={this.props.actions}
          />
          <LandingPageCardsContainer />

        </div>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    showQuestionModal: state.modal.showQuestionModal
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(questionActions, dispatch),
    modalActions: bindActionCreators(modalActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);