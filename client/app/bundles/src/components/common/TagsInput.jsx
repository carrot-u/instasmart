import React from 'react';
import { WithContext as ReactTags } from 'react-tag-input';


const TagsInput = props => {
  let wrapperClass = 'form-group';
  if (props.error && props.error.length > 0) {
    wrapperClass += " " + 'has-error';
  }


  return (
    <div className={wrapperClass}>
      <label htmlFor={props.name} className={props.labelClass}>
        {props.label}
      </label>{' '}{props.optional && (<small>optional</small>)}
      <div className="field">

        <ReactTags tags={props.tags}
            suggestions={props.suggestions}
            handleDelete={props.handleDeleteTag}
            handleAddition={props.handleAdditionTag}
            handleDrag={props.handleDragTag} 
            placeholder={props.placeholder}/>

        {props.error && <div className="alert alert-danger">{props.error}</div>}
      </div>
    </div>
  );
};

export default TagsInput;

