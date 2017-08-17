import React from 'react';

import IndexQuestionTags from "../../tags/IndexQuestionTags";
import AllComments from '../../comments/AllComments';
import QuestionStats from './QuestionStats';

const QuestionDetail = props => {
  const askedBy = props.question.user ? 
    (<i>Asked by {props.question.user.name} on {props.question.created_at}</i>) 
    :
    (<i>Asked {props.question.created_at}</i>);

  return (
    <div>
      <div className="row pt-3 pl-3 show-question-detail">
          <div className="question-summary col-md-8 pb-2">
            <IndexQuestionTags question={props.question} />
            <h2 className="py-1 question-summary">{props.question.summary}</h2>
            <i><h4 className="py-1 question-detail">{props.question.body}</h4></i>
          </div>
          <div className="col-md-2">
            <QuestionStats question={props.question} />
          </div>
        </div>
      <AllComments comments={props.question.comments} />
    </div>
  );
}

export default QuestionDetail;