import countries from "./countries.mjs";
import webTechs from "./web_techs.mjs";
console.log(countries);
console.log(webTechs);

countries.indexOf("Ethiopia") === -1
  ? countries.push("Ethiopia")
  : console.log("ETHIOPIA");

if (webTechs.indexOf("Sass") === -1) {
  webTechs.push("Sass");
  console.log(webTechs);
} else console.log("Sass is a CSS preprocess");
console.log(`10 countries: ${countries.slice(0, 10)}`);

if (countries.length % 2 === 0) {
  console.log(
    `Middle: ${countries.slice(
      countries.length / 2 - 1,
      countries.length / 2 + 1
    )}`
  );
} else
  console.log(
    `Middle: ${countries.slice(countries.length / 2, countries.length / 2 + 1)}`
  );

if (countries.length % 2 === 0) {
  console.log(countries.splice(0, countries.length / 2));
  console.log("Second: ", countries);
} else
  console.log(
    `First: ${countries.slice(countries.length / 2, countries.length / 2 + 1)}`
  );
