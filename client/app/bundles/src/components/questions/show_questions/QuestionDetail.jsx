import React from 'react';

import IndexQuestionTags from "../../tags/IndexQuestionTags";
import AllComments from '../../comments/AllComments';
import QuestionStats from './QuestionStats';
import QuestionButtons from "../QuestionButtons";


const QuestionDetail = props => {
  const askedBy = props.question.user ? 
    (<i>Asked by {props.question.user.name} on {props.question.created_at}</i>) 
    :
    (<i>Asked {props.question.created_at}</i>);

  return (
    <div>
      <div className="row pt-3 pl-3 show-question-detail">
          <div className="question-summary col-md-10 pb-2">
            <h2 className="py-1 question-summary">{props.question.summary}</h2>
            <i><h4 className="py-1 question-detail">{props.question.body}</h4></i>
            
            <QuestionButtons pullRight=""/>
          </div>
          <div className="col-md-2 pull-right">
          </div>
        </div>
      <AllComments comments={props.question.comments} />
    </div>
  );
}

export default QuestionDetail;