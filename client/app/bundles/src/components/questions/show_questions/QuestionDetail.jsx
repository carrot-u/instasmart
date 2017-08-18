import React from 'react';
import { Link } from 'react-router-dom';


import IndexQuestionTags from "../../tags/IndexQuestionTags";
import QuestionStatButtons from './QuestionStatButtons';
import QuestionButtons from "../QuestionButtons";
import QuestionAuthor from './QuestionAuthor'


const QuestionDetail = props => {
  const askedBy = props.question.user ? 
    (<i>Asked by {props.question.user.name} on {props.question.created_at}</i>) 
    :
    (<i>Asked {props.question.created_at}</i>);

  return (
    <div className="row pt-1 pl-1 mr-0 show-question-detail">
    <Link to="/questions">
      <button className="btn btn-outline-secondary btn-sm py-0">Back</button>
    </Link>
      <div className="question-summary col-md-12 pb-2 ml-2">
        <h2 className="py-1 question-summary">{props.question.summary}</h2>
        <i><h4 className="py-1 question-detail">{props.question.body}</h4></i>
        <div className="row ">
           <QuestionStatButtons 
            question={props.question} 
            onClickLike={props.onClickLike}
            onClickPost={props.onClickPost}/>
        </div>
      </div>
    </div>
  );
}

export default QuestionDetail;

