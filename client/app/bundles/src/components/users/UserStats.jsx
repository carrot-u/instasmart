import React from 'react';


const UserStats = props => {
  let questions = [], answers = [], comments =[], likes = [];
  for (let i=0; i < props.activity.length; i++ ){
    if(props.activity[i].hasOwnProperty("votable_id")){
      likes.push(props.activity[i]);
    }else if(props.activity[i].hasOwnProperty("accepted")){
      answers.push(props.activity[i]);
    }else if(props.activity[i].hasOwnProperty("commentable_type")){
      comments.push(props.activity[i]);
    }else{
      questions.push(props.activity[i]);
    }
  }
  console.log("questions: ", questions);
  console.log("answers: ", answers);
  console.log("comments: ", comments);
  console.log("likes: ", likes);

  return(
    <div>
      <div className="row mt-2">
        <div className="col-md-6">
          <h5>Questions ({questions.length})</h5>

        </div>
        <div className="col-md-6">
          <h5>Answers ({answers.length})</h5>

        </div>
      </div>
      <div className="row mt-2">
        <div className="col-md-6">
          <h5>Comments ({comments.length})</h5>

        </div>
        <div className="col-md-6">
          <h5>Likes ({likes.length})</h5>

        </div>
      </div>
    </div>
  );
}

export default UserStats;