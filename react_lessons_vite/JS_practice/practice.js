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

function charRemoval(str, index) {
  newStr1 = str.substring(0, index);
  newStr2 = str.substring(index + 1, str.length)

return newStr1 + newStr2
}

console.log(charRemoval('HolyShitBallsBatman!', 3))
console.log(charRemoval('FootyFooty', 8))

// Write a JavaScript program to create another string from a given string with the first character of the given string added to the front and back.  

/*
1. get originalString
2. create variable for newString
3. create function to get first character in originalString by itself (originalString.split(''))
4. make newString into array of separate characters (call it bibimbapArray)
5. use array method to add first character (in this case 'b') to index 0 and last index of bibimbapArray
5. make bibimbapArray into a second new string and return that new new String. (call it finalString)
*/

// let originalString = 'Bobby'
// let newString = 'bibimbap'

function bonkers(origStr, newStr) {
 let bobbyArray = origStr.split('')
 // let oneLetter = JSON.stringify(bobbyArray.splice(0,1).join())
  //what if we didn't stringify??
 let oneLetter = bobbyArray.splice(0,1).join()
  // return oneLetter
  // const addLetter = (oneLetter) => {}
    let poo = newStr.split('')
    poo.unshift(oneLetter)
    poo.push(oneLetter)
    console.log(poo,'poo')
    let finalString = poo.join('')
    console.log(finalString)
  
}


console.log(bonkers('bobby', 'bibimbap'))



class Person {
  constructor(name, age, country) {
    this.name = name 
    this.age = age
    this.country = country
    
  }

  sayHi(){
    console.log(`Hi! I am ${this.name}. I am ${this.age} years old and hail from ${this.country}`)
  }
  
}

const Garth = new Person("Garth", 800, 'Antarctica')

console.log(Garth)
console.log(Garth.sayHi())


class Redneck{
  constructor(firstName, favBand, favBeer, arrestCount){
    this.firstName = firstName,
    this.favBand = favBand,
    this.favBeer = favBeer,
    this.arrestCount = arrestCount
  }

  runFromPolice(){
    return `${this.firstName}!! Turn off the ${this.favBand} n' bring the ${this.favBeer}!! We gotta git goin' if we don't wanna have ${this.arrestCount} arrests!!`
  }
}

const Redneck1 = new Redneck('Dale', 'Skynrd', 'Busch Light', '12')

console.log(Redneck1.runFromPolice())

class Rectangle{
  constructor(width, height){
    this.width = width, 
    this.height = height
  }

  area(){
    return this.width * this.height
  }

  perim(){
    return (2 * (this.height + this.width))
  }
}

const rec =  new Rectangle(4, 3)
console.log(rec.area(), rec.perim())



// A=wl area
// P=2(l+w) perim

/* OOP Class attempt and right solution */
// class Vehicle{
//   constructor(make, model, year){
//     this.make = make, 
//     this.model = model, 
//     this.year = year
//   }

//   showDetails(){
//     console.log( `This pristine ${this.make} ${this.model} is a ${this.year} used by a roving gang of teenagers`, 'line 71')
//   }
  
// }

// class Car extends Vehicle{
//   constructor(make, model, year, doors, color){
//     super(make, model, year);
//     this.doors = doors, 
//     this.color = color
//   }

//   showDetails(){
//     super.showDetails()
//     console.log(`${this.doors},${this.color}`, 'line 85')
//   }
// }

// const vehicle = new Vehicle('ford', 'f-150', 2018)
// const car = new Car('ford', 'f-150', 2018, 4, 'red')

// console.log(vehicle.showDetails())
// console.log(car.showDetails(), 'lkjhg')

class Vehicle {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  displayDetails() {
    console.log(`Make: ${this.make}`);
    console.log(`Model: ${this.model}`);
    console.log(`Year: ${this.year}`);
  }
}

class Car extends Vehicle {
  constructor(make, model, year, doors, color) {
    super(make, model, year);
    this.doors = doors;
    this.color = color;
  }

  displayDetails() {
    super.displayDetails();
    console.log(`Doors: ${this.doors}`);
    console.log(`Color: ${this.color}`);
  }
}

// Create an instance of the Vehicle class
const vehicle = new Vehicle('Ford', 'F-150', 2020);

// Display vehicle details
console.log('Vehicle Details:');
vehicle.displayDetails();

// Create an instance of the Car class
const car = new Car('Honda', 'Accord', 2023, 4, 'red');

// Display car details
console.log('\nCar Details:');
car.displayDetails();

class BankAccount{
  constructor(acctNum, bal){
    this.acctNum = acctNum;
    this.bal = bal;
  }

  withdraw(num){
    if(this.bal >= num){
      return this.bal -= num
    } else {
      console.log('insufficient funds')
    }
  }

  deposit(num){
    if(this.bal){
      return this.bal += num
    }
  }
}

const Bob = new BankAccount('42069', 20)


console.log(Bob)
Bob.deposit(40)
console.log(Bob)
Bob.withdraw(25)
console.log(Bob)
Bob.withdraw(55)

class Book{
  constructor(title, author, pubYr){
    this.title = title, 
    this.author = author, 
    this.pubYr = pubYr
  }

  displayDetails(){
    return `Title: ${this.title}
            Author: ${this.author}
      Published in: ${this.pubYr} `
  }
}  
class eBook extends Book{
  constructor(title, author, pubYr, price){
    super(title, author, pubYr);
      this.price = price
    }

  displayDetails(){
    super.displayDetails()
    return `Title: ${this.title}
           Author: ${this.author}
     Published in: ${this.pubYr} 
            Price: ${this.price}  `
  }
}

const RedFern = new Book('Where the Red Fern Grows', 'Wilson Rawls', '1961')
const fittyShades = new eBook('Fifty Shades of Grey', 'E.L. James', '2011', '$.01')


console.log(RedFern.displayDetails())
console.log(fittyShades.displayDetails())

class Animal{
  constructor(species, sound, memberLength){
    this.species = species;
    this.sound = sound;
    this.memberLength = memberLength
  }

  makeSomeNoooise(n){
    return `${this.sound}` 
  } 
}
class Dawg extends Animal{
  constructor(species, sound, memberLength, color, favTreat){
    super(species, sound, memberLength)
    this.color = color
    this.favTreat = favTreat
  }

  makeSomeNoooise(){
    return `${this.sound}, ${this.color} `

  } 
}

const Simba = new Animal('Lion', 'RAWR XD', 4)
const Wally = new Dawg('Walrus', 'guuuuuurrrr', 22, 'brownish', 'clams')

console.log(Simba.makeSomeNoooise())
console.log(Wally.makeSomeNoooise())