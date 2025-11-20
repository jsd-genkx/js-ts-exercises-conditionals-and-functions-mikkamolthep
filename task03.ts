// TODO-03: Write if/else if to print:
// Password < 6 chars → "Too short"
// 6–10 chars → "Moderate"
// 11+ chars → "Strong"

const password = "pass1234567";

if (password.length < 6){   // ใช้ length เพื่อนับตัวอักษรในตัวแปร password ที่น้อยกว่า 6
  console.log ("Too short");
} else if (password.length <= 10){    // ถ้าไม่ตรงเงื่อนไขแรก ให้มาที่เงื่อนไขสอง ที่ตัวอักษร น้อยกว่าหรือเท่ากับ 10
  console.log ("Moderate");
} else {              // ถ้าไม่ตรงกับทั้งสองเงื่อนไข ก็คือ มากกว่า 10 ให้ทำงานที่เงื่อนไขนี้
  console.log ("Strong");
}

// another way
// const password = "pass1234567";
const len = password.length;
if (len > 10) {
    console.log("This password is strong.");
} else if (len <= 10 && len > 6){
    console.log("This password is moderate.");
} else {
    console.log("This password is too short.");
}

// another way
// const password = "pass1234567";
// const len = password.length;
if ( len < 6 ) {
    console.log("Too short")}
    else if ( len <= 10 ){
        console.log("Moderate")}
        else {
            console.log("Strong")
        }