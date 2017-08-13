import React from 'react';


const QuestionButtons = props => {
  return(
      <div>
        <button className="btn btn-outline-success pull-right mr-1" onClick={(e) => props.onClickPost(e, "comment")}> 
          Comment 
        </button>
        <button className="btn btn-outline-success pull-right mr-1" onClick={(e) => props.onClickPost(e, "answer")}> 
          Answer 
        </button>
        {(!props.liked && <button className="btn btn-outline-success pull-right mr-1" onClick={props.onClickLike}> Like </button>)}
        {(props.liked && <button className="btn btn-outline-primary pull-right mr-1" onClick={props.onClickLike}> Unlike </button>)}

    </div>
  );
};

export default QuestionButtons;

// if current_user.voted_for? question
//  <%= link_to "Unlike", unlike_question_path(question), method: :put, type: "button", class: "btn btn-outline-primary pull-right mr-1" %>
// <% else %>
//   <%= link_to "Like", like_question_path(question), method: :put, type: "button", class: "btn btn-outline-success pull-right mr-1" %>
// <% end %>