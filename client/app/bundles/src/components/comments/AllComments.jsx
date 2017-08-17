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
    <div className="ml-3" style={{borderTop: "1px solid grey"}}>
      {commentsListing}
    </div>
  );
}

export default AllComments;