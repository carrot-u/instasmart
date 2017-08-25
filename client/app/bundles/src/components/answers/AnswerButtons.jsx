import React from "react";

const AnswerButtons = props => {
  const classInput = "btn btn-sm mr-1 py-0";

  return (
    <div className="p-0 col mb-2 action-buttons">
      <button className={classInput} onClick={props.onClickComment}>
        {" "}
        Comment{" "}
        <span className="badge">
          {props.commentCount}{" "}
        </span>
      </button>
      {!props.liked &&
        <button className={classInput} onClick={props.onClickLike}>
          {" "}
          Like {" "}
          <span className="badge">
            {props.cached_votes_score}{" "}
          </span>
        </button>}
      {props.liked &&
        <button className={classInput} onClick={props.onClickLike}>
          {" "}
          Unlike {" "}
          <span className="badge">
            {props.cached_votes_score}{" "}
          </span>
        </button>}

    </div>
  );
};

export default AnswerButtons;