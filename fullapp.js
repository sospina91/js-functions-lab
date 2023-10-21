"use strict";
// (completed above) Define a function, as a function declaration, maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. If they are the same, return that number. Use the if-else construct or a ternary expression - the Math.max method is not allowed.
// 1.
function maxOfTwoNumbers(x, y) {
  if (x >= y) {
    return x;
  } else {
    return y;
  }

  // or more "elegantly" using the fantastic ternary expression!
  // return  x >= y ? x : y;
}

console.log(maxOfTwoNumbers(3, 9));
//   Define a function, as a function expression, maxOfThree that takes three numbers as arguments and returns the largest of them. Again, the Math.max method is not allowed.
//if x !> y it could be equal or less than
// 2.
let maxOfThree = function (x, y, z) {
  if (x > y && x > z) {
    return x;
  } else if (y > x && y > z) {
    return y;
  } else {
    return z;
  }
};
console.log(maxOfThree(55, 75, 65));
//expected = 75
//   Define a function, as a function declaration, isCharAVowel that takes a character as an argument and returns true if it is a vowel, false otherwise.

// 3.
function isCharAVowel(char) {
  let vowels = "aeiouy";
  return vowels.split("").includes(char.toLowerCase());
}
console.log(isCharAVowel("I"));
//expected = true
// less efficient answer
//function isCharAVowel(char) {
//  if (char.toLowerCase() === "a" || char.toLowerCase() === "e" || char.toLowerCase() === "i" || char.  toLowerCase() === "o" || char.toLowerCase() === "u" ) {
//  return true;
//  }
//  return false;
// }

// Define a function, as a function expression, sumArray that takes an array of numbers and returns the sum of those numbers. For example, sumArray([2, 4, 5]); would return 11.
// 4.
const sumArray = function (numArray) {
  let sum = 0;
  numArray.forEach(function (num) {
    sum += num;
  });
  return sum;
};
console.log(sumArray([9, 2, 3, 0, 5]));
//expected = 19

// Define a function, as a function declaration, multiplyArray that takes an array of numbers and returns the product those numbers. For example, multiplyArray([2, 4, 5]); would return 40.
// 5.
function multiplyArray(numArray) {
  let product = 1;
  numArray.forEach(function (num) {
    product = product * num;
  });
  return product;
}
console.log(multiplyArray([100, 3, 2]));
//expected = 600

// Define a function, as a function expression, numArgs that returns the number of arguments passed to the function when called

//6.
const numArgs = function (...args) {
  return args.length;
};
console.log(numArgs(1, 2, 3, 4, 5, 6));
//expected= 6

// Define a function, as a function declaration, reverseString that takes a string, reverses the characters, and returns it. For example, reverseString('rockstar'); would return the string "ratskcor".

// 7.

function reverseString(str) {
  let chars = str.split("");
  let reversed = chars.reverse();
  let reversedStr = reversed.join("");
  return reversedStr;
}
console.log(reverseString("cowboy"));

// Define a function, as a function expression, longestStringInArray that takes an array of strings as an argument and returns the length of the longest string.

// 8.
const strLengths = [];
const longestStringInArray = function (arrayOfStrings) {
  arrayOfStrings.forEach(function (str) {
    strLengths.push(str.length);
  });
  return Math.max(...strLengths);
};
console.log(
  longestStringInArray(["a", "to", "three", "random", "sat", "impossible"])
);

//Define a function, as a function declaration, stringsLongerThan that takes an array of strings and a number as arguments; and returns an array of the strings that are longer than the number passed in.  For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3); would return ["hello", "morning"].

// 9.
const longerStrings = [];
function stringsLongerThan(arrayOfStrings, num) {
  arrayOfStrings.forEach(function (str) {
    if (str.length > num) {
      longerStrings.push(str);
    }
  });
  return longerStrings;
}
console.log(
  stringsLongerThan(["eleven", "two", "three", "twenty", "one", "hundred"], 5)
);
