import React from 'react';
import escapeRegExp from 'lodash';
import isString from 'lodash';
import Radium from 'radium';
import { Link } from 'react-router-dom';



function highlightMatch(str, substr){
  let curSubStrStart = 0;
  let curSubStrLen = 0;
  const highlight = {
    color: "green",
    fontWeight: "600",
    backgroundColor: "rgba(252, 255, 252, 1)",
    textDecoration: "underline",
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

@Radium
class SuggestionRow extends React.Component {
  render(){
    const rowStyle = {
      paddingTop: "3px",
      fontSize: "1.1em",
      color: "black",
      ':hover': {
        backgroundColor: "white",
        fontWeight: "500",
      }
    }
    return (
      <div style={rowStyle}>
        {this.props.suggestion &&
          <Link to={`/${this.props.type}/${this.props.id}`}> 
            {highlightMatch(this.props.suggestion, this.props.matchTerm)}
          </Link>}
      </div>
    );
  }
}

export default SuggestionRow;