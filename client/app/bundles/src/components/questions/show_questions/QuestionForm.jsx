import React from 'react';
import TextArea from '../../common/TextArea';
import TextInput from '../../common/TextInput';

const QuestionForm = props => {

  function tagsString(tags){
    return tags.map(tag => {
      return ` ${tag.name}`;
    });
  }

  let tagsValue = '';
  if(props.question){
    tagsValue = tagsString(props.question.tags);
  } 
  return (
    <form className="edit-question-form">
      <TextArea
        label="Question"
        labelClass="h3"
        className="form-control"
        style={props.question && {color: "darkgreen"}}
        name="summary"
        rows="2"
        placeholder={"Ask your question..."}
        onChange={props.onChange}
        defaultValue={props.question ? props.question.summary : ''}
        error={props.errors.summary}
      />

      <TextArea
        label="Details"
        labelClass="h5"
        optional={true}
        style={props.question && {color: "darkgreen"}}
        className="form-control pt-0 mb-0"
        name="body"
        rows="2"
        placeholder="Add Question Details..."
        onChange={props.onChange}
        defaultValue={props.question ?  props.question.body : ''}
        error={props.errors.body}

      />

      <TextInput
        label="Tags"
        labelClass="h5"
        optional={true}
        style={props.question && {color: "darkgreen"}}
        className="form-control"
        name="tag_list"
        placeholder="&quot;Happiness&quot;, &quot;Culture&quot;, etc..."
        onChange={props.onChange}
        defaultValue={tagsValue}
        error={props.errors.tags}

      />
      <div className='form-group'>
        <div className="text-right">
          <button className="btn btn-success mr-1" onClick={props.onSubmit}>Submit</button>
          <button className="btn btn-outline-secondary" onClick={props.toggleEdit} >Close</button>
        </div>
      </div>
    </form>
  );
}

export default QuestionForm;