// TODO-02: Use if/else to check if it's a number
// (hint: typeof or isNaN)

const userInput = "hello";
// Try changing to "hello", 10, null, NaN
// if (typeof userInput === "number") {
//   console.log('True: Type',userInput,'is number');
// } else {
//   console.log('False: Type',userInput,'is',typeof userInput);
// }

// another solution

if (typeof userInput === "number" && !isNaN(userInput)) {
  console.log('True: Type', userInput, 'is number');
} else {
  console.log('False: Type', userInput, 'is', typeof userInput);
}