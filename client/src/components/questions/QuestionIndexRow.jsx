import React from 'react';

const QuestionIndexRow = (props) => {
	return (
		<div className="card d-block img-fluid mb-2">
		  <div className="card-header">
		    <div className="row">
		      <div className="col-md-9">

		        <a href="" className="question-summary">
		           <h3>{props.question.summary}</h3>
		        </a>
		      </div>
		      <div className="col-md-3">
		        <small className="float-right"><i>Asked by TODO: NEED USER IN serializer</i></small>

		      </div>
		    </div>
		    <div className="row pl-3">
					TODO: NEED TAGS
		      <h6 className="pr-1"><span className="badge badge-warning">
		      </span></h6>
		    </div>
		  </div>
		</div>
	);
};

export default QuestionIndexRow;