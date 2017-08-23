import React from 'react';

const PostForm = props => {
  let formatter = {};
  if(props.formType === "comment"){
    formatter = {
      rows: "2",
      placeholder: "Comment on the question...",
      labelClass: "h4",
      labelStyle: {
        color: "darkgreen"
      },
      textareaClass: "form-control mb-2"
    };
  }else{
    formatter = {
      rows: "3",
      placeholder: "Respond to question...",
      labelClass: "h3",
      labelStyle: {
        color: "darkblue"
      },
      textareaClass: "form-control mb-3"
    };
  }
  return(
    <form onSubmit={props.handleSubmitPost} className="mt-4">
      <label htmlFor="response" className={formatter.labelClass} style={formatter.labelStyle}><b>Add {props.formType}:</b></label>
      <textarea 
        className={formatter.textareaClass} 
        id="response" rows={formatter.rows} 
        placeholder={formatter.placeholder}  
        onChange={props.updatePostState}
      />
      <div className='form-group'>
        <div className="text-right">
          <button className="btn btn-success mr-1" onClick={props.handleSubmitPost}>Save</button>
          <button className="btn btn-outline-secondary" onClick={props.handleHideForm} >Hide</button>
        </div>
      </div>
    </form>
  );
};

export default PostForm;