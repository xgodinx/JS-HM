"use scrict"


let myNum = 10; myStr = "some string"; myBool = true;
let myArr = [1, 2, 3, 4, 5];
let myObj = {
    first: "First name",
    last: "Last name",
}
console.log(myNum, myStr, myBool, myArr, myObj);

let decimal = myNum / 3;
decimal = decimal.toFixed(2);
console.log(decimal);

let myBigInt = 123n;
myBigInt += 1n;
console.log(myBigInt, typeof(myBigInt));