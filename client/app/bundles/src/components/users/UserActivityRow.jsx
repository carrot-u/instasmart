import React from 'react';
import {Link} from 'react-router-dom';

const UserActivityRow = props => {
  // console.log("UserActivityRow props", props);
  let rowContent = "";
  switch (props.type){
    case "questions":
      rowContent = (
        <div className="activity-row pt-2 pb-2">
          <Link to={`/questions/${props.activity.id}`} className="activity-link"> 
            <div className="activity-main-content">{props.activity.summary} </div>
            <div className="activity-secondary-content pl-1">{props.activity.body}</div>
            <div className="created-date pl-2">--{props.activity.created_at}</div>
          </Link>
        </div>);
        break;
    case "answers":
      rowContent = (
        <div className="activity-row pt-2 pb-2">
          <Link to={`/questions/${props.activity.question_id}`} className="activity-link"> 
            <div className="activity-main-content">{props.activity.response} </div>
            <div className="created-date pl-2">--{props.activity.created_at}</div>
          </Link>
        </div>);
      break;
    case "comments":
      rowContent = (
        <div className="activity-row pt-2 pb-2">
          <Link to={`/questions/${props.activity.commentable_id}`} className="activity-link"> 
            <div className="activity-main-content">{props.activity.body} </div>
            <div className="created-date pl-2">--{props.activity.created_at}</div>
          </Link>
        </div>);
      break;
    default:
      break;
  }

  return(
    <div>
      {rowContent}
    </div>
  );
}

export default UserActivityRow;