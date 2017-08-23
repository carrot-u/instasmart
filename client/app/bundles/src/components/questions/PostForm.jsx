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
  let placeholder, defaultValue = "";
  let label = props.formType;
  if(props.formType === "comment"){
    label = "Add Comment:"
    placeholder = "Comment on the question...";
  }else{
    placeholder = "Answer the question...";
    label = "Add Answer:"
    if(props.post){
      defaultValue = props.post;
      label = "Edit Answer:"
    }
  }
  console.log("props in post form", props);

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