import React from 'react';


const TopAnswer = props => {
  const showTopAnswer = 'response' in props.answer ? true : false;
  const answerBy = 'user' in props.answer ? 
      (props.answer.user && <div>Answered by {props.answer.user.name} on {props.answer.created_at}
       </div>) : 
      (<div> Answered {props.answer.created_at}</div>);
  return(
    <div>
      {showTopAnswer &&
        (<div>
          <h4 className="card-title">Top Answer</h4>
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
            <small><a href=""> See All Answers</a></small>
          </div>
         </div>)
      }
   </div>
  );
}

export default TopAnswer;

