// const mus = require('./testingTests')

// test('adds 1 + 2 to equal 3', () => {
//   expect(mus(1, 2)).toBe(3);
// });
  
import {testTest} from './testingTests'


describe('Sum function', () =>{
    test('adds 1 + 2 to equal 3', () => {
        expect(testTest(1, 2)).toEqual(3)
    })
})