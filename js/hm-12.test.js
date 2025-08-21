

// functions.test.js

const {ageClassification, weekFn} = require('./hm-12')


describe('ageClassification', () => {
    test('returns null if value is negative', () => {
        expect(ageClassification(-1)).toBeNull()
    })

    test('range boundaries work correctly', () => {
        expect(ageClassification(0)).toBe('Childhood')
        expect(ageClassification(24)).toBe('Childhood')
        expect(ageClassification(24.01)).toBe('Youth')
        expect(ageClassification(44)).toBe('Youth')
        expect(ageClassification(44.01)).toBe('Maturity')
        expect(ageClassification(65)).toBe('Old age')
        expect(ageClassification(65.1)).toBe('Old age')
        expect(ageClassification(75)).toBe('Old age')
        expect(ageClassification(75.01)).toBe('Longevity')
        expect(ageClassification(90)).toBe('Longevity')
        expect(ageClassification(90.01)).toBe('Record')
        expect(ageClassification(122)).toBe('Record')
        expect(ageClassification(122.01)).toBeNull()
        expect(ageClassification(150)).toBeNull()
    })
})


describe('weekFn', () => {
    test('returns day of week form 1 to 7', () => {
        expect(weekFn(1)).toBe('Monday')
        expect(weekFn(2)).toBe('Tuesday')
        expect(weekFn(3)).toBe('Wednesday')
        expect(weekFn(4)).toBe('Thursday')
        expect(weekFn(5)).toBe('Friday')
        expect(weekFn(6)).toBe('Saturday')
        expect(weekFn(7)).toBe('Sunday')
    })


    test('returns null for incorrect values', () => {
    expect(weekFn(0)).toBeNull()
    expect(weekFn(9)).toBeNull()
    expect(weekFn(1.5)).toBeNull()
    expect(weekFn('2')).toBeNull()
  })
})

