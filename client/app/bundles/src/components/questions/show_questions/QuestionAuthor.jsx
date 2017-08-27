import React from 'react';

const QuestionAuthor = props => {
  let image, userInfo = "";
  if(props.question.user){
    image = <img src={props.question.user.image} className="profile-image mr-1"/>;
    userInfo = props.question.user.name;
  }

  return (
    <div>
      <div className="question-author-container row">
        <div className="col-md-5 offset-md-7">
            {image} <small><i>Asked {props.question.created_at} ago by {userInfo}</i></small> 
        </div>
      </div>
    </div>
  );
}

export default QuestionAuthor;