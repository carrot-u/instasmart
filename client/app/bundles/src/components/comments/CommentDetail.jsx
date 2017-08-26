import React from 'react';
import PostCreatorOptions from '../common/PostCreatorOptions';

const CommentDetail = props => {
  let creatorOptions = "";
  const commentAuthor = props.comment.user_name ? props.comment.user_name : "";
  if(props.comment.commentable_type === "Answer"){
    creatorOptions = props.comment.user_id && props.currentUser && (props.comment.user_id === props.currentUser.id) ?
        <PostCreatorOptions 
          editPost={props.toggleEditPost} 
          post={props.comment} 
          onDeletePost={props.onDeletePost}
          type="comments"/> : null;
  } else {
    creatorOptions = props.comment.user && props.comment.user.id 
      && props.currentUser && (props.comment.user.id === props.currentUser.id) ?
    <PostCreatorOptions 
      editPost={props.toggleEditPost} 
      post={props.comment} 
      onDeletePost={props.onDeletePost}
      type="comments"/> : null;
  }

  return (
    <div className="comment-row">
      {props.comment.body}
      <div className="comment-author">
          <div><i>
            {' - '} {commentAuthor} {props.comment.created_at} {' ago'}
          </i></div>
          {creatorOptions}
      </div>
    </div>
  );
}

export default CommentDetail;