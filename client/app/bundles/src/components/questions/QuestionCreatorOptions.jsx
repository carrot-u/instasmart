import React from "react";
import {Link} from 'react-router-dom';

const QuestionCreatorOptions = props => {
  return (
    <div className="container">
      <div className="row mt-2">
        <small>
          <ul className="edit-delete list-inline">
            <li className="list-inline-item">
              <a
                href=""
                onClick={e => {
                  e.preventDefault();
                  props.onEditQuestion(props.question);
                }}
              >
                Edit
              </a>
            </li>
            <li className="list-inline-item">
              <Link to="/questions" onClick={props.onDeleteQuestion}>Delete</Link>
            </li>
          </ul>
        </small>
      </div>
    </div>
  );
};

export default QuestionCreatorOptions;