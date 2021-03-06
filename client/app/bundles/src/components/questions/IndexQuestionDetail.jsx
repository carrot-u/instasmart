import React from 'react';
import { Link } from 'react-router-dom';
import Linkify from 'react-linkify';

import IndexQuestionTags from "../tags/IndexQuestionTags";
import QuestionCreatorOptions from "./QuestionCreatorOptions";


const IndexQuestionDetail = props => {
  const askedBy = props.question.user ? 
    ( <Link to={`/users/${props.question.user.id}`}>
          <div className="row text-muted">
          <div className="col-md-3">
            <img src={props.question.user.image} className="profile-image mr-1"/>
          </div>
          <div className="col-md-9">
            <p className="my-0">Asked {props.question.created_at} ago</p>
            <p className="my-0">{props.question.user.name}</p>
          </div>
        </div>
      </Link>) 
    :
    (<i>Asked {props.question.created_at} ago</i>);

  return (
    <div className="row">
        <div className="col-md-9 pr-0">
          <Link to={`/questions/${props.question.id}`} className="question-summary">
            <Linkify><h4>{props.question.summary}</h4></Linkify>
          </Link>
          <IndexQuestionTags question={props.question} />
        </div>
      <div className="col-md-3 pull-right question-author">
        <div className="row">
          <small className="pl-3 pull-right">
            {askedBy}
          </small>
        </div>
        <div className="row pl-3 center-items">
          {props.createdByCurrent && <QuestionCreatorOptions 
            onDeleteQuestion={props.onDeleteQuestion}
            onEditQuestion={props.onEditQuestion}
            question={props.question}/>}
        </div>
      </div>
    </div>
  );
}

export default IndexQuestionDetail;