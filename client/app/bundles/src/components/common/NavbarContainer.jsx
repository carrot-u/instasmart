import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link } from 'react-router-dom';


//Project imports
import StickyNavbar from "./StickyNavBar";
import QuestionsNavContent from "../questions/QuestionsNavContent";
import QuestionModalContainer from "./QuestionModalContainer";
import * as modalActions from "../../actions/modalActions";
import * as questionActions from "../../actions/questionActions";
import logo from "../../images/logo.jpg";
import FixedSearchField from '../search/FixedSearchField';



class NavbarContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      condenseNav: false,
      saving: false,
      newQuestion: {
        summary: null,
        body: null,
        tag_list: null,
      },
      errors: {},
    };
    this.handleOnSearchFocus = this.handleOnSearchFocus.bind(this);
    this.handleOnSearchBlur = this.handleOnSearchBlur.bind(this);
  }

  handleOnSearchFocus() {
    this.setState({ condenseNav: true });
  }

  handleOnSearchBlur() {
    this.setState({ condenseNav: false });
  }


  render() {
    return (
      <StickyNavbar
        isCondensed={this.state.condenseNav}
      >
        <div className="row navbar-row-1">
          <Link to="/questions">
            <img id="logo" src={logo} alt="Carrot With Monocle" className="pull-left"/>
          </Link>
          <div className="search-field-container center-items">
            <FixedSearchField 
              updatedSearchQuery={this.props.updatedSearchQuery}  
              onSearch={this.props.onSearch}  
            />
          </div>
        </div>
        <QuestionsNavContent 
          handleOnSearchFocus={this.handleOnSearchFocus}
          handleOnSearchBlur={this.handleOnSearchBlur}
          onClickNewQuestion={this.props.modalActions.showModal}
          sort={this.props.sort}
          sortedBy={this.props.sortedBy}
        />
        <QuestionModalContainer
          onClickNewQuestion={this.props.modalActions.showModal}
          onToggleModal={this.props.modalActions.toggleModal}
          showNewQuestionModal={this.props.showQuestionModal}
          actions={this.props.actions}
          editQuestion={this.props.editQuestion}
        />
      </StickyNavbar>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    showQuestionModal: state.modal.showQuestionModal,
    editQuestion: state.modal.editQuestion,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(questionActions, dispatch),
    modalActions: bindActionCreators(modalActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NavbarContainer);