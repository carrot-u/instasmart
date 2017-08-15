import React from 'react';
import { Link } from 'react-router-dom';


const IndexQuestionDetail = props => {
  const askedBy = props.question.user ? 
    (<i>Asked by {props.question.user.name} on {props.question.created_at}</i>) 
    :
    (<i>Asked {props.question.created_at}</i>);

  return (
    <div>
      <div className="row">
        <div className="col-md-12 pr-0">
          <Link to={`/question/${props.question.id}`} className="question-summary">
            <h3>{props.question.summary}</h3>
          </Link>
        </div>
      </div>
      <div className="row">
        <div className="col-md-8 ">
          <small className="pl-3">
            {askedBy}
          </small>
        </div>
      </div>
    </div>
  );
}

export default IndexQuestionDetail;