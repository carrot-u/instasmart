import React from 'react';


const Jumbotron = props => {
  return(
    <div className="jumbotron text_color">
      <h1 className="display-3">Welcome to InstaSmart</h1>
      <p>InstaSmart is an online forum created by the CarrotU className of Spring 2017. We welcome all software developers of any level, education or background. Sign up and start asking and answering questions now!</p>
      <div className="text-center">
       <button 
        type="button" 
        className="btn btn-primary btn-lg px-5" 
        onClick={props.onClickNewQuestion}
       >Ask a Question</button>
      </div>
    </div>
  );
};

export default Jumbotron;