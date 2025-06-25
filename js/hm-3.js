"use strict"

// 1

const userObj = {
    firstName: "John",
    lastName: "Dow",
    age: 30,
};

console.log(userObj);  // {firstName: 'John', lastName: 'Dow', age: 30}

console.log("*----------------------------------------*")

// 2

function fullName(object){
    return `${userObj.firstName} ${userObj.lastName}`
}
console.log(fullName(userObj)); //  John Dow

console.log("*----------------------------------------*")

// 3


// custom way)))

function defUpperStr(textUpper = "default text"){
    let text = textUpper.toUpperCase();
    return text;
}

console.log(defUpperStr("my text"))  // MY TEXT
console.log(defUpperStr())  // DEFAULT TEXT


// required way

function defUpperStr2(textUpper){
    return (textUpper || "default text").toUpperCase()
}

console.log(defUpperStr2("my text"))  // MY TEXT
console.log(defUpperStr2())  // DEFAULT TEXT

console.log("*----------------------------------------*")


// 4

let numbers = []
function evenFn(n) {
    let i;
    for(i = 2; i <= n; i += 2){
        numbers.push(i)
    }
    return numbers
}

console.log(evenFn(22)); //  [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22]

console.log("*----------------------------------------*")


// 5

function weekFn(dayNumber){
    switch(dayNumber){
        case 1:
            return "Monday"
        case 2:
            return "Tuesday"
        case 3:
            return "Wednesday"
        case 4: 
            return "Thursday"
        case 5:
            return "Friday"
        case 6: 
            return "Saturday"
        case 7:
            return "Sunday"
        default:
            return null
    }
    
}

console.log(weekFn(2)) //Tuesday
console.log(weekFn(9)) // null

console.log("*----------------------------------------*")


// 6


function ageClassification(n) {
    let period;
    return period = n <= 0 || n > 122
        ? console.log(null)
        : n <= 24
            ? console.log(`${n}: Childhood`)
            : period = n <= 44
                ? console.log(`${n}:Youth`)
                : period = n <= 65
                    ? console.log(`${n}:Mature`)
                    : period = n <= 75
                        ? console.log(`${n}:Old age`)
                        : period = n <= 90
                            ? console.log(`${n} Long life`)
                            : period = n <= 122
                                ? console.log(`${n}: record`)
                                : null
}

ageClassification(123);


console.log("*----------------------------------------*")


// 7

 let oddArray = []
 let oddNumber = 0;
  function oddFn(n){
      while(oddNumber <= n){
          if(oddNumber % 2 != 0){
              oddArray.push(oddNumber)
          }
      oddNumber++
      }
      return oddArray
  }
  oddFn(10) 
  console.log(oddArray)  // [1, 3, 5, 7, 9]

// another way

 function oddFn2(n){
     while(oddNumber <= n){
         oddNumber % 2 != 0
         ? oddArray.push(oddNumber)
         : null
         oddNumber++
     }
     return oddArray
 }
 oddFn2(20) 
 console.log(oddArray) // [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]

// required way

oddArray = []
oddNumber = 1;

function oddFn3(n){
    while(oddNumber <= n){
        oddArray.push(oddNumber)
        oddNumber += 2
    }
    return oddArray;
}
oddFn3(15)
console.log(oddArray)  // [1, 3, 5, 7, 9, 11, 13, 15]


console.log("*----------------------------------------*")


// 8 

function cbRandom(min, max){
    let result = Math.floor(Math.random() * (max - min) + min)
    return result
}

function cbPow(a, b){
    let result = a ** b;
    return result
}

function cbAdd(a, b){
    let result = a + b
    return result
}

function mainFunc(a, b , cb){
     if(typeof cb === "function"){
         return cb(a, b)
     } else {
         console.log(false)
     }
    
}

console.log(mainFunc(10, 20, cbRandom))
