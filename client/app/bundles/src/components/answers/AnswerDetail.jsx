import React from 'react';
import AnswerButtons from './AnswerButtons';

const AnswerDetail = props => {
  let answerBy = "";
  let authorImage = "";
  if(props.answer.user){
    answerBy = `by ${props.answer.user.first_name} ${props.answer.user.last_name}`;
    authorImage =  <img src={props.answer.user.image} className="profile-image mr-1"/>;
  }
  return (
    <div className="show-answer pr-4 row">
      <div className="col-sm-2 pt-2">
          {authorImage} <br />
          <small className=""><i>
            Answered {answerBy} on {props.answer.created_at}
          </i></small>
      </div>
      <div className="col-sm-10 pt-2">
          {props.answer.response}
          <AnswerButtons />
      </div>

    </div>
  );
}

export default AnswerDetail;

