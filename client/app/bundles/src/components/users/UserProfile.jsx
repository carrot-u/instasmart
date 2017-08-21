import React from 'react';

const UserProfile = props => {
  return (
    <div className="row pt-1 pl-1 mr-0 show-question-detail">
      <div className="col-md-4">
        <img src={props.user.image} className="profile-image-large mx-1 my-2"/>
      </div>
      <div className="col-md-8">
        <div className="row">
          <h2 className="pl-2 my-2"> <i>{props.user.name} </i></h2>
        </div>
        <div className="row">
          <small><i>Joined on {props.user.created_at}</i></small>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;