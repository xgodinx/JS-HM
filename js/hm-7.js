"use strict"



// 1

const exampleArray = [1, 2, 3, 4, 5]

function sumArray (arr) {
  const sum = arr.reduce((acc, number) => {
    return acc += number
  },0)
  return sum
}

console.log(sumArray(exampleArray)) // 15


// 2

const exampleMapArray = [1, 2, 3, 4, 5]

function doubleArray (arr) {
  const mappedArray = arr.map((number) => {
    return number * 2
  })
  return mappedArray
}

console.log(doubleArray(exampleMapArray)) // (5) [2, 4, 6, 8, 10]


// 3


class SkillsManager {
  constructor() {
    this.skills = []
  }

  addSkill(skill) {
    if(typeof skill === "string" && skill.length > 2){
      this.skills.push(skill)
      return skill
    } else{
      return null
    }
  }

  getAllSkills() {
    return this.skills
  }
}

const skillsManager = new SkillsManager()

console.log(skillsManager.addSkill('JavaScript'))
console.log(skillsManager.addSkill('CSS'))
console.log(skillsManager.getAllSkills()) // (2) ['JavaScript', 'CSS']


// setter getter

class SkillsManager2 {
  constructor() {
    this._skills = []
  }

  set skills(skill) {
    if(typeof skill === "string" && skill.length > 2){
      this._skills.push(skill)
      return skill
    } else{
      return null
    }
  }

  get skills() {
    return this._skills
  }
}

const skillsManager2 = new SkillsManager2()

skillsManager2.skills = "JavaScript"
skillsManager2.skills = "CSS"
console.log(skillsManager2.skills) // (2) ['JavaScript', 'CSS']

console.log(skillsManager2)
console.log(skillsManager)


// 4


function DateCalculator(initialDate) {
  
  this.date = new Date(initialDate)

  this.addDays = (days) => {
    this.date.setDate(this.date.getDate() + days)
  }

  this.subtractDays = (days) => {
    this.date.setDate(this.date.getDate() - days)
  }

  this.getResult = () => {
    const year = this.date.getFullYear()
    const month = String(this.date.getMonth() + 1).padStart(2, "0")
    const day = String(this.date.getDate()).padStart(2,"0")
    return `${year}-${month}-${day}`
  }
}

const dateCalculator = new DateCalculator('2023-01-01')
dateCalculator.addDays(5)
console.log(dateCalculator.getResult()) // Виводить нову дату після додавання днів

dateCalculator.subtractDays(3)
console.log(dateCalculator.getResult()) // Виводить нову дату після віднімання днів



// const d1 = new Date()
// console.log(d1.getDate(), d1.getMonth(), d1.getFullYear(), d1.getDay(), d1.getHours(), d1.getMinutes(), d1.getTime())