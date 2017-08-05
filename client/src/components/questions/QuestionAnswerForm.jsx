import React from 'react';

const QuestionAnswerForm = props => {

  return(
    <form onSubmit={props.handleSubmit} className={props.showForm}>
      <label htmlFor="answer_response" className="h3"><b>Answer</b></label>
      <textarea className="form-control mb-4" id="answer_response" rows="3" placeholder="Respond to question..." />
      <div className='form-group'>
        <div className="text-right">
          <button className="btn btn-success mr-1" >Save</button>
          <button className="btn btn-outline-secondary" >Hide</button>
        </div>
      </div>
    </form>
  );
};

export default QuestionAnswerForm;