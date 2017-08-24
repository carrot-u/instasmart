import React from "react";
import {Link} from 'react-router-dom';

const PostCreatorOptions = props => {
  return (
    <div className="container">
      <div className="row mt-2">
        <small>
          <ul className="list-inline">
            <li className="list-inline-item">
              <span
                className="creator-links"
                onClick={e => {
                  e.preventDefault();
                  props.editPost();
                }}
              >
                Edit
              </span>
            </li>
            <li className="list-inline-item">
              <span className="creator-links" onClick={props.onDeletePost}>Delete</span>
            </li>
          </ul>
        </small>
      </div>
    </div>
  );
};

export default PostCreatorOptions;