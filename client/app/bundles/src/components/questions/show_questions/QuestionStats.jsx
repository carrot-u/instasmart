import React from 'react';

const QuestionStats = props => {
  const statClass = "stat-box center-items my-1";

  const views = (<div className={statClass}> Views: {props.question.views_count} </div>);
  const votes = (<div className={statClass}> Likes: {props.question.cached_votes_score} </div>);
  const comments = props.question.comments ? 
    (<div className={statClass}>Comments: {props.question.comments.length}</div>) : 
    (<div className={statClass}>Comments: 0</div>);
    const answers = props.question.answers ? 
      (<div className={statClass}>Answers: {props.question.answers.length}</div>) : 
      (<div className={statClass}>Answers: 0</div>);

  return (
    <div className="question-stats">
           {views} 
           {votes}
           {comments}
          {answers}
    </div>

  );
}

export default QuestionStats;