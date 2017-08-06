import React from 'react';

const IndexQuestionDetail = props => {
  return (
    <div className="row">
      <div className="col-md-10">
        <a href="" className="question-summary">
          <h3>{props.question.summary}</h3>
        </a>
      </div>
      <div className="col-md-2">
        <small className="float-right">
          <i>Asked by {props.question.user.name} on {props.question.created_at}</i>
        </small>
      </div>
    </div>
  );
}

export default IndexQuestionDetail;