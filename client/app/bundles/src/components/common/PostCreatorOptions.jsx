import React from "react";
import {Link} from 'react-router-dom';

const PostCreatorOptions = props => {
  return (
    <div className="container">
      <div className="row mt-2">
        <small>
          <ul className="list-inline">
            <li className="list-inline-item">
              <a
                href=""
                onClick={e => {
                  e.preventDefault();
                  props.editPost();
                }}
              >
                Edit
              </a>
            </li>
            <li className="list-inline-item">
              <a href="" onClick={props.onDeletePost}>Delete</a>
            </li>
          </ul>
        </small>
      </div>
    </div>
  );
};

export default PostCreatorOptions;