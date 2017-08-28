import React from 'react';

const UserProfile = props => {
  return (
    <div className="container">
      <div className="row pt-1 pl-1 mr-0 show-question-detail">
        <div className="card-block row">
          <div className="col-md-4">
            <img src={props.user.image} className="img-fluid profile-image-large"/>
          </div>
          <div className="col-md-8">
            <h2 className=""> <i>{props.user.name} </i></h2>
            <p><i>Joined on {props.user.created_at}</i></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;