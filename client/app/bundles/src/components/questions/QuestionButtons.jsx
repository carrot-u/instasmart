import React from 'react';


const QuestionButtons = props => {
  const classInput = props.pullRight ? "btn btn-outline-success mr-1 pull-right" : "btn btn-outline-success mr-1";

  return(
      <div>
        <button className={classInput} onClick={(e) => props.onClickPost(e, "comment")}> 
          Comment 
        </button>
        <button className={classInput} onClick={(e) => props.onClickPost(e, "answer")}> 
          Answer 
        </button>
        {(!props.liked && <button className={classInput} onClick={props.onClickLike}> Like </button>)}
        {(props.liked && <button className={classInput} onClick={props.onClickLike}> Unlike </button>)}

    </div>
  );
};

export default QuestionButtons;
