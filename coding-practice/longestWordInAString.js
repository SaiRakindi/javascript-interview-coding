function longestWord(sentence) {
  //   Bruteforce approach
  //   let longCharWord = "";
  //   for (const word of sentence.split(" ")) {
  //     if (word.length >= longCharWord.length) longCharWord = word;
  //   }
  //   return longCharWord;

  return sentence.split(" ").reduce((longest, word) => {
    return word.length > longest.length ? word : longest;
  }, "");
}

const sentence = "The quick brown fox jumps the lazy dog";
const result = longestWord(sentence);
console.log(result);
