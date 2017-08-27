import React from 'react';
// import star from '../../images/gold_star.svg';

const TopAnswer = props => {
  const answerBy = 'user' in props.answer ? 
      (props.answer.user && <div>Answered by {props.answer.user.name} {props.answer.created_at} ago
       </div>) : 
      (<div> Answered {props.answer.created_at} ago</div>);
  return(
    <div>
      {props.answer &&
        (<div className="">
          <h6 className="card-title top-answer">
            <span className="top-answer-star active">
              <i className="fa fa-star" aria-hidden="true"></i>
            </span>{' '}Top Answer
          </h6>
          <div className="card-text" role="tab" id="headingOne">
            <div className="row ml-2 pb-2">
              {props.answer.response}
            </div>
            <div className="row ml-2 pb-2">
              <small className="">
                <i>
                {answerBy}
                </i>
              </small>
            </div>
          </div>
         </div>)
      }
   </div>
  );
}

export default TopAnswer;

