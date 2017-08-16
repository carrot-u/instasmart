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
    <div className="mt-1">
      <h3>{props.answers.length} Answers </h3> 
      {answersListing}
    </div>
  );
}

export default AllAnswers;