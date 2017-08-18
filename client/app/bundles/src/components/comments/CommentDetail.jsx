import React from 'react';

const CommentDetail = props => {
  return (
    <div className="comment-row">
      {props.comment.body}
      <div className="comment-author">
        {props.comment.user && 
          <div><i>
            {' - '} {props.comment.user.name} {' on '} {props.comment.created_at}
          </i></div>
        }
      </div>
    </div>
  );
}

export default CommentDetail;