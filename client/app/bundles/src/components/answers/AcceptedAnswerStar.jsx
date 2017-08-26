import React from 'react';

const AcceptedAnswerStar = props => {
  console.log("questionAuthorFlag props", props);
  let acceptedStar = props.questionAuthorFlag ? 
    (<span className={props.answerAccepted ?  "top-answer-star-author active" : "top-answer-star-author"} 
      onClick={() => props.onAcceptAnswer(props.answer)}>
      <i className="fa fa-star" aria-hidden="true"></i>
    </span>) :
    (<span className={props.answerAccepted ?  "top-answer-star active" : "top-answer-star"}>
      <i className="fa fa-star" aria-hidden="true"></i>
    </span>)


  return (
    <div>
     {acceptedStar}
    </div>
  );
}

export default AcceptedAnswerStar;