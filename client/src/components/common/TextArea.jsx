import React, {PropTypes} from 'react';

const TextArea = ({name, className, optional, labelClass, rows, label, onChange, placeholder, value, error}) => {
  let wrapperClass = 'form-group';
  if (error && error.length > 0) {
    wrapperClass += " " + 'has-error';
  }

  return (
    <div className={wrapperClass}>
      <label htmlFor={name} className={labelClass}>
        {label}
      </label>{' '}{ optional && (<small>optional</small>)}
      <div className="field">
        <textarea
          type="text"
          name={name}
          className={className}
          placeholder={placeholder}
          value={value}
          rows={rows}
          onChange={onChange}/>
        {error && <div className="alert alert-danger">{error}</div>}
      </div>
    </div>
  );
};
export default TextArea;
