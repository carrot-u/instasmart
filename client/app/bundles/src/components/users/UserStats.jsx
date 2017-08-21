import React from 'react';
import AnimateHeight from 'react-animate-height';

class UserStats extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      questions: {
        height: '0',
        show: true
      },
      answers: {
        height: '0',
        show: true
      },
      comments: {
        height: '0',
        show: true
      },
      likes: {
        height: '0',
        show: true
      },
    }
    this.toggleShow = this.toggleShow.bind(this);
  }

  toggleShow(type){
      this.setState({
        [type]: {
          height: this.state[type].show ? 'auto' : '0',
          show: !this.state[type].show,
        }
      });
  }

  render(){
    const testContent = (<div><h1>Your content goes here</h1>
            <p>Put as many React or HTML components here.akjldhslakjhdlkasjhdlkjsahdlkjsahdlsakjhlakjhdsalkjhdlakjshlkjsahsdlkjahaslkjhdsalkj
            asdsajdkhaslkjdhsakjhdlkj</p></div>);


    return(
      <div className="container">
        <h4 className="mt-2">Activity</h4>
        <div className="row mt-2">
          <h7 onClick={() => this.toggleShow("questions")}>
            Questions ({this.props.user.user_question_activity.length})
          </h7>
          <br />
          <AnimateHeight
            duration={ 1000 }
            height={ this.state.questions.height }>
            {testContent}
          </AnimateHeight>
        </div>
        <div className="row mt-2">
          <h7 onClick={() => this.toggleShow("answers")}>Answers ({this.props.user.user_answer_activity.length})</h7>
          <br />
          <AnimateHeight
            duration={ 1000 }
            height={ this.state.answers.height }>
            {testContent}
          </AnimateHeight>
        </div>
        <div className="row mt-2">
          <h7 onClick={() => this.toggleShow("comments")}>Comments ({this.props.user.user_comment_activity.length})</h7>
          <AnimateHeight
            duration={ 1000 }
            height={ this.state.comments.height }>
            {testContent}
          </AnimateHeight>
        </div>
        <div className="row mt-2">
          <h7 onClick={() => this.toggleShow("likes")}>Likes ({this.props.user.user_votes_activity.length})</h7>
          <AnimateHeight
            duration={ 1000 }
            height={ this.state.likes.height }>
            {testContent}
          </AnimateHeight>
        </div>
      </div>
    );
  }
}

export default UserStats;