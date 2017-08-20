import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

// Import project files
import * as questionActions from "../../actions/userActions";


class UserProfileContainer extends React.Component {

  render(){
    return(
      <div className="show-question-top-container">
      Hello!
      </div>
    );
  }
}

function mapStateToProps(state, ownProps){
  console.log("state in user profile", state);
  return {
    showUser: state.users.showUser,
    isLoading: state.users.isLoading,
  };
}

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(userActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfileContainer);