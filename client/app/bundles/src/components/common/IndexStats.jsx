import React from 'react';

const IndexStats = props => {
  const commentCount = props.question.comments.length > 0 ? props.question.comments.length : 0;
  const answerCount = props.question.answers.length > 0 ? props.question.answers.length : 0;
  return(
    <ul className="list-inline">
      <li className="list-inline-item stat">{ answerCount } Answers {' '} </li>
      <li className="list-inline-item stat">{ commentCount } Comments {' '} </li>
      <li className="list-inline-item stat">{ props.question.cached_votes_score } {' '} Likes </li>
      <li className="list-inline-item stat">{ props.question.views_count } {'  '} Views  </li>

    </ul>
  );  
}


export default IndexStats;

