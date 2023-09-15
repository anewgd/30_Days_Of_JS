let challenge = "30 Days Of JavaScript";

console.log(challenge);
console.log(challenge.length);
console.log(challenge.toUpperCase());
console.log(challenge.toLowerCase());
console.log(challenge.substring(0, 2));
console.log(challenge.substring(3, 21));
console.log(challenge.includes("Script"));
console.log(challenge.split());
console.log(challenge.split(" "));
console.log(
  "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon".split(", ")
);

console.log(challenge.replace("JavaScript", "Python"));
console.log(challenge.charAt(15));
console.log(challenge.charCodeAt(11));
console.log(challenge.indexOf("a"));
console.log(challenge.lastIndexOf("a"));
console.log(
  "You cannot end a sentence with because because because is a conjunction".indexOf(
    "because"
  )
);
console.log(
  "You cannot end a sentence with because because because is a conjunction".lastIndexOf(
    "because"
  )
);

console.log(
  "You cannot end a sentence with because because because is a conjunction".search(
    "because"
  )
);

console.log(" 30 Days Of JavaScript ".trim());
console.log(challenge.startsWith("30 D"));
console.log(challenge.endsWith("ipt"));

console.log(challenge.match(/a/g));
console.log(challenge.repeat(2));

console.log(
  "The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another."
);

console.log(
  "\"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.\""
);

console.log(typeof 10 === typeof 10);
console.log(Math.ceil(parseFloat("9.8")) === 10);
console.log("python".includes("on") === "jargon".includes("on"));
console.log("I hope this course is not full of jargon".includes("jargon"));

console.log(Math.floor(Math.random() * 101));
console.log(50 + Math.floor(Math.random() * 51));
console.log(Math.floor(Math.random() * 256));
console.log("JavaScript".charAt(Math.floor(Math.random() * 10)));
console.log("1\t1\t1\t1\t1\n");
console.log("2\t1\t2\t4\t8\n");
console.log("3\t1\t3\t9\t27\n");
console.log("4\t1\t4\t16\t64\n");
console.log("1\t1\t5\t25\t125\n");

console.log(
  "You cannot end a sentence with because because because is a conjunction".substr(
    31,
    23
  )
);

let str =
  "Love is the best thing in this world. Some found their love and some are still looking for their love.";
console.log(str.toLowerCase().match(/love/g).length);

const sentence =
  "%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching";

console.log(sentence.replace(/[!@#$%^&\*();]/g, ""));

str =
  "He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.";

let salary =
  +str.match(/\d+/g)[0] + +str.match(/\d+/g)[1] + +str.match(/\d+/g)[2];

console.log(salary);
