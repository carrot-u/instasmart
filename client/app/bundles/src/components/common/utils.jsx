// HELPER FUNCTIONS
export function checkLikedByUser(likesArray, UserId){
  return (likesArray.filter(like => (like.voter_id === UserId)).length > 0);
}

export function getAcceptedAnswerId(answerArray){
  const accepted = answerArray.filter(answer => (answer.accepted))[0];
  if(accepted){
    return accepted.id;
  }else{
    return 0;
  }
}

export function findById(array, searchId) { 
    const newArray = array.filter(item => (item.id === searchId));
    if(newArray){
      return newArray[0];
    }else{
      return null;
    }
}

export function formatTagsArray(array){
  console.log(array);
  const newArray = array.map((item, index) => {
    return {id: index, text: item};
  });
  console.log("newArray", newArray);
}



// HELPER SORT FUNCTIONS
export function sort(sortType, array){
  switch(sortType){
    case "answered":
      return sortByAnswerCount(array);
    case "commented":
      return sortByCommentCount(array);
    case "votes":
      return sortByVotes(array);
    case "accepted":
      return sortByVotesAndAccepted(array);
    default:
      return sortByCreatedDate(array);
  }
}


function sortByCreatedDate(array){
  const newArray = [...array];
  return newArray.sort((a, b) => {
    return (new Date(b.created_at_unformatted) - new Date(a.created_at_unformatted));
  });
}

function sortByUpdateDate(array){
  const newArray = [...array];
  return newArray.sort((a, b) => {
    return (new Date(b.updated_at) - new Date(a.updated_at));
  });
}

function sortByAnswerCount(array){
  const newArray = [...array];
  return newArray.sort((a, b) => {
    if(b.answers && a.answers){
      return (b.answers.length - a.answers.length);
    }else{
      if(b.answers){
        return 1;
      }else{
        return -1;
      }
    }
  });
}

function sortByCommentCount(array){
  const newArray = [...array];
  return newArray.sort((a, b) => {
    if(b.comments && a.comments){
      return (b.comments.length - a.comments.length);
    }else{
      if(b.commets){
        return 1;
      }else{
        return -1;
      }
    }
  });
}

function sortByViewsCount(array){
  const newArray = [...array];
  return newArray.sort((a, b) => {
      return (b.views_count - a.views_count);
  });
}

function sortByVotes(array){
  const newArray = [...array];
  return newArray.sort((a, b) => {
      return (b.cached_votes_score - a.cached_votes_score);
  });
}

function sortByVotesAndAccepted(array){
  const sortArray = sortByVotes(array).sort((a, b) => {
      return (b.accepted - a.accepted);
  });
  return sortArray;
}