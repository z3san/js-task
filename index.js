//Task 1 : Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method. 
function reverseString(inputString) {
  let reversedString = "";
  for (let i = inputString.length - 1; i >= 0; i--) {
    reversedString += inputString.charAt(i);
  }
  return reversedString;
}

// Test the function
let inputStr = "Hello, World!";
let reversedStr = reverseString(inputStr);
console.log(reversedStr); 
// ----------------------------------------------------------//


//Task 2 : Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array. 
function sumPositiveNumbers(arr) {
  let sum = 0;
  for (let num of arr) {
    if (num > 0) {
      sum += num;
    }
  }
  return sum;
}

// Test the function
let inputArr = [2, -5, 10, -3, 7];
let output = sumPositiveNumbers(inputArr);
console.log(output);

//------------------------------------------//
//Task 3: Write a JavaScript program to find the most frequent element in an array and return it. 
function findMostFrequentElement(arr) {
  let frequency = {};
  let maxCount = 0;
  let mostFrequentElement;

  for (let num of arr) {
    frequency[num] = (frequency[num] || 0) + 1;
    if (frequency[num] > maxCount) {
      maxCount = frequency[num];
      mostFrequentElement = num;
    }
  }

  return mostFrequentElement;
}

// Test the function
let inputArr2 = [3, 5, 2, 5, 3, 3, 1, 4, 5];
let output2 = findMostFrequentElement(inputArr2);
console.log(output2);

//--------------------------------------//
//Task 4: Create a function that takes a sorted array of numbers and a target value as input. The function should find two numbers in the array that add up to the target value. Return an array containing the indices of the two numbers.
function findTwoSum(sortedArray, target) {
  let left = 0;
  let right = sortedArray.length - 1;

  while (left < right) {
    const sum = sortedArray[left] + sortedArray[right];
    if (sum === target) {
      return [left, right];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }

  // If no pair is found, return an empty array
  return [];
}

// Test the function
let inputArr3 = [1, 3, 6, 8, 11, 15];
let target = 9;
let output3 = findTwoSum(inputArr3, target);
console.log(output3); 


//--------------------------------------------------------//
//Task 5: Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation.

function calculate(num1, operator, num2) {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      if (num2 === 0) {
        return "Error: Division by zero is not allowed.";
      }
      return num1 / num2;
    default:
      return "Error: Invalid operator.";
  }
}

// Test the calculator function
let num1 = 10;
let num2 = 5;
let operator = '+';
let result = calculate(num1, operator, num2);
console.log(result);

operator = '/';
num2 = 2;
result = calculate(num1, operator, num2);
console.log(result); 

operator = '%';
result = calculate(num1, operator, num2);
console.log(result); 

//-------------------------------------------------------//

//Task 6: Create a program that generates a random password of a specified length. The password should include a mix of uppercase letters, lowercase letters, numbers, and special characters.

function generateRandomPassword(length) {
  const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const specialCharacters = "!@#$%^&*()-_+=[]{}|:;<>,.?/";

  const allCharacters =
    uppercaseLetters + lowercaseLetters + numbers + specialCharacters;
  let password = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allCharacters.length);
    password += allCharacters.charAt(randomIndex);
  }

  return password;
}

// Test the password generator
const passwordLength = 12;
const randomPassword = generateRandomPassword(passwordLength);
console.log(randomPassword);


//------------------------------------------------------------//
//Task 8: Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number.
function findSecondSmallest(arr) {
  if (arr.length < 2) {
    return "Error: The array should have at least two elements.";
  }

  let smallest = Infinity;
  let secondSmallest = Infinity;

  for (let num of arr) {
    if (num < smallest) {
      secondSmallest = smallest;
      smallest = num;
    } else if (num < secondSmallest && num !== smallest) {
      secondSmallest = num;
    }
  }

  if (secondSmallest === Infinity) {
    return "Error: There is no second smallest element in the array.";
  }

  return secondSmallest;
}

// Test the function
let inputArr4 = [3, 1, 7, 5, 2, 6];
let output4 = findSecondSmallest(inputArr4);
console.log(output4); // Output: 2
