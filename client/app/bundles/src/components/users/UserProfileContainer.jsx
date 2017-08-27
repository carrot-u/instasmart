import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

// Import project files
import * as userActions from "../../actions/userActions";
import ScrollToTopOnMount from "../common/ScrollToTop";
import UserProfile from './UserProfile';
import UserStats from './UserStats';
import FixedNav from '../common/FixedNav';


class UserProfileContainer extends React.Component {

  componentWillMount() {
    this.props.actions.loadUserById(this.props.match.params.id);
  }

  render(){
    let showProfile, profileInfo, stats, joinedDate = "";
    if (this.props.isLoading || !this.props.showUser) {
      showProfile = (
        <div className="container loading-questions row mt-4">
          <div className="col-3 offset-5">
            <i className="fa fa-spinner fa-spin fa-4x fa-fw mb-3" />
            {" "}Loading...
          </div>
        </div>
      );
    }else{
      profileInfo = <UserProfile user={this.props.showUser} />;
      stats = <UserStats user={this.props.showUser} user={this.props.showUser} />;
    }
    return(
      <div>
        <FixedNav includeSort={false}/>

        <div className="show-question-top-container container">
          <ScrollToTopOnMount />
          <div className="row">
            <div className="col-md-12 show-question pr-0">
              {showProfile}
              {profileInfo}
              {stats}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps){
  return {
    showUser: state.users.showUser,
    currentUser: state.users.currentUser,
    isLoading: state.users.isLoading,
  };
}

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(userActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfileContainer);