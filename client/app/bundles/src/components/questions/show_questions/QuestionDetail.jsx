import React from 'react';

import IndexQuestionTags from "../../tags/IndexQuestionTags";
import IconStats from "../../common/IconStats";



const QuestionDetail = props => {
  const askedBy = props.question.user ? 
    (<i>Asked by {props.question.user.name} on {props.question.created_at}</i>) 
    :
    (<i>Asked {props.question.created_at}</i>);

  return (
    <div className="row pt-3 center-items show-question-detail">
      <div className="pb-2">
        <div className="question-summary">
          <IndexQuestionTags question={props.question} addClass={"center-items"} />
          <h2 className="py-2 question-summary">{props.question.summary}</h2>
          <i><h4 className="py-1 question-detail">{props.question.body}</h4></i>
        </div>
        <IconStats question={props.question} addClass={"center-items"} />
      </div>
    </div>
  );
}

export default QuestionDetail;