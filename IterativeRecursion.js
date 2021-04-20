// function sheepJump(number) {
//     if(number === 0) {
//         console.log(`All sheep have jumped over the fence.`)
//         return
//     }
//     console.log(number + `: Another sheep has jumped over the fence.`)
//     sheepJump(number -1);
// }

// console.log(sheepJump(3));



// function sheepJump(number) {
//     for(let i = number; i <= number ; i--)
//         if(i === 0){
//             return `All sheep have jumped over the fence.`
//         }else{
//         console.log(i + `: Another sheep has jumped over the fence.`)
//         }
// }
// console.log(sheepJump(3))


// ----------------------------------------
// NEXT
//-----------------------------------------


// function powerCalculator(num1, num2) {
//     if(num2 < 0) {
//         return `exponent should be a positive number`
//     } else if (num2 === 0) {
//         return 1 
//     }
//   // num1 = 10       num2(2) - 1 = num2(1) * num1(10) = 10           
//     return num1 * powerCalculator(num1, num2 -1)
// // therefore 10 *  10 = 100
// }

// let one = 10
// let two = 2
// console.log(powerCalculator(one, two))


// function powerCalculator(num1, num2) {
//     if(num2 < 0) {
//         return `exponent should be a positive number`
//     } else if (num2 === 0) {
//         return 1 
//     }
//     return num1 ** num2
// }

// console.log(powerCalculator(10, 2))


// ----------------------------------------
// NEXT
//-----------------------------------------



// function stringReverse(string){
//     if (string === ''){
//         return ''
//     }
//     return string.split('').reverse().join('')
// }

// // // string.substr(1) returns the character in a string beginning at the specified number
// // // in this case 1 being the second letter of the string, so the result is 'uperstar'
// // // this keeps going until there are no more 'substr' to go through, and the base is 
// // // returned as an empty string


// console.log(stringReverse('superstar'))




// ----------------------------------------
// NEXT
//-----------------------------------------





// const triangular = (num) => {
//     if(num === 0){
//         return 0
//     }
//     return num + triangular(num - 1)
// }

// console.log(triangular(4))


// function triangular(number) {
//     let add = number
//     for(let i = number - 1; i <= number; i--)
//         if(i === 0) {
//             return add
//         }else{
//             add += i
//         }
// }

// console.log(triangular(8))




// ----------------------------------------
// NEXT
//-----------------------------------------





// const stringSpliter = (string, separator) => {
//     let result = []
//     // Base Case
//     if(!string.includes(separator)) return [string]
//     let index = string.indexOf(separator)
//     // Recursive Case
//     result = [string.slice(0, index), ...stringSpliter(string.slice(index + 1), separator)]
//     return result
// }

// console.log(stringSpliter("02/20/2020", "/"))
// console.log(stringSpliter("Break Me Up", " "))



// const stringSpliter = (string, separator) => {
//     let result = ['']
//     let char = 0

//     for(let i = 0; i < string.length; i++) {
//         if(string.charAt(i) === separator) {
//             char++
//             result.push('')
//         }else{
//             result[char] += string.charAt(i)
//         }
//     }
//     return result
// }

// console.log(stringSpliter("Break Me Up", " "))



// ----------------------------------------
// NEXT
//-----------------------------------------



// const fibonacci = (number) => {
//     // Base Case
//     if (number === 1) return [1]
//     if (number === 2) return [1, 1]
//     // Recursive Case
//     const sequence = [...fibonacci(number - 1)]
//     sequence.push(sequence[sequence.length - 1] + sequence[sequence.length - 2])
//     return sequence
// }

// console.log(fibonacci(4))





// ----------------------------------------
// NEXT
//-----------------------------------------




// const factorial = (number) => {
//     // Base Case
//     if(number === 0) return 1
//     // Recursive Case
//     return number * factorial(number - 1)
// }

// console.log(factorial(10))

