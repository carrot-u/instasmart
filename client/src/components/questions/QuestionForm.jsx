import React from 'react';

const QuestionForm = props => {

  return(
    <form onSubmit={props.handleSubmitPost} className="mt-4">
      <label htmlFor="answer_response" className="h3"><b>Add {props.formType}:</b></label>
      <textarea 
        className="form-control mb-4" 
        id="answer_response" rows="3" 
        placeholder="Respond to question..." 
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

export default QuestionForm;