import React from 'react';

const UserProfile = props => {
  return (
    <div className="row pt-1 pl-1 mr-0 show-question-detail">
      <img src={props.user.image} className="profile-image mr-1"/>
      <h2 className="pl-2"> <i>{props.user.name} </i></h2>
    </div>
  );
}

export default UserProfile;