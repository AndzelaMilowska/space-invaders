// const mus = require('./testingTests')

// test('adds 1 + 2 to equal 3', () => {
//   expect(mus(1, 2)).toBe(3);
// });
  
import {testTest} from './testingTests'

import {validateStringNotEmpty}  from './testingTests'

//testTest
describe('Sum function', () =>{
    test('should add given numbers', () => {
        expect(testTest(1, 2)).toEqual(3)
    })
})


//validateStringNotEmpty
it('should throw error if string is empty', () => {
    const input = ''
    const validation = () => {validateStringNotEmpty(input)}
    expect(validation).toThrow(/Invalid input/)
})
