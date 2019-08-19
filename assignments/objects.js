// Let's get some practice writing a few objects for a new group of interns at a small business.

// ==== Challenge 1: Writing Objects ==== 
// HR needs some information on the new interns put into a database.  Given an id, email, first name, and gender. Create an object for each person in the company list:

// 1, mmelloy0@psu.edu, Mitzi, F
// 2, kdiben1@tinypic.com, Kennan, M
// 3, kmummery2@wikimedia.org, Keven, M
// 4, gmartinson3@illinois.edu, Gannie, M
// 5, adaine5@samsung.com, Antonietta, F

// Example format of an intern object: 1, examples@you.edu, Example, F
const example = {
  id: 0,
  name: "Example",
  email: "examples@you.edu",
  gender: "F",
}

// Write your intern objects here:

const internMitzi = {
  id: 0,
  name: "Mitzi",
  email: "mmelloy0@psu.edu",
  gender: "F",
}

const internKennan = {
  id: 1,
  name: "Kennan",
  email: "kdiben1@tinypic.com",
  gender: "M",
}

const internKeven = {
  id: 2,
  name: "Keven",
  email: "kmummery2@wikimedia.org",
  gender: "M",
}

const internGannie = {
  id: 3,
  name: "Gannie",
  email: "gmartinson3@illinois.edu",
  gender: "M",
}

const internAnto = {
  id: 4,
  name: "Antonietta",
  email: "adaine5@samsung.com",
  gender: "F", 
}

// ==== Challenge 2: Reading Object Data ==== 
// Once your objects are created, log out the following requests from HR into the console:

// Mitzi's name
  console.log(internMitzi.name);

// Kennan's ID
  console.log(internKennan.id);

// Keven's email
console.log(internKeven.email);

// Gannie's name
console.log(internGannie.name);

// Antonietta's Gender
console.log(internAnto.gender);

// ==== Challenge 3: Object Methods ==== 
// Give Kennan the ability to say "Hello, my name is Kennan!" Use the console.log provided as a hint.
// const speak = () => "Hello, my name is ";
// console.log(speak(), internKennan.name, "!");
internKennan.speak = () => "Hello, my name is Kennan!";
console.log(internKennan.speak()); 
// console.log(kennan.speak());

// Antonietta loves math, give her the ability to multiply two numbers together and return the product. Use the console.log provided as a hint.
internAnto.multiplyNums = (num1, num2) => num1 *num2;
console.log(internAnto.multiplyNums(3,4));
//console.log(antonietta.multiplyNums(3,4));

// === Great work! === Head over to the the arrays.js. You may come back and attempt the Stretch Challenge once you have completed the challenges in arrays.js and function-conversion.js.

// ==== Stretch Challenge: Nested Objects and the this keyword ==== 

// 1. Create a parent object with properties for name and age.  Make the name Susan and the age 70.
// 2. Nest a child object in the parent object with name and age as well.  The name will be George and the age will be 50.
// 3. Nest a grandchild object in the child object with properties for name and age.  The name will be Sam and the age will be 30
// 4. Give each of the objects the ability to speak their names using the this keyword.

const parent = {
  name: "Susan",
  age:70,
  

  child: {
    name: "George",
    age:50,

    grandchild: {
      name: "Sam",
      age: 30,
    }
  } 
}

// Log the parent object's name
console.log(parent.name);


// Log the child's age
console.log(parent.child.age);

// Log the name and age of the grandchild

console.log(parent.child.grandchild.name, parent.child.grandchild.age);

// Have the parent speak
parent.speak = () => `Hello, my name is ${parent.name}`;
console.log(parent.speak());

// Have the child speak
parent.child.speak = () => `Hello, my name is ${parent.child.name}`;
console.log(parent.child.speak());

// Have the grandchild speak
parent.child.grandchild.speak = () => `Hello, my name is ${parent.child.grandchild.name}`;
console.log(parent.child.grandchild.speak());
