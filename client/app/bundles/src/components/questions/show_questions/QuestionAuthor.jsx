import React from 'react';

const QuestionAuthor = props => {
  let image, userInfo = "";
  if(props.question.user){
    image = <img src={props.question.user.image} className="profile-image mr-1"/>;
    userInfo = props.question.user.name;
  }

  return (
    <div>
      <div className="row">
        <div className="col-md-3">
          {image}
        </div>
        <div className="col-md-9">
             <small><i>Asked {props.question.created_at} ago by {userInfo}</i></small> 
        </div>
      </div>
    </div>
  );
}

export default QuestionAuthor;