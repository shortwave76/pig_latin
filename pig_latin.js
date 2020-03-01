//I still need to fix the capitalization engine, but the punctuation engine seems to be working now. :D

function pigLatin(str) {


  let newArr = [];

  let testRegex = /[a-z0-9]/i;
//replaces the first letter
  const fixUpperCase = word => word[0].toUpperCase() + word.substring(1);

  const fixLowerCase = word => word.substring(0, word.search(/\-/) + 1) + word[word.search(/\-/) + 1].toLowerCase() + word.substring(word.search(/\-/) + 2);


  str.split(" ").forEach(word => word.search(/[aeiou]/i) === 0 ? newArr.push(word[0] === "a" || word[0] === "A" ? `${word}-nay` : `${word}-ay`) :
    newArr.push(testRegex.test(word[word.length - 1]) ? `${word.substring(word.search(/[aeiou]/i))}-${word.substring(0, word.search(/[aeiou]/i))}ay` :
      `${word.substring(word.search(/[aeiou]/i), word.length-1)}-${word.substring(0, word.search(/[aeiou]/i))}ay${word[word.length-1]}`));


  return fixLowerCase(fixUpperCase(newArr.join(" ")));

}
