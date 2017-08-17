import React from 'react';

const CommentDetail = props => {
  return (
    <div>
      {props.comment.body}
    </div>
  );
}

export default CommentDetail;