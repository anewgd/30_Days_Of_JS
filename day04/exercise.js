// let a = 4;
// let b = 3;

// if (a > b) console.log(a + " is greater than " + b);
// else console.log(a, " is less than ", b);

// let score = prompt("Enter score: ");

// if (score >= 80) console.log("Grade: A");
// else if (score < 80 && score >= 70) console.log("Grade: B");
// else if (score < 70 && score >= 60) console.log("Grade: C");
// else if (score < 60 && score >= 50) console.log("Grade: D");
// else if (score < 50) console.log("Grade: F");
// else console.log("Error");

// let month = prompt("Enter month: ");

// switch (month.toLowerCase()) {
//   case "september":
//   case "october":
//   case "november":
//     console.log("Autumn");
//     break;
//   case "december":
//   case "january":
//   case "february":
//     console.log("Winter");
//     break;
//   case "march":
//   case "april":
//   case "may":
//     console.log("Spring");
//     break;
//   case "june":
//   case "july":
//   case "august":
//     console.log("Summer");
//     break;
//   default:
//     console.log("Error");
//     break;
// }

let day = prompt("Enter day: ");

switch (day.toLowerCase()) {
  case "monday":
  case "tuesday":
  case "wednesday":
  case "thrusday":
  case "friday":
    console.log(`${day} is a working day.`);
    break;
  case "saturday":
  case "sunday":
    console.log(`${day} is a weekend.`);
    break;
  default:
    console.log("Error");
    break;
}
