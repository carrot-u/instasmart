import React from 'react';


const QuestionButtons = props => {
  return(
      <div class="col-sm-4">

        {icon stats}
        <div class="col-sm-8">
        <% if current_user.voted_for? question %>
         <%= link_to "Unlike", unlike_question_path(question), method: :put, type: "button", class: "btn btn-outline-primary pull-right mr-1" %>
        <% else %>
          <%= link_to "Like", like_question_path(question), method: :put, type: "button", class: "btn btn-outline-success pull-right mr-1" %>
        <% end %>
          <%= button_to "Comment", new_question_comment_path(question), :method => :get, :class => "btn btn-outline-success pull-right mr-1" %>
          <%= button_to "Answer", new_question_answer_path(question), :method => :get, :class => "btn btn-outline-success pull-right mr-1" %>
        </div>
    </div>
  );
}