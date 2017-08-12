import React from 'react';

const TextArea = ({name, className, style, defaultValue, optional, labelClass, rows, label, onChange, placeholder, value, error}) => {
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
          style={style}
          name={name}
          className={className}
          placeholder={placeholder}
          value={value}
          defaultValue={defaultValue}
          rows={rows}
          onChange={onChange}/>
        {error && <div className="alert alert-danger">{error}</div>}
      </div>
    </div>
  );
};
export default TextArea;
