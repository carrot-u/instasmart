import React from 'react';

const QuestionIndexTags = props => {
  const tags = props.question.taggings.map(tag => {
    return (
      <h6 key={tag.id} className="pr-1">
        <span className="badge badge-warning">{tag.name}</span>
      </h6>
    );
  });

  return (
    <div className="row pl-3">
      {tags}
    </div>
  );
};

export default QuestionIndexTags;