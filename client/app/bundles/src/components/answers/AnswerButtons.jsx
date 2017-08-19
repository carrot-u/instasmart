import React from 'react';


const AnswerButtons = props => {
  const classInput = "btn btn-outline-success btn-sm mr-1 py-0"

  return(
      <div className="col mb-2">
        <button className={classInput} onClick={props.onClickComment}> 
          Comment 
        </button>
        {(!props.liked && <button className={classInput} onClick={props.onClickLike}> Like </button>)}
        {(props.liked && <button className={classInput} onClick={props.onClickLike}> Unlike </button>)}

    </div>
  );
};

export default AnswerButtons;