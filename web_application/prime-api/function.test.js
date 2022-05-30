const func = require('./function')

describe('test prime function', () => {
  it('should return the first 6 prime numbers', () => {
    const result = func.prime(1,11)

    expect(result).toEqual([1,2,3,5,7,11])
  })

  it('should return an empty array', () => {
    const result = func.prime(0,0)

    expect(result).toEqual([])
  })
})