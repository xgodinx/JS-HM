"use strict"

// curriedAdd

function curriedAdd(a){
  return function addFirst(b){
    return function addSecond(c){
      return `${a} + ${b} + ${c} = ${a + b + c}`
    }
  }
}
const addFirst = curriedAdd(1)
const addSecond = addFirst(2)
const result = addSecond(3)

console.log("result:", result) // result: 1 + 2 + 3 = 6


const anotherResult = curriedAdd(1)(2)(3)

console.log(`anotherResult: ${anotherResult}`) //anotherResult: 1 + 2 + 3 = 6





// curriedDomain


function curriedDomain(protocol){
  return function(domainName){
    return function(tld){
      return `${protocol}${domainName}${tld}`
    }
  }
}
const domainName = curriedDomain("https://") 
const tld = domainName("google")
const fullDomain = tld(".com")

console.log(fullDomain) // https://google.com

const anotherFullDomain = curriedDomain("https://")("google")(".com")
console.log(anotherFullDomain) // https://google.com




//  modifyFunction

function originalFunction(num) {
  return num * num
}


function modifyFunction(cb, multiplier){

  return function(num){
    return cb(num) * multiplier

  }
}

const modifiedFunc = modifyFunction(originalFunction, 3)
const originalFunc = modifiedFunc(4)
console.log(originalFunc)  // 48




  
//  nestedFunction


function outerFunction(num1){
  return function innerFunction(num2){
    return function deepInnerFunction(num3){
      return `${num1} * ${num2} * ${num3} = ${num1 * num2 * num3}`
    }
  }
}

const outerNum1 = outerFunction(2) // замыкаем результат вывода главной функции в переменную
const outerNum2 = outerNum1(3)  // замыкаем результат вызова innerFunction в переменную
const outerNum3 = outerNum2(4)  // замыкаем результат вызова deepInnerFunction в переменную и получаем цепочку из вызовов, где outerNum3 берет значения из замыкания (лексической области видимости) и перемножает
console.log(outerNum3) // 2 * 3 * 4 = 24


const outerResult = outerFunction(2)(3)(4)
console.log(outerResult) // 2 * 3 * 4 = 24