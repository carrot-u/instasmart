import React from 'react';

const QuestionAuthor = props => {
  console.log(props.question.user);
  let image, userInfo = "";
  if(props.question.user){
    image = <img src={props.question.user.image} className="profile-image mr-1"/>;
    userInfo = props.question.user.name;
  }

  return (
    <div>
      <div className="question-author-container center-items pr-2 row">
        <div className="col-md-8">
          {image}
          {userInfo}
        </div>
        <div className="col-md-8">
          <small><i>Created on {props.question.created_at}</i></small>
        </div>
      </div>
    </div>
  );
}

export default QuestionAuthor;