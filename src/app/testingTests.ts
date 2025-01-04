// function sum(a:number, b:number) {
//     return a + b;
//   }
// module.exports = sum;


export function testTest(num1: number, num2: number): number { return num1 + num2}

export function validateStringNotEmpty(value: string) {
if (value.trim().length === 0) {
    throw new Error('Invalid input')
}
}

// 