import React from 'react';

const QuestionStats = props => {
  const views = (<div className="stat-box"> Views: {props.question.views_count} </div>);
  const votes = (<div className="stat-box"> Votes: {props.question.cached_votes_score} </div>);
  const comments = props.question.comments ? 
    (<div className="stat-box">Comments: {props.question.comments.length}</div>) : 
    (<div className="stat-box">Comments: 0</div>);
    const answers = props.question.answers ? 
      (<div className="stat-box">Answers: {props.question.answers.length}</div>) : 
      (<div className="stat-box">Answers: 0</div>);

  return (
    <div className="question-stats">
           {views} 
           {votes}
           {views}
          {answers}
    </div>

  );
}

export default QuestionStats;