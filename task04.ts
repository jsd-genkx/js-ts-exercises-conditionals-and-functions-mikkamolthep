// TODO-04: Write if/else if to check and print:
// Divisible by both 3 and 5 → "FizzBuzz"
// Divisible by only 3 → "Fizz"
// Divisible by only 5 → "Buzz"
// Otherwise → "Not divisible by 3 or 5"

// TODO BONUS: Rewrite with if

const num = 15;
if (num % 3 === 0 && num % 5 === 0){  // ใช้ % เพื่อหาเศษจากการหาร 3,5 ได้เศษ 0 คือ ลงตัว
  console.log("FizzBuzz");
} else if (num % 3 === 0){    // ถ้าหารแค่ 3 ลงตัวให้ทำงานตามเงื่อนไขนี้
  console.log("Fizz");
} else if (num % 5 === 0){    // แต่ถ้าหารแค่ 5 ลงตัวให้ทำงานตามเงื่อนไขนี้
  console.log("Buzz");
} else {                      // ถ้าไม่ตรงเงื่อนไขไหนเลยให้ทำงานตามเงื่อนไขนี้
  console.log("Not divisible by 3 or 5");
}

// TODO BONUS: Rewrite with if 
// ใช้แค่ if คล้ายๆข้างบน แค่ตั้งเงื่อนไขใหม่ในทุกๆ if

// if (num % 3 === 0 && num % 5 === 0)
//   { console.log("FizzBuzz");}

// if (num % 3 === 0)
//   { console.log("Fizz");}

// if (num % 5 === 0)
//   { console.log("Buzz");}

// if (num % 3 !== 0 && num % 5 !== 0)
//   { console.log("Not divisible by 3 or 5");}


//another way
// let num = 0;
// if(num === 0){
//   console.log("Zero is not acceptable.")
// } else if ((num % 3 === 0) && (num % 5 === 0)) {
//   console.log(`Your number:${num} is "FizzBuzz".`);
// } else if ((num % 3 === 0) ) {
//     console.log(`Your number:${num} is "Fizz".`);
// } else if ((num % 5 === 0) ) {
//     console.log(`Your number:${num} is "Buzz".`);
// } else {
//   console.log("Not divisible by 3 or 5");
// }