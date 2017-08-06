import React from 'react';

const QuestionAnswerForm = props => {

  return(
    <form onSubmit={props.handleSubmitAnswer} className="mt-4">
      <label htmlFor="answer_response" className="h3"><b>Add Answer:</b></label>
      <textarea 
        className="form-control mb-4" 
        id="answer_response" rows="3" 
        placeholder="Respond to question..." 
        onChange={props.updateAnswerState}
      />
      <div className='form-group'>
        <div className="text-right">
          <button className="btn btn-success mr-1" onClick={props.handleSubmitAnswer}>Save</button>
          <button className="btn btn-outline-secondary" onClick={props.handleHideForm} >Hide</button>
        </div>
      </div>
    </form>
  );
};

export default QuestionAnswerForm;