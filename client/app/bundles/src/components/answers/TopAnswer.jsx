import React from 'react';


const TopAnswer = props => {
  const showTopAnswer = 'response' in props.answer ? true : false;
  const answerBy = 'user' in props.answer ? 
      (props.answer.user && <div>Answered by {props.answer.user.name} {props.answer.created_at} ago
       </div>) : 
      (<div> Answered {props.answer.created_at} ago</div>);
  return(
    <div>
      {showTopAnswer &&
        (<div>
          <h6 className="card-title top-answer">Top Answer</h6>
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

