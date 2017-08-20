import React from 'react';
import { Link } from 'react-router-dom';

import IndexQuestionTags from "../tags/IndexQuestionTags";


const IndexQuestionDetail = props => {
  const askedBy = props.question.user ? 
    (<i>Asked by {props.question.user.name} on {props.question.created_at}</i>) 
    :
    (<i>Asked {props.question.created_at}</i>);

  return (
    <div className="row">
        <div className="col-md-8 pr-0">
          <Link to={`/questions/${props.question.id}`} className="question-summary">
            <h5>{props.question.summary}</h5>
          </Link>
          <IndexQuestionTags question={props.question} />
        </div>
      <div className="col-md-4 pull-right">
        <small className="pl-3 pull-right">
          {askedBy}
        </small>
      </div>
    </div>
  );
}

export default IndexQuestionDetail;