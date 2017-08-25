import React from "react";

const QuestionStatButtons = props => {
  const classInput = props.pullRight
    ? "btn btn-sm mr-1 pull-right"
    : "btn btn-sm mr-1";

  const views = <div> Views: <span className="badge">{props.question.views_count}</span> </div>;
  const commentCount = props.question.comments
    ? props.question.comments.length
    : 0;
  const answerCount = props.question.answers
    ? props.question.answers.length
    : 0;

  return (
    <div>
      <ul className="list-inline pb-0">
        <li className="list-inline-item action-buttons">
          <button
            className={classInput}
            onClick={() => props.onClickPost("comments")}
          >
            {" "}
            Comment <span className="badge"> {commentCount} </span>
          </button>
        </li>
        <li className="list-inline-item action-buttons">
          <button
            className={classInput}
            onClick={() => props.onClickPost("answers")}
          >
            {" "}
            Answer <span className="badge"> {answerCount} </span>
          </button>
        </li>
        <li className="list-inline-item action-buttons">
          {!props.liked &&
            <button className={classInput} onClick={props.onClickLike}>
              {" "}
              Like{" "}
              <span className="badge">
                {" "}{props.question.cached_votes_score}{" "}
              </span>{" "}
            </button>}
          {props.liked &&
            <button className={classInput} onClick={props.onClickLike}>
              {" "}
              Unlike{" "}
              <span className="badge">
                {" "}{props.question.cached_votes_score}{" "}
              </span>
              {props.question.cached_votes_score}
            </button>}
        </li>
        <li className="list-inline-item">
          {views}
        </li>

      </ul>
    </div>
  );
};

export default QuestionStatButtons;