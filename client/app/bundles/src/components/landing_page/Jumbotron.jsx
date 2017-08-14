import React from 'react';
import { Link } from 'react-router-dom';


const Jumbotron = props => {
  return(
    <div className="jumbotron text_color">
      <h1 className="display-3">Welcome to InstaSmart</h1>
      <p>InstaSmart is an online forum created by the CarrotU className of Spring 2017. We welcome all carrots to submit, answer or comment on questions in order to share knowledge and enable discussions that make our company even better. Start asking and answering questions now!</p>
      <div className="text-center">
       <button 
        type="button" 
        className="btn btn-primary btn-lg px-5" 
        onClick={props.onClickNewQuestion}
       >Ask a Question</button>
       <Link to="/questions">
         <button 
          type="button" 
          className="btn btn-secondary btn-lg px-5 ml-1" 
          onClick={() => {window.location.href='/questions'}}
         >See All Questions</button>
       </Link>
      </div>
    </div>
  );
};

export default Jumbotron;