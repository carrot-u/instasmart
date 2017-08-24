import React from 'react';


const QuestionButtons = props => {
  return(
      <div className="action-buttons">
        <button className={"btn btn-sm mr-1" + (props.pullRight ? " pull-right" : "")} onClick={(e) => props.onClickPost(e, "comment")}> 
          Comment 
        </button>
        <button className={"btn btn-sm mr-1" + (props.pullRight ? " pull-right" : "")} onClick={(e) => props.onClickPost(e, "answer")}> 
          Answer 
        </button>
        {(!props.liked && <button className={"btn btn-sm mr-1" + (props.pullRight ? " pull-right" : "")} onClick={props.onClickLike}> Like </button>)}
        {(props.liked && <button className={"btn btn-primary mr-1" + (props.pullRight ? " pull-right" : "")}onClick={props.onClickLike}> Unlike </button>)}

    </div>
  );
};

export default QuestionButtons;
