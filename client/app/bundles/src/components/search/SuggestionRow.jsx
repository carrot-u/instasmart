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
    const style ={
      rowStyle: {
        paddingTop: "3px",
        fontSize: "1.1em",
        ':hover': {
          backgroundColor: "white",
          fontWeight: "500",
        },
      },
      linkStyle: {
        color: "black",
        ':hover': {
          cursor: "pointer",
        }
      },
    }


    let suggestionRow = null;
    if(this.props.suggestion){
      if(this.props.type === 'tags'){
        suggestionRow = (
          <div key={this.props.id} style={style.linkStyle} onClick={() => this.props.handleClickTag(this.props.item.name)}> 
            {highlightMatch(this.props.suggestion, this.props.matchTerm)}
            {' '}({this.props.item.taggings_count})
          </div>);
      }else{
        suggestionRow = (
          <Link key={this.props.id} to={`/${this.props.type}/${this.props.id}`} style={style.linkStyle} > 
            {highlightMatch(this.props.suggestion, this.props.matchTerm)}
          </Link>);
      }
    } 

    return (
      <div style={style.rowStyle}>
       {suggestionRow}
      </div>
    );
  }
}

export default SuggestionRow;