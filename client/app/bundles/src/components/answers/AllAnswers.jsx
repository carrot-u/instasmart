import React from 'react';

import AnswerDetail from './AnswerDetail';

const AllAnswers = props => {
      console.log(" props.answer", props.answers);

  const answersListing = props.answers.map(answer => {
    if(answer){
      return (
        <div key={answer.id}>
          <AnswerDetail  answer={answer} />
        </div>);
    }else{
      console.log(" not making it");
      <div />
    }
  });

  return (
    <div className="mt-5 all-answers">
      <h3>Answers ({props.answers.length})</h3>
      {answersListing}
    </div>
  );
}

export default AllAnswers;