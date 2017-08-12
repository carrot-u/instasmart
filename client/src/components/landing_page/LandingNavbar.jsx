import React from 'react';
// import * as api from '../../api/apiUtils';

class LandingNavbar extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      signedIn: false
    };
    this.onClickSignIn = this.onClickSignIn.bind(this);
  }

  onClickSignIn(){
    // api.post("/auth/google_oauth2");
  }

  render(){
    return(
      <nav className="navbar navbar-toggleable-md navbar-inverse fixed-top" style={{backgroundColor: "#68BF54"}}>
      <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="g-signin2" data-onsuccess="onSignIn"></div>
        <a className="navbar-brand" href="">InstaSmart</a>

        <div className="collapse navbar-collapse" id="navbarsExampleDefault">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Questions</a>
               <div className="dropdown-menu" aria-labelledby="dropdown01">
                <a className="dropdown-item" href="">Ask a Question</a>
                <a className="dropdown-item" href="">Top Questions</a>
                <a className="dropdown-item" href="">Unanswered Questions</a>
                <a className="dropdown-item" href="">By Category</a>
                 <a className="dropdown-item" href="">By Tag</a>
                </div>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="" href="" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Tags</a>
              <div className="dropdown-menu" aria-labelledby="dropdown01">
                <a className="dropdown-item" href="">Search Tags</a>
                <a className="dropdown-item" href="">Popular Tags</a>
                </div>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="http://example.com" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Users</a>
              <div className="dropdown-menu" aria-labelledby="dropdown01">
                <a className="dropdown-item" href="">Search by Username</a>
                <a className="dropdown-item" href="">Register</a>
              </div>
            </li>
          </ul>

              <div className="g-signin2" data-onsuccess="onSignIn"></div>
          </div>
      </nav>

    );
  }
}

export default LandingNavbar;


// <% if current_user %>
//   <form class="form-inline my-2 my-lg-0">
//     <input class="form-control mr-sm-2" type="text" placeholder="Search">
//     <button type="button" class="btn btn-outline-secondary">Search</button>
//     <%= link_to "Sign out", signout_path, id: "sign_out", class: "btn btn-outline-secondary mx-1" %>
//     <a href="<user_profile_page>"><%= image_tag current_user.image, class: "img-fluid profile_thumbnail" %></a>
//   </form>
// <% else %>