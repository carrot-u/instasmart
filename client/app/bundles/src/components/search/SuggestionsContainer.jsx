import React from 'react';
import onClickOutside from 'react-onclickoutside'
import SuggestionGroup from './SuggestionGroup';

class SuggestionsContainer extends React.Component {
  constructor(props){
    super(props);
    this.handleClickTag = this.handleClickTag.bind(this);
  }


  handleClickOutside(e){
    this.props.clickOutside();
  }

  handleClickTag(tag){
    this.props.getTaggedQuestions(tag);
    this.props.clickOutside();
  }

  render(){
    const style = {
      suggestionContainer: {
        backgroundColor: "rgba(253, 255, 251, .97)",
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
        overflow: "auto",
        maxHeight: "500px",
      }
    }

    return(
      <div className="suggestions-container" style={style.suggestionContainer} >
        <SuggestionGroup 
          groupType="questions" 
          questions={this.props.questions} 
          suggestionAttribute="summary" 
          matchTerm={this.props.matchTerm}
          />
        <SuggestionGroup 
          groupType="users" 
          users={this.props.users} 
          suggestionAttribute="name" 
          matchTerm={this.props.matchTerm}
          />
        <SuggestionGroup 
          groupType="tags" 
          tags={this.props.tags} 
          suggestionAttribute="name" 
          matchTerm={this.props.matchTerm}
          handleClickTag={this.handleClickTag}
          />
      </div>
    );
  }
}

export default onClickOutside(SuggestionsContainer);