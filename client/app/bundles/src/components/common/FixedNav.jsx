import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link } from 'react-router-dom';

// Import project files
import StickyNavbar from "./StickyNavBar";
import QuestionsNavContent from "../questions/QuestionsNavContent";
import QuestionModalContainer from "./QuestionModalContainer";
import * as modalActions from "../../actions/modalActions";
import * as questionActions from "../../actions/questionActions";
import * as searchActions from "../../actions/searchActions";
import logo from "../../images/logo.jpg";
import FixedSearchField from '../search/FixedSearchField';
import SuggestionsContainer from '../search/SuggestionsContainer';


class FixedNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: null,
      sortedBy: "recent",
    }
    this.updatedSearchQuery = this.updatedSearchQuery.bind(this);
    this.onSearch = this.onSearch.bind(this);
    this.sortQuestions = this.sortQuestions.bind(this);
  }

  updatedSearchQuery(e){
    e.preventDefault();
    const query = e.target.value;
    if (!query.length) {
      this.props.searchActions.clearSearchSuggestions();
      this.setState({searchQuery: query});
      return;
    }
    this.setState({searchQuery: query});
    this.props.searchActions.getSearchSuggestions(query, "questions");
  }

  onSearch(){
    if(this.state.searchQuery){
      this.props.actions.getSearchResults({search: this.state.searchQuery});
    }
  }

  sortQuestions(sortType = "recent"){
    this.setState({sortedBy: sortType});
    this.props.actions.sortQuestions(sortType);
  }

  render(){
    return(
      <StickyNavbar
        isCondensed={this.state.condenseNav}
      >
        <div className="row navbar-row-1">
          <Link to="/questions">
            <img id="logo" src={logo} alt="Carrot With Monocle" className="pull-left"/>
          </Link>
          <div className="search-field-container center-items">
            {this.props.includeSort && <FixedSearchField 
              updatedSearchQuery={this.updatedSearchQuery}  
              onSearch={this.onSearch}  
            />}
          </div>
        </div>
        {this.props.includeSort &&
            <QuestionsNavContent 
              onClickNewQuestion={this.props.modalActions.showModal}
              sort={this.sortQuestions}
              sortedBy={this.props.sortedBy}
            />}
        {(this.props.questionSuggestions) && this.state.searchQuery && 
           <SuggestionsContainer 
             questions={this.props.questionSuggestions}
             matchTerm={this.state.searchQuery}/>}

        {this.props.includeSort && 
          <QuestionModalContainer
              onClickNewQuestion={this.props.modalActions.showModal}
              onToggleModal={this.props.modalActions.toggleModal}
              showNewQuestionModal={this.props.showQuestionModal}
              actions={this.props.actions}
              editQuestion={this.props.editQuestion}
              handleDeleteTag={this.props.modalActions.deleteTagOnEditQuesion}
              handleAdditionTag={this.props.modalActions.addTagOnEditQuesion}
              handleDragTag={this.props.modalActions.swapTagsOnEditQuesion}
            />
        }
      </StickyNavbar>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    showQuestionModal: state.modal.showQuestionModal,
    editQuestion: state.modal.editQuestion,
    questionSuggestions: state.search.questionSuggestions
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(questionActions, dispatch),
    modalActions: bindActionCreators(modalActions, dispatch),
    searchActions: bindActionCreators(searchActions, dispatch),

  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FixedNav);
