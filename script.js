let word = findLongestWord(["Ed", " black", "flux", "Technology's"]);
function findLongestWord(array) {
    var longestWord = "";
  
    array.forEach(function(word) {
      if(word.length > longestWord.length) {
        longestWord = word;
      }
    });
  
    return longestWord;
  }
  
  console.log(word);