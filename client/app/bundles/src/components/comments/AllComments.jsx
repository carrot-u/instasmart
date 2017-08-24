import React from 'react';

import CommentDetail from './CommentDetail';

const AllComments = props => {
  console.log("all comments props", props);
  const commentsListing = props.comments.map(comment => {
      return (
        <div key={comment.id}>
          <CommentDetail  
            comment={comment} 
            currentUser={props.currentUser}
            onDeletePost={props.onDeletePost}/>
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