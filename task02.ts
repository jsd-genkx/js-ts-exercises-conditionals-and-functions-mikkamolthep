// TODO-02: Use if/else to check if it's a number
// (hint: typeof or isNaN)

const userInput = 10;
// Try changing to "hello", 10, null, NaN
if (typeof userInput === "number") {
  console.log('Type',userInput,'is number');
} else {
  console.log('Type is',typeof userInput);
}