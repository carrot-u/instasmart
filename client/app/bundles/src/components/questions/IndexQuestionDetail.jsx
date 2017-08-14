import React from 'react';

const IndexQuestionDetail = props => {
  const askedBy = props.question.user ? 
    (<i>Asked by {props.question.user.name} on {props.question.created_at}</i>) 
    :
    (<i>Asked {props.question.created_at}</i>);

  return (
    <div>
      <div className="row">
        <div className="col-md-12 pr-0">
          <a href="" className="question-summary">
            <h3>{props.question.summary}</h3>
          </a>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 offset-md-7">
          <small className="float-right">
            {askedBy}
          </small>
        </div>
      </div>
    </div>
  );
}

export default IndexQuestionDetail;