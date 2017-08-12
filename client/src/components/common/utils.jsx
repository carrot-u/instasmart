//general helper utils and functions

export function sortByUpdateDate(array){
  return array.sort((a, b) => {
    return (new Date(b.updated_at) - new Date(a.updated_at));
  });
}

export function sortByAnwerCount(array){
  return array.sort((a, b) => {
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