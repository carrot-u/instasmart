import React from 'react';

import CommentDetail from './CommentDetail';

const AllComments = props => {
  const commentsListing = props.comments.map(comment => {
      return (
        <div key={comment.id}>
          <CommentDetail  
            comment={comment} 
            currentUser={props.currentUser}
            onDeletePost={props.onDeletePost}
            toggleEditPost={props.toggleEditPost}/>
        </div>);
    });

  return(
    <div className="card-block mx-5">
      {commentsListing}
    </div>
  );
}

export default AllComments;