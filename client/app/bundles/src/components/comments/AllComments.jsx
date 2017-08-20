import React from 'react';

import CommentDetail from './CommentDetail';

const AllComments = props => {
  const commentsListing = props.comments.map(comment => {
      return (
        <div key={comment.id}>
          <CommentDetail  comment={comment} />
        </div>);
    });

  return(
    <div className="mx-5">
      <h5 className="mt-2">Comments ({props.comments.length})</h5>
      {commentsListing}
    </div>
  );
}

export default AllComments;