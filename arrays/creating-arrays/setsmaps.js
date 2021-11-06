// sets
const ids = new Set([1, 2, 3]);
console.log("ids:", ids);
console.log("ids has:", ids.has(2));

const strings = new Set(["Hi", "And", "Do"]);
for (const entry of strings.entries()) {
  console.log("set entry", entry);
}

// Maps

const person1 = { name: "Ion" };
const person2 = { name: "Nas" };

const personData = new Map([[person1, [{ date: "yesterday", price: 10 }]]]);

personData.set(person2, [{ date: "some time ago", price: 50 }]);

console.log("map personData:", personData);
console.log(personData.get(person1));

for (const entry of personData.entries()) {
  console.log("person data entry: ", entry);
}

for (const key of personData.keys()) {
  console.log("person data key: ", key);
}

for (const value of personData.values()) {
  console.log("person data value: ", value);
}
