import React from 'react';

const AnswerDetail = props => {
  const answerBy = props.answer.user ? `on ${props.answer.user.first_name} ${props.answer.user.last_name}` : null;
  return (
    <div className="show-answer">
      <div className="">
          <div className="row ml-2 pb-2">
              {props.answer.response}
          </div>
          <div className="ml-2 pb-2">
            <small className=""><i>
            Answered {answerBy} on {props.answer.created_at}
            </i></small>
          </div>
      </div>
    </div>
  );
}

export default AnswerDetail;

