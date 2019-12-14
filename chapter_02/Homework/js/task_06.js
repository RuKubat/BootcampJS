/* Напишите функцию которая принимает число и возвращает его факториал
используя рекурсию.
Факториал числа - это умножение всех порядковых чисел от 1 до самого числа:
5! = 1*2*3*4*5 = 5*4*3*2*1
6! = 1*2*3*4*5*6 = 6*5*4*3*2*1 */

function getFactorial(n) {
    if (n === 1) {
        return 1;
    }
    else {

     return n * getFactorial(n - 1);
    }   
}
console.log(getFactorial(6)); 


// function factorial(n, result) {
//     result = result || 1;
//     if(!n) {
//         return result;
//     } else {
//         console.log(n, '____',result)
//         return factorial(n - 1, result * n);
//     }
// }

// console.log(factorial(6));

