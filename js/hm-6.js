"use strict"


// 1


class CalorieCalculator{
  constructor(){
    this.products = new Map()
  }

  addProduct(product, calorie) {
    this.products.set(product, calorie)
    return this.products
  }
  getProductCalories(product) {
    if(this.products.has(product)) {
      return this.products.get(product)
    } else {
      return "Product not found"
    }
  }

  removeProduct(product) {
    return this.products.delete(product)
  }
}

const calorieCalculator = new CalorieCalculator()
calorieCalculator.addProduct('Apple', 52)
calorieCalculator.addProduct('Banana', 89)

console.log(calorieCalculator.getProductCalories('Apple')) // 52
console.log(calorieCalculator.getProductCalories('Banana')) // 89

calorieCalculator.removeProduct('Apple')
console.log(calorieCalculator.getProductCalories('Apple')) // Product not found


// 2 

class UniqueUsernames{
  constructor() {
    this.users = new Set()
  }

  addUser(user) {
    return this.users.add(user)
  }

  exists(user) {
    return this.users.has(user)
  }

  count() {
    return this.users.size
  }
}

const uniqueUsernames = new UniqueUsernames()
uniqueUsernames.addUser('john_doe')
uniqueUsernames.addUser('jane_doe')
uniqueUsernames.addUser('john_doe') // Ця дія не змінить набір, оскільки 'john_doe' вже існує

console.log(`Існує 'john_doe': ${uniqueUsernames.exists('john_doe')}`) // true
console.log(`Кількість унікальних імен: ${uniqueUsernames.count()}`) // 2