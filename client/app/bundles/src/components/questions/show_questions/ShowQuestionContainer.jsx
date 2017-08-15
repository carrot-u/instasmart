import React from 'react';

// project files
import QuestionDetail from './QuestionDetail';

class ShowQuestionConatiner extends React.Component{

  render(){
    return(
      <div className="container">
        <QuestionDetail question={this.props.question}/>
      </div>
    );
  }
}

export default ShowQuestionConatiner;