import React from 'react';
import SuggestionGroup from './SuggestionGroup';

const SuggestionsContainer = props => {
  const style = {
    suggestionContainer: {
      backgroundColor: "rgba(0, 100, 0, 0.02)",
      border: "1px solid rgba(0, 0, 0, 0.15)",
      borderTop: "none",
      borderRadius: "4px",
      paddingLeft: "10px",
      fontSize: ".8em",

    }
  }


  return(
    <div style={style.suggestionContainer} >
      <SuggestionGroup 
        groupType="questions" 
        questions={props.questions} 
        suggestionAttribute="summary" 
        matchTerm={props.matchTerm}
        />
    </div>
  );
}

export default SuggestionsContainer;