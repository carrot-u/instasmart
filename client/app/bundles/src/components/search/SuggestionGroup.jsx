import React from 'react';
import SuggestionRow from './SuggestionRow'


function jsUcfirst(string) 
{
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const SuggestionGroup = props => {

  const style = {
    suggestionsHeader: {
      borderBottom: "0.5px solid lightgrey",
      paddingTop: "8px",
    }
  }

  let groupList = "No Results Found";
  if (props[props.groupType]){
    groupList = props[props.groupType].map(item => {
      return (
        <SuggestionRow 
          key={item.id} 
          type={props.groupType}
          id={item.id}
          suggestion={item[props.suggestionAttribute]} 
          matchTerm={props.matchTerm}
          />
      )
    });
  }

  return (
    <div>
      <h4 style={style.suggestionsHeader}>{jsUcfirst(props.groupType)}</h4>
      <div className="pl-1">{groupList}</div>
    </div>
  );
}

export default SuggestionGroup;