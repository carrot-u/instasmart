import React from 'react';

const QuestionAuthor = props => {
  let image, userInfo = "";
  if(props.question.user){
    image = <img src={props.question.user.image} className="profile-image mr-1"/>;
    userInfo = props.question.user.name;
  }

  return (
    <div>
      <div className="question-author-container">
        <div>
          {image}
        </div>
        <div>
          {userInfo}
        </div>
        <div>
          <small><i>Asked on {props.question.created_at}</i></small>
        </div>
      </div>
    </div>
  );
}

export default QuestionAuthor;