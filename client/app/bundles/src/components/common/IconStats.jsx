import React from 'react';

const IconStats = props => {
  const addClass = props.addClass ? props.addClass : "";

  return(
    <div className={addClass}>
      {props.question.views_count > 0 &&
        <span className="badge badge-success badge-pill mr-1">
          <i className="fa fa-eye" aria-hidden="true" />
          {' '} {props.question.views_count}
        </span>
      }
      {props.question.cached_votes_score > 0 &&
        <span className="badge badge-success badge-pill mr-1">
          <i className="fa fa-thumbs-up" aria-hidden="true" />
          {' '} { props.question.cached_votes_score}
        </span>
      }
      {props.question.comments.length > 0 &&
        <span className="badge badge-success badge-pill mr-1">
          <i className="fa fa-comment" aria-hidden="true" />
          {' '} { props.question.comments.length}
        </span>
      }
      {props.question.answers.length> 0 &&
        <span className="badge badge-success badge-pill">
          <i className="fa fa-pencil" aria-hidden="true" />
          {' '} { props.question.answers.length}
        </span>
      }
    </div>
  );  
}


export default IconStats;

