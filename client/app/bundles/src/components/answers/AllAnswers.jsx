// Module Imports
import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

// Project Files
import AnswerDetail from './AnswerDetail';
import * as questionActions from "../../actions/questionActions";
import * as utils from '../common/utils';

class AllAnswers extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      acceptedId: utils.getAcceptedAnswerId(props.answers),
    }
    this.onAcceptAnswer = this.onAcceptAnswer.bind(this);

  }

  onAcceptAnswer(answer){
    const payload = {
      id: answer.id,
      response: answer.response,
      accepted: answer.id !== this.state.acceptedId, //if already accepted toggle to false
    };
    const previousAnswer = this.state.acceptedId > 0 ? {
        id: this.state.acceptedId,
        response: utils.findById(this.props.answers, this.state.acceptedId).response,
        accepted: false
      } : null;
    this.props.actions.acceptAnswerOnQuestion(this.props.question.id, 
      payload, previousAnswer);
    this.setState({acceptedId: answer.id !== this.state.acceptedId ? answer.id : 0}); //only add new accepted id. Otherwise remove accepted
  }

  render(){
    const answersListing = this.props.answers.map(answer => {
      if(answer){
        const accepted = this.state.acceptedId === answer.id;
        return (
          <div key={answer.id}>
            <AnswerDetail  
              answer={answer} 
              actions={this.props.actions}
              onClickComment={this.onClickComment}
              question={this.props.question}
              toggleEditPost={this.props.toggleEditPost}
              currentUser={this.props.currentUser}
              answerAccepted={accepted}
              onAcceptAnswer={this.onAcceptAnswer}
              questionAuthorFlag={this.props.questionAuthorFlag}/>
          </div>);
      }else{
        <div />
      }
    });

    return (
      <div className="card-block mt-5 all-answers">
        <h3>Answers ({this.props.answers.length}) </h3> 
        {answersListing}
      </div>
    );
  }
}


function mapStateToProps(state, ownProps) {
  return {
    isLoading: state.questions.isLoading,
    showQuestion: state.questions.showQuestion
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(questionActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AllAnswers);