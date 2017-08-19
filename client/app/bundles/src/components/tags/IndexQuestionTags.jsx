import React from 'react';

const QuestionIndexTags = props => {
  const tags = props.question.tags.map(tag => {
    return (
      <h6 key={tag.id} className="pr-1">
        <span className="badge badge-warning">{tag.name}</span>
      </h6>
    );
  });
  const addClass = props.addClass ? props.addClass : "";

  return (
    <div className={`row pl-3 ${addClass}`}>
      {tags}
    </div>
  );
};

export default QuestionIndexTags;