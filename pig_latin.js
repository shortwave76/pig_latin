//I still need to fix the capitalization engine, but the punctuation engine seems to be working now. :D
//Also, the engine currently makes and into 'and-nay'--should be 'and-ay'

function pigLatin(str) {


  let newArr = [];

  let testRegex = /[a-z0-9]/i;

  /*currently only working on the first word of the entire string*/

  const fixUpperCase = word => word[0].toUpperCase() + word.substring(1);

  /*currently only working on the first word of the entire string*/
  const fixLowerCase = word => word.substring(0, word.search(/\-/) + 1) + word[word.search(/\-/) + 1].toLowerCase() + word.substring(word.search(/\-/) + 2);

  /*Splits the input string and tests each word before reformatting each word. Then it splits the word at the first vowel, moves the beginning of the word to the end,
  appends a suffix (-ay, or -nay), then returns any punctuation that got shifted to the middle, back to the end*/
  str.split(" ").forEach(word => word.search(/[aeiou]/i) === 0 ? newArr.push(word[0] === "a" || word[0] === "A" ? `${word}-nay` : `${word}-ay`) :
    newArr.push(testRegex.test(word[word.length - 1]) ? `${word.substring(word.search(/[aeiou]/i))}-${word.substring(0, word.search(/[aeiou]/i))}ay` :
      `${word.substring(word.search(/[aeiou]/i), word.length-1)}-${word.substring(0, word.search(/[aeiou]/i))}ay${word[word.length-1]}`));


  return fixLowerCase(fixUpperCase(newArr.join(" ")));

}
