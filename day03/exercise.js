// console.log(4 != "4");
// console.log("python".length === "jargon".length);

// let date = new Date();

// console.log(date.getFullYear());
// console.log(date.getMonth());
// console.log(date.getDate());
// console.log(date.getDay());
// console.log(date.getHours());
// console.log(date.getMinutes());
// console.log(date.getTime());

// let height = prompt("Enter height");
// let base = prompt("Enter base");

// console.log(0.5 * height * base);

// let a = +prompt("Enter a");
// let b = +prompt("Enter b");
// let c = +prompt("Enter c");

// console.log(a + b + c);

// let w = prompt("Enter w");
// let l = prompt("Enter length");

// console.log(`Area: ${w * l} Perimeter: ${2 * l * w}`);

// let r = prompt('Enter radius');

// console.log(`Area: ${3.14 * r**r} Circumference: ${2 * 3.14 * r}`)

// let x = prompt("Enter x");
// let y = prompt("Enter y");

// let x = prompt("Enter x");

// console.log(`The value of y is ${x ** 2 + 6 * x + 9}`);

// let hours = prompt("Enter number of hour");
// let rate = prompt("Enter rate");

// console.log(`The pay is ${hours * rate}`);

// let name = prompt("Enter name");

// console.log(`Your name is ${name.length > 7 ? "long" : "short"}`);

// let firstName = "Asabeneh";
// let lastName = "Yetayeh";

// firstName.length > lastName.length
//   ? console.log(
//       `Your firstname, ${firstName} is longer than your lastname, ${lastName}`
//     )
//   : console.log(
//       `Your firstname, ${firstName} is shorter than your last name, ${lastName}`
//     );

// let myAge = 5;
// let yourAge = 25;

// console.log(
//   `I am ${
//     myAge >= yourAge
//       ? `${myAge - yourAge} years older than you.`
//       : `${yourAge - myAge} years younger than you.`
//   }`
// );

//let age = prompt("Enter age: ");

// console.log(
//   `You are ${age}. ${
//     age >= 18
//       ? `You are allowed to drive.`
//       : `You will be allowed to drive in ${18 - age} years.`
//   }`
// );

// console.log(`You lived ${age * 365 * 24 * 60 * 60} seconds.`);

let date = new Date();
console.log(
  `${date.getFullYear()}-${date.getMonth()}-${date.getDate()} ${date.getHours()}:${
    date.getMinutes() < 10 ? `0${date.getMinutes()}` : `${date.getMinutes()}`
  }`
);
