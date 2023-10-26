// Q1.  Take a sentence as an input and reverse every word in that sentence.
// a. Example - This is a sunny day > shiT si a ynnus yad.

function reverseWords(sentence) {
  let words = sentence.split(/\s+/);
  let reversedWords = words.map((word) => reverseString(word));
  let reversedSentence = reversedWords.join(" ");
  return reversedSentence;
}

function reverseString(str) {
  let charArray = str.split("");
  let reversedArray = charArray.reverse();
  let reversedString = reversedArray.join("");
  return reversedString;
}

let inputSentence = "This is a sunny day";
let reversedResult = reverseWords(inputSentence);
console.log("Reversed Sentence:", reversedResult);

// Q2.Perform sorting of an array in descending order.

function bubbleSortDescending(arr) {
  let len = arr.length;

  for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      if (arr[j] < arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
}

let myArray = [5, 2, 8, 1, 9, 4];

let sortedArray = bubbleSortDescending(myArray);

console.log("Sorted Array in Descending Order:", sortedArray);
