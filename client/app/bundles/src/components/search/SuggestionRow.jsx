import React from 'react';
import escapeRegExp from 'lodash';
import isString from 'lodash';

function highlightMatch(str, substr){
  let curSubStrStart = 0;
  let curSubStrLen = 0;
  const highlight = {
    color: "green",
    fontWeight: "600",
    textDecoration: "underline"
  }

  if (substr === '') {
    return str;
  } else if (!str || !isString(str)) {
    throw new TypeError('First argument must be a string');
  }

  let match = new RegExp('(' + escapeRegExp(substr) + ')', 'gi');
  let result = str.split(match);

  // Apply span to all odd elements (i.e. matching)
  for (let i = 1, length = result.length; i < length; i += 2) {
    curSubStrLen = result[i].length;
    curSubStrStart += result[i - 1].length;
    result[i] = (<span key={i} style={highlight}>{result[i]}</span>);
    curSubStrStart += curSubStrLen;
  }
  return result;
}

const SuggestionRow = props => {
  const rowStyle = {
    paddingTop: "3px"
  }

  return (
    <div style={rowStyle}>
      {highlightMatch(props.suggestion, props.matchTerm)}
    </div>
  );
}

export default SuggestionRow;