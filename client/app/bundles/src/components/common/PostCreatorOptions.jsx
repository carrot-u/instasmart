import React from "react";
import {Link} from 'react-router-dom';

const PostCreatorOptions = props => {
  return (
    <div className="">
      <div className="row mt-0 pl-3">
        <small>
          <ul className="list-inline mb-1 edit-delete">
            <li className="list-inline-item">
              <span
                className="creator-links"
                onClick={e => {
                  e.preventDefault();
                  props.editPost(props.type, props.post);
                }}
              >
                Edit
              </span>
            </li>
            <li className="list-inline-item">
              <span className="creator-links" onClick={() => props.onDeletePost(props.post, props.type)}>Delete</span>
            </li>
          </ul>
        </small>
      </div>
    </div>
  );
};

export default PostCreatorOptions;