const numbers = [1, 2, 3];
console.log(numbers);

// const moreNumbers = Array(5, 2);
// console.log(moreNumbers);

// const yetMoreNumbers = Array.of(1, 2);
// console.log(yetMoreNumbers);

const listItems = document.querySelectorAll("li");
console.log(listItems);

const arrayListItems = Array.from(listItems);
console.log(arrayListItems);

const hobbies1 = ["Cooking", "Sports"];

const personalData = [30, "Name", { moreDetails: [] }];

const analyticsData = [
  [1, 1.2],
  [-3, 4, 5],
];

for (const data of analyticsData) {
  console.log("data", data);
  for (const dataPoints of data) {
    console.log("dataPoints", dataPoints);
  }
}

console.log(personalData[1]);

const hobbies = ["Sports", "Cooking"];
hobbies.push("Reading");
hobbies.unshift("Codding");
hobbies.pop();
hobbies.shift();

hobbies[1] = "Running"; // to replace
hobbies[5] = "Talking"; // rarely used

hobbies.splice(2, 0, "Good Food", "Screaming"); // add
hobbies.splice(3, 2); // remove
console.log(hobbies);

//

const testResults = [1, 5.3, 1.4, 10.99, 5.3, 7, 9, -4];

// const storeResults = testResults.slice(2, 5);

const storeResults = testResults.concat([2, 3, 4]); // add as new at the end and return a new copy

testResults.push(5.91);

console.log(storeResults, testResults); // slice - return a brand new copy of the array

console.log(testResults.indexOf(5.3)); // returns the position of the item in array
console.log(testResults.lastIndexOf(5.3)); // starts from the last

console.log(testResults.includes(10));

const personalsData = [{ name: "ion" }, { name: "Nas" }];
console.log(personalsData.indexOf({ name: "Nas" }));

const ion = personalsData.find((person, index, persons) => {
  return person.name === "ion";
});

ion.name = "Ion";

console.log(ion, personalsData);

const ionIndex = personalsData.findIndex((person, index, persons) => {
  return person.name === "Ion";
});

console.log("index", ionIndex);

//

const prices = [10, 5, 6, 3, 19];
const tax = 2.5;
// const taxAdjustedPrices = [];

// for (let price of prices) {
//   taxAdjustedPrices.push(price * (1 + tax));
// }

// prices.forEach((price, idx, prices) => {
//   const priceObj = { index: idx, taxAdjustedPrice: price * (1 + tax) };
//   taxAdjustedPrices.push(priceObj);
// });
const taxAdjustedPrices = prices.map((price, idx, prices) => {
  const priceObj = { index: idx, taxAdjustedPrice: price * (1 + tax) };
  return priceObj;
});

console.log("tax adjusted", prices, taxAdjustedPrices);

const sortedPrices = prices.sort((a, b) => {
  if (a > b) {
    return 1;
  } else if (a === b) {
    return 0;
  } else {
    return -1;
  }
});
console.log("sorted prices", sortedPrices.reverse());

// Filter

const filteredPrices = prices.filter((price, idx, prices) => {
  return price > 6;
});

console.log("filtered prices", filteredPrices);

// Reduce
// let sumPrices = 0;
// prices.forEach((price) => {
//   sumPrices += price;
// });

// console.log("price reduced", sumPrices);

const sumPrices = prices.reduce((prevValue, curValue, curIndex, prices) => {
  return prevValue + curValue;
}, 0);

console.log("price reduced", sumPrices);

// chaining methods
// const originalArray = [{ price: 10.99 }, { price: 5.99 }, { price: 29.99 }];
// const sumPrices = originalArray
//   .map((obj) => obj.price)
//   .reduce((sumVal, curVal) => sumVal + curVal, 0); // => 46.97

// split and join

const data = "new york;10.99;2000;3.4;some;and name";

const transformedData = data.split(";"); // split a string into an array

console.log("transformed data: ", transformedData);

const nameFragments = ["Ion", "Popa"];
const names = nameFragments.join(" ");
console.log("joined: ", names); // ['Ion Popa']

// Spread Operator

const copiedNameFragments = [...nameFragments];
console.log("copied: ", copiedNameFragments);

console.log("minPrice: ", Math.min(...prices));

const personas = [
  { name: "Nas", age: 24 },
  { name: "Ion", age: 31 },
];
const copiedPersonas = [...personas]; // crates a brand new array

personas.push({ name: "Jas", age: 10 });

console.log("personas: ", personas, "copiedPersonas: ", copiedPersonas);
