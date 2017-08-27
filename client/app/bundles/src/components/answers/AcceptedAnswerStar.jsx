import React from 'react';
import { Tooltip } from 'reactstrap';

const AcceptedAnswerStar = props => {

  let acceptedStar, starClassString = "";
  if(props.questionAuthorFlag){
    starClassString = props.answerAccepted ?  "top-answer-star-author active" : "top-answer-star-author";
  }else{
    starClassString = props.answerAccepted ?  "top-answer-star active" : "top-answer-star";
  }
  acceptedStar = (
    <span className={starClassString} id="AcceptedAnswerTooltip" onClick={() => {
      props.questionAuthorFlag ? props.onAcceptAnswer(props.answer) : ""}}>
      <i className="fa fa-star" aria-hidden="true"></i>
    </span>);

  return (
    <div>
      {acceptedStar}
    </div>
  );
}

export default AcceptedAnswerStar;