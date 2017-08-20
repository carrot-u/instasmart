// Module Imports
import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

// Project Files
import AnswerDetail from './AnswerDetail';
import * as questionActions from "../../actions/questionActions";

class AllAnswers extends React.Component {

  render(){
    console.log(" this.props.answer", this.props.answers);

    const answersListing = this.props.answers.map(answer => {
      if(answer){
        return (
          <div key={answer.id}>
            <AnswerDetail  
              answer={answer} 
              actions={this.props.actions}
              onClickComment={this.onClickComment}
              questionId={this.props.questionId}/>
          </div>);
      }else{
        console.log(" not making it");
        <div />
      }
    });

    return (
      <div className="mt-5 all-answers">
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