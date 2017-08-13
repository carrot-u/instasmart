import React from 'react';

const TextInput = ({name, className, style, defaultValue, optional, labelClass, label, onChange, placeholder, value, error}) => {
  let wrapperClass = 'form-group';
  if (error && error.length > 0) {
    wrapperClass += " " + 'has-error';
  }

  return (
    <div className={wrapperClass}>
      <label htmlFor={name} className={labelClass}>
        {label}
      </label>{' '}{optional && (<small>optional</small>)}
      <div className="field">
        <input
          type="text"
          name={name}
          style={style}
          className={className}
          placeholder={placeholder}
          value={value}
          defaultValue={defaultValue}
          onChange={onChange}/>
        {error && <div className="alert alert-danger">{error}</div>}
      </div>
    </div>
  );
};

export default TextInput;
