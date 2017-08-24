import React from 'react';

const PostForm = props => {
  let formatter = {
    rows: "3",
    labelClass: "h3",
    labelStyle: {
      color: "darkgreen"
    },
    textareaClass: "form-control mb-3"
  };
  console.log("postform props", props);
  let placeholder = "Comment on the question...";
  let defaultValue = "";
  let label = props.formType;
  if(props.formType === "comments"){
    label = "Add Comment"
    if(props.editPost){
      defaultValue = props.post.body;
      label = "Edit Comment"
    }
  }else{
    console.log("PostForm", props);
    placeholder = "Answer the question...";
    label = "Add Answer"
    if(props.editPost){
      defaultValue = props.post;
      label = "Edit Answer"
    }
  }
  
  return(
    <form onSubmit={props.handleSubmitPost} className="mt-4">
      <label htmlFor="response" className={formatter.labelClass} style={formatter.labelStyle}><b>{label}:</b></label>
      <textarea 
        className={formatter.textareaClass} 
        id="response" rows={formatter.rows} 
        placeholder={placeholder}  
        defaultValue={defaultValue}
        onChange={props.updatePostState}
      />
      <div className='form-group'>
        <div className="text-right">
          <button className="btn btn-success mr-1" onClick={props.handleSubmitPost}>Submit</button>
          <button className="btn btn-outline-secondary" onClick={props.handleHideForm} >Close</button>
        </div>
      </div>
    </form>
  );
};

export default PostForm;