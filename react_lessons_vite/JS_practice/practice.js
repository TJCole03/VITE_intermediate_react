// Write a JavaScript program to get the difference between a given number and 13, if the number is broader than 13 return double the absolute difference. 

//1. get difference between 13 and n
//2. if n is greater than 13, return double the difference
//3. if n is less than 13, return the difference
//4. if n = 13, return 0 


let num = 13
let n 
function hooDeeLahDee(n, num) {
  if (n < num){
    return ((num-n))
  } else if 
    (n > num) {
      return ((n-num)*2)
    } else if
      (n === num) {
        return 'asscheeks'
      }
  }
console.log(hooDeeLahDee(10, num))
console.log(hooDeeLahDee(15, num))
console.log(hooDeeLahDee(30, num))
console.log(hooDeeLahDee(13, num))
// // Define a function named difference that takes a parameter n
// function difference(n) {
//     // Check if n is less than or equal to 13
//     if (n <= 13) {
//         // If true, return the difference between 13 and n
//         return 13 - n;
//     } else {
//         // If false, return the double of the difference between n and 13
//         return (n - 13) * 2;
//     }
// }

// // Log the result of calling the difference function with the argument 32 to the console
// console.log(difference(32));


// Write a JavaScript program to create another string by adding "Py" in front of a given string. If the given string begins with "Py" return the original string.  

//1. have a string already
//2. create new string; new stirng has 'Py' in FRONT of it
//3. if string beging with "Py" already, return original string

function checkString(str1){                 //does it start with the substring 'Py'?
  if (str1 === null || str1 === undefined || str1.substring(0,2) === 'Py') {
    //if true, return str1
    return str1
  }
  //if false, prepend "Py" to str1 and return result
  return "Py" + str1
}

console.log(checkString('chattanooga'))
console.log(checkString('Python'))


// const originalString = "Hello World";
// const charToInsert = 'a';
// const indexToInsertAt = 5;

// let chars = [...originalString];
// chars.splice(indexToInsertAt, 0, charToInsert); // Splice to insert without deleting any elements
// const newString = chars.join('');

// console.log(newString);

// const originalString = "Hello World";
// const charToInsert = 'a';
// const indexToInsertAt = 5;

// const newString = originalString.slice(0, indexToInsertAt) + charToInsert + originalString.slice(indexToInsertAt);

// console.log(newString);

// Write a JavaScript program to remove a character at the specified position in a given string and return the modified string. 

//1. set string
//2. split strings characters into array
//3. traverse to index 3 or 4
//4. what method do I use to remove the character at index n?

// function removeChar(str2){}
  let str2 = 'HolyShitBallsBatman!'
  let arr = str2.split('')
  // return arr
  // const newStr = arr.splice(3, arr.length).join('')
  const newStr = arr.splice(3, 1).join('')
  // return newStr

console.log(newStr)


// console.log(removeChar('HolyShitBallsBatman!').join(''))

let arr2 = [1, 2, 3, 4, 5]; // an array with 5 elements

arr.splice(2, 1); // remove 1 element at index 2 (value: 3)
console.log(arr2.join('')); // output: [1, 2, 4, 5]

function remove_character(str, char_pos) {
  // Extract the substring from the beginning of str up to (but not including) char_pos
  part1 = str.substring(0, char_pos);
  // Extract the substring from char_pos + 1 to the end of str
  part2 = str.substring(char_pos + 1, str.length);
  // Return the concatenation of part1 and part2, effectively removing the character at char_pos
  return (part1 + part2);
}