'use strict'


function ageClassification(num){
  return num < 0 ? null :
    num <= 24 ? 'Childhood' :
      num <= 44 ? 'Youth' :
        num <= 64 ? 'Maturity' :
          num <= 75 ? 'Old age' :
            num <= 90 ? 'Longevity' :
              num <= 122 ? 'Record' : null
}



function weekFn(cond){
  let str = ''
  switch(cond){
    case 1: str = 'Monday' 
      break
    case 2: str = 'Tuesday'
      break
    case 3: str = 'Wednesday'
      break
    case 4: str = 'Thursday'
      break
    case 5: str = 'Friday'
      break
    case 6: str = 'Saturday'
      break
    case 7: str = 'Sunday'
      break
    default: str = null
  }
  return str
}

module.exports = {ageClassification, weekFn}

