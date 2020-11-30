const countVowels = (str) => {
  if(str === '' || str === 'undefined')
    return;

  let total = str.match(/[aeiou]/gi).length;
  return total;
}


countVowels("Palm");


//countVowels("Celebration") ➞ 5
//countVowels("Palm") ➞ 1
