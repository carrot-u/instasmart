import React from 'react';
import SuggestionGroup from './SuggestionGroup';

const SuggestionsContainer = props => {
  const style = {
    suggestionContainer: {
      backgroundColor: "rgba(247, 255, 242, .98)",
      border: "1px solid rgba(0, 0, 0, 0.15)",
      borderTop: "none",
      borderRadius: "4px",
      paddingLeft: "10px",
      paddingRight: "5px",
      fontSize: ".8em",
      position: "fixed",
      top: "46px",
      left: "216px",
      zIndex: "999",
    }
  }

  return(
    <div className="suggestions-container" style={style.suggestionContainer} >
      <SuggestionGroup 
        groupType="questions" 
        questions={props.questions} 
        suggestionAttribute="summary" 
        matchTerm={props.matchTerm}
        />
      <SuggestionGroup 
        groupType="users" 
        users={props.users} 
        suggestionAttribute="name" 
        matchTerm={props.matchTerm}
        />
      <SuggestionGroup 
        groupType="tags" 
        tags={props.tags} 
        suggestionAttribute="name" 
        matchTerm={props.matchTerm}
        />
    </div>
  );
}

export default SuggestionsContainer;