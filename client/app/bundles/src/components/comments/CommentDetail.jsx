import React from 'react';

const CommentDetail = props => {
  const commentAuthor = props.comment.user ? props.comment.user.name : "";
  return (
    <div className="comment-row">
      {props.comment.body}
      <div className="comment-author">
          <div><i>
            {' - '} {commentAuthor} {' on '} {props.comment.created_at}
          </i></div>
      </div>
    </div>
  );
}

export default CommentDetail;