import React from 'react';

const IndexQuestionDetail = props => {
  return (
    <div className="row">
      <div className="col-md-9">
        <a href="" className="question-summary">
          <h3>{props.question.summary}</h3>
        </a>
      </div>
      <div className="col-md-3">
        <small className="float-right">
          <i>Asked by {props.question.user_id} on {props.question.created_at} TODO: NEED USER NAME IN serializer</i>
        </small>
      </div>
    </div>
  );
}

export default IndexQuestionDetail;