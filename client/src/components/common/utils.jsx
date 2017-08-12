//general helper utils and functions

export function sortByUpdateDate(array){
  return array.sort((a, b) => {
    return (new Date(b.updated_at) - new Date(a.updated_at));
  });
}