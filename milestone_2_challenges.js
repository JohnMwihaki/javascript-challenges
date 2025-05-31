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
function countProperties(arrayObjectKeys)
{
  return Object.keys(arrayObjectKeys).length
}
let user = {
  name: "kimani",
  age: 18,
  city: "Muranga"
};

console.log("Number of properties:", countProperties(user));

//6 Filter by length

function filterByLength(arrayStrings, minLength) {
  return arrayStrings.filter((s) => s.length >= minLength);
}
let words = ["cat", "giraffe", "hippo", "dog", "elephant"];
console.log(filterByLength(words, 5));

//7 sum of even numbers
function sumOfEvenNumbers(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 == 0) {
      sum += numbers[i];
    }
  }
  return sum;
}
const num = [2, 5, 8, 9, 8];
console.log(sumOfEvenNumbers(num));

//8.Difference between sum of even and odd
function DifferenceEvenOdd(arrayNumber) {
  let even = 0;
  let odd = 0;
  for (let digit = 0; digit < arrayNumber.length; digit++) {
    if (arrayNumber[digit] % 2 == 0) {
      even += arrayNumber[digit];
    }

    if (arrayNumber[digit] % 2 !== 0) {
      odd += arrayNumber[digit];
    }
  }
  return even - odd;
}
const difference = [2, 5, 8, 9, 8];
console.log(DifferenceEvenOdd(difference));

//9.Count truthy
function countTruthy(obj){
  let count=0;
  let countValue=[];
  for (let key in obj){
    if(obj[key]){
      count++;
      countValue.push(obj[key])

    }
  }
  console.log(countValue)
  return count;
}
let objects={ a: 0, b: "hello", c: false, d: 42, e: null }
console.log("Truth Count is:" ,countTruthy(objects));

//10.Average of numbers
function Average(units) {
  let sum = 0;
  let num = 0;
  let average;
  while (num < units.length) {
    sum += units[num];
    average = sum / units.length;

    num++;
  }

  return {
    sum,
    average,
  };
}
console.log(Average([3, 4, 5, 6, 7]));

//11. Linear Search
function linerSearch(array, goal) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === goal) {
      return array[i];
    }
  }
  return -1;
}
let numb = [1, 2, 3, 4, 4, 5];
console.log("Return: ", linerSearch(numb, 6));
console.log("Return: ", linerSearch(numb, 5));

//12.Reverse Linear Search
function reverseLinerSearch(reverseArray, target) {
  for (let i = 0; i < reverseArray.length; i++) {
    if (reverseArray[i] === target) {
      return reverseArray.lastIndexOf(reverseArray[i]);
    }
  }
  return -1;
}
let arrayList = [1, 2, 3, 4, 4, 9];

console.log("Return Index: ", reverseLinerSearch(arrayList, 6));
console.log("Return Index: ", reverseLinerSearch(arrayList, 9));

//13.linear search all indices
function linerSearchAll(arrayAll, targetNum) {
  let indicesAll = [];
  for (let i = 0; i < arrayAll.length; i++) {
    if (arrayAll[i] === targetNum) {
      indicesAll.push(i);
    }
  }

  if (indicesAll.length > 0) {
    return indicesAll;
  } else {
    return "[]";
  }
}
let linearAll = [2, 4, 5, 8, 6, 8];
console.log(`Return indices:${linerSearchAll(linearAll, 8)}`);
console.log(`Return indices:${linerSearchAll(linearAll, 12)}`);

//14 count Occurrences



//15.Remove Duplicates
function removeDuplicate(arrayDuplicate) {
  let notDuplicate = [];
  let elementSeen={};  

  for(let i = 0; i < arrayDuplicate.length; i++) {
    let current = arrayDuplicate[i];
    if (!elementSeen[current]) {    
      notDuplicate.push(current);
      elementSeen[current] = true;  
    }
  }

  return notDuplicate;
}

let elements=[1,2,3,3,4,5,5,6,7,8,8]
console.log("No Duplicate:", removeDuplicate(elements))

//16.Most frequent
