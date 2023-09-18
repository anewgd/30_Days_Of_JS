import countries from "./countries.mjs";

const empArr = new Array();
const arr = new Array(5).fill(5);

console.log(arr.length);
console.log(arr[0], arr[2], arr[arr.length - 1]);

const mixed = [1, "fsfs", [2, true], { key: 2 }, 5.33];
console.log(mixed, mixed.length);

const itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];
console.log(itCompanies);
console.log(itCompanies.length);
console.log(`1st - ${itCompanies[0]} mid - ${
  itCompanies[parseInt(itCompanies.length / 2)]
} last - ${itCompanies[itCompanies.length - 1]}
  `);

console.log(itCompanies[0]);
console.log(itCompanies[1]);
console.log(itCompanies[2]);
console.log(itCompanies[3]);
console.log(itCompanies[4]);
console.log(itCompanies[5]);
console.log(itCompanies[6]);

console.log(itCompanies[0].toUpperCase());
console.log(itCompanies[1].toUpperCase());
console.log(itCompanies[2].toUpperCase());
console.log(itCompanies[3].toUpperCase());
console.log(itCompanies[4].toUpperCase());
console.log(itCompanies[5].toUpperCase());
console.log(itCompanies[6].toUpperCase());

console.log(
  `${itCompanies[0]}, ${itCompanies[1]}, ${itCompanies[2]}, ${itCompanies[3]}, ${itCompanies[4]}, ${itCompanies[5]}, and ${itCompanies[6]} are IT companies.`
);

itCompanies.includes("Netflix")
  ? "Netflix is in the array"
  : "Company not found";

let ooArr = [];

if (itCompanies[0].match(/o/gi) !== null)
  if (itCompanies[0].match(/o/gi).length === 2) ooArr.push(itCompanies[0]);
if (itCompanies[1].match(/o/gi) !== null)
  if (itCompanies[1].match(/o/gi).length === 2) ooArr.push(itCompanies[1]);
if (itCompanies[2].match(/o/gi) !== null)
  if (itCompanies[2].match(/o/gi).length === 2) ooArr.push(itCompanies[2]);
if (itCompanies[3].match(/o/gi) !== null)
  if (itCompanies[3].match(/0/gi).length === 2) ooArr.push(itCompanies[3]);
if (itCompanies[4].match(/o/gi) !== null)
  if (itCompanies[4].match(/o/gi).length === 2) ooArr.push(itCompanies[4]);
if (itCompanies[5].match(/o/gi) !== null)
  if (itCompanies[5].match(/o/gi).length === 2) ooArr.push(itCompanies[5]);
if (itCompanies[6].match(/o/gi) !== null)
  if (itCompanies[6].match(/o/gi).length === 2) ooArr.push(itCompanies[6]);

console.log(ooArr);
console.log(`Sorted: ${itCompanies.sort()}`);
console.log(`Reversed: ${itCompanies.reverse()}`);
console.log(`first 3: ${itCompanies.slice(0, 3)}`);
console.log(
  `last 3: ${itCompanies.slice(itCompanies.length - 3, itCompanies.length)}`
);

if (itCompanies.length % 2 === 0)
  console.log(
    "Mid",
    itCompanies.slice(itCompanies.length / 2 - 1, itCompanies.length / 2)
  );
else console.log("Mid", itCompanies.slice(itCompanies.length / 2));

console.log(`pop: ${itCompanies.pop(0)}`);

if (itCompanies.length % 2 === 0)
  console.log(
    "Mid",
    itCompanies.pop(itCompanies.length / 2 - 1, itCompanies.length / 2)
  );
else console.pop("Mid", itCompanies.slice(itCompanies.length / 2));

console.log(`last one removed: ${itCompanies.pop(itCompanies.length - 1)}`);
console.log("Empty", itCompanies.pop());

let text =
  "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";

let cleanText = text.replace(/[!.;",]/g, "");
let words = cleanText.split(" ");
console.log(words, words.length);

const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];
shoppingCart.unshift("Meat");
console.log(`Adding : ${shoppingCart}`);
shoppingCart.push("Sugar");
console.log(`Pushing : ${shoppingCart}`);
shoppingCart.pop();

const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
const backEnd = ["Node", "Express", "MongoDB"];

const fullStack = frontEnd.concat(backEnd);
console.log(fullStack);

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

console.log(`Sorted: ${ages.sort()}`);

if (ages.length % 2 === 0) {
  console.log(
    `Median: ${(ages[ages.length / 2 - 1] + ages[ages.length / 2]) / 2}`
  );
} else console.log(`Median: ${ages[ages.length / 2] / 2}`);

let avg = 0;

ages.forEach((element) => {
  avg += element;
});

avg = avg / ages.length;

console.log(`Average: ${avg}`);
console.log(`Range: ${ages[ages.length - 1] - ages[0]}`);
console.log(
  `Comp: Min: ${Math.abs(ages[0] - avg)} Max: ${Math.abs(
    ages[ages.length - 1] - avg
  )}`
);

console.log(`10 countries: ${countries.slice(0, 11)}`);
