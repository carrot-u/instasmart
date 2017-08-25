import React from 'react';
import { Link } from 'react-router-dom';

import IndexQuestionTags from "../tags/IndexQuestionTags";


const IndexQuestionDetail = props => {
  const askedBy = props.question.user ? 
    ( <div className="row text-muted">
        <div className="col-md-3">
          <img src={props.question.user.image} className="profile-image mr-1"/>
        </div>
        <div className="col-md-9">
          <p className="my-0">Asked {props.question.created_at}</p>
          <p className="my-0">{props.question.user.name}</p>
        </div>
      </div>) 
    :
    (<i>Asked {props.question.created_at}</i>);

  return (
    <div className="row">
        <div className="col-md-9 pr-0">
          <Link to={`/questions/${props.question.id}`} className="question-summary">
            <h4>{props.question.summary}</h4>
          </Link>
          <IndexQuestionTags question={props.question} />
        </div>
      <div className="col-md-3 pull-right question-author">
        <small className="pl-3 pull-right">
          {askedBy}
        </small>
      </div>
    </div>
  );
}

export default IndexQuestionDetail;