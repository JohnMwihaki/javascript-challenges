// 1. sum of possitive numbers
function sumOfPositives(num) {
  let sum = 0;
  for (let i = 0; i <= num.length; i++) {
    if (num[i] > 0) {
      sum += i;
    }
  }

  return sum;
}
console.log(sumOfPositives([1, -3, -4, -6, 3]));

//2.finding the maximam value in an array

function findMax(array) {
  let great = [0];
  let i = 0;
  while (i < array.length) {
    if (array[i] > great) {
      great = array[i];
    }
    i++;
  }
  return great;
}
let list = [7, 8, 9, 10];
console.log(findMax(list));

//3.election winner
function findWinner(arrayOfOject) {
  let max = [0];
  let i = 0;
  while (i < arrayOfOject.length) {
    if (arrayOfOject[i].votes > max.votes) {
      max = arrayOfOject[i];
    }
    i++;
  }

  return max;
}
let candidate = [
  { name: "Alice", votes: 50 },
  { name: "Bob", votes: 75 },
  { name: "Charlie", votes: 65 },
];

console.log(findWinner(candidate));

// 4.Longest word
function findLongestWord(array) {
  let word = array[0];
  let wrd = 0;

  for (wrd = 0; wrd < array.length; wrd++) {
    if (array[wrd].length >= word.length) {
      word = array[wrd];
    }
  }
  return word;
}
let wordList = ["mark", "maina", "lulu", "ann"];
console.log(findLongestWord(wordList));

//5.Count Properties that takes a object and returns the numer of properties

//6 Filter by length

function filterByLength(arrayStrings, minLength) {
  return arrayStrings.filter((s) => s.length >= minLength);
}
let words = ["cat", "giraffe", "hippo", "dog", "elephant"];
console.log(filterByLength(words, 5));

//7 sum of even numbers

//8.Difference between sum of even and odd

//9.Count truthy

//10.Average of numbers

//11. Linear Search

//12.Reverse Linear Search

//13.linear search all indices

//14 cOunt Occurrences

//15.Remove Duplicates
