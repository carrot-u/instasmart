import React from "react";
import TopAnswer from '../answers/TopAnswer';
import IndexQuestionTags from '../tags/IndexQuestionTags';
import IndexQuestionDetail from './IndexQuestionDetail'; 

const QuestionIndexRow = props => {
  const showAnswer = props.question.answers.length > 0 ? <TopAnswer answer={props.question.answers[0]} /> : null;
  return (
      <div className="card d-block img-fluid mb-2">
        <div className="card-header">
          <IndexQuestionDetail question={props.question} />
          <IndexQuestionTags question={props.question} />
        </div>
      <div className="card-block border-1">
        {showAnswer}
      </div>
      <div class="row">
      </div>
    </div>
  );
};

export default QuestionIndexRow;