

<% if question.views_count > 0 %>
  <span className="badge badge-success badge-pill"><i className="fa fa-eye" aria-hidden="true"></i> <%= question.views_count %></span>
<% end %>
<% if question.cached_votes_score != 0 %>
  <span className="badge badge-success badge-pill"><i className="fa fa-thumbs-up" aria-hidden="true"></i> <%= question.cached_votes_score %></span>
<% end %>
<% if question.comments.length > 0 %>
  <span className="badge badge-success badge-pill"><i className="fa fa-comment" aria-hidden="true"></i> <%= question.comments.length %></span>
<% end %>
<% if question.answers.length > 0 %>
  <span className="badge badge-success badge-pill"><i className="fa fa-pencil" aria-hidden="true"></i> <%= question.answers.length %></span>
<% end %>