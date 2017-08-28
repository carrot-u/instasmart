import React from 'react';
import AnimateHeight from 'react-animate-height';

import UserActivityRow from './UserActivityRow';

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
    const activityTypes = ["questions", "answers", "comments", "likes"];
    const activityObjectName = ["user_question_activity", "user_answer_activity", "user_comment_activity", "user_votes_activity"];

    let activityOutput = activityTypes.map((activityType, i) => {
      const activityDetails = activityType === "likes" ? (<div className="activity-row pt-2 pb-2">
           <div className="col-sm-4 activity-main-content">Questions Liked: {this.props.user[activityObjectName[i]].filter(act => act.votable_type === "Question").length} </div>
           <div className="col-sm-4 activity-main-content">Answers Liked: {this.props.user[activityObjectName[i]].filter(act => act.votable_type === "Answer").length} </div>
          </div>) 
       : this.props.user[activityObjectName[i]].length > 0 ? 
        (this.props.user[activityObjectName[i]].map(act => {
          return <UserActivityRow type={activityType} activity={act} key={act.id}/>
        })) : "";
      return(
        <div className="row mt-2" key={activityType}>
          <div className="col-md-12">
            <h7 onClick={() => this.toggleShow(activityType)} className="activity-sub-header">
             {this.state[activityType].show === true ? <i className="fa fa-plus-square-o" aria-hidden="true"></i> :
             <i className="fa fa-minus-square-o" aria-hidden="true"></i>}{' '}
             {activityType[0].toUpperCase() + activityType.slice(1)} ({this.props.user[activityObjectName[i]].length}){' '}

            </h7>
            <div className="col-md-12 pt-2 pb-1">
              <AnimateHeight
                duration={ 500 }
                height={ this.state[activityType].height }>
                {activityDetails}
              </AnimateHeight>
            </div>
          </div>
        </div>
      );
    });

    return(
      <div className="container card-block">
        <div className="activity-header">
          <h3 className="card-block">User Activity</h3>
        </div>
        <div className="card-block">
          {activityOutput}
        </div>
      </div>
    );
  }
}

export default UserStats;
