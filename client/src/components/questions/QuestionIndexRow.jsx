import React from "react";
import TopAnswer from '../answers/TopAnswer';

const QuestionIndexRow = props => {
	const showAnswer = props.question.answers.length > 0 ? <TopAnswer answer={props.question.answers[0]} /> : null;
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
							<small className="float-right">
								<i>Asked by {props.question.user_id} on {props.question.created_time_date} TODO: NEED USER NAME IN serializer</i>
							</small>
						</div>
					</div>
					<div className="row pl-3">
						TODO: NEED TAGS
						<h6 className="pr-1"><span className="badge badge-warning" /></h6>
					</div>
				</div>
			<div className="card-block border-1">
				{showAnswer}
			</div>
		</div>
	);
};

export default QuestionIndexRow;