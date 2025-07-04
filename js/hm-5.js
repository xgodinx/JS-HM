"use strict"


// 1

let current = 0

function counter(n){
  if(typeof n === "number"){
    current = n
  }

  return function(){
    return current++
  }
}

const c1 = counter(0)
console.log(c1())  // 0
console.log(c1())  // 1
console.log(c1())  // 2

const c2 = counter(100)
console.log(c2())  // 100
console.log(c2())  // 101
console.log(c2())  // 102


console.log("----------------------------------------")

// 2


function counterFactory(){
  let count = 0;
  return {
    value(n){
      if(typeof n === "number"){
        count = n
      }
      return count
    },
    increment(){
      count++
      return count
    },
    decrement(){
      count--
      return count
    }
  }
}

const count = counterFactory()

console.log(count.value()) // 0
count.increment()
count.increment()
count.increment()
console.log(count.value()) // 3
count.decrement()
count.decrement()
console.log(count.value()) // 1
console.log(count.value(100)) // 100
count.decrement()
console.log(count.value()) // 99
console.log(count.value(200)) // 200
count.increment()
console.log(count.value()) // 201

console.log("----------------------------------------")

// 3


function myPow(a, b, myPrint) {
  if (b === 0) {

    const res = 1;
    return myPrint(a, b, res);

  } else {
    
    const result = myPow(a, b - 1, 
      function(a, b, res) {return res});

    const res = a * result;
    return myPrint(a, b, res);

  }
}

function myPrint(a, b, res) {
  return `${a}^${b} = ${res}`;
}

console.log(myPow(3, 4, myPrint)) // 3^4=81
console.log(myPow(2, 3, myPrint)) // 2^3=8
console.log(myPow(2, 0, myPrint)) // 2^0=1


console.log("---------------------------------------")


// 4 

const list = [12, 23, 100, 34, 56, 9, 233]

function myMax(arr){
  return Math.max.apply(null, arr)
}

console.log(myMax(list))  // 233


console.log("---------------------------------------")

// 5

const myMul = function (a, b) {
  return a * b
}

const myDouble = myMul.bind(null, 2)
const myTriple = myMul.bind(null, 3)

console.log(myDouble(3)) // = myMul(2, 3) = 6
console.log(myDouble(4)) // = myMul(2, 4) = 8
console.log(myDouble(5)) // = myMul(2, 5) = 10