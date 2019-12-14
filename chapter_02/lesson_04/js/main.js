/* let firstName = 'Asan';
let result = 'Hello ' + firstName;
let result =`Hello ${firstName}`;
console.log(result); */

/*  let a = 5;
let b = 10;
let result = `${a} + ${b} = ${a + b}`;
console.log(result);  */

/*  function multiply(a, b) {
    return a * b
}
let result = `2 * 5 = ${multiply(2, 5)}`;
console.log(result);  */


/*  let str = 'Hello my name is \'Jack\' \nMy profession is Developer';
console.log(str); */


//let str = 'Name: Asan, Lastname: Asanov';  //заменить все буквы а на "*", методом цикла

/*let newArr = [];
for(let i = 0; i < str.length; i++) {
    if(str[i] !== 'a') newArr.push(str[i])
    else newArr.push('*');
}
let newStr = newArr.join('');
console.log(newStr); */


/* tr = 'Name: Asan, Lastname: Asanov';  // то же самое что сверху, но методом RegEx
   console.log(str.replace(/a/g, '*')); */


// let str = prompt('Vvedite');
// let pattern = RegExp(`a`,  'gi');
// coonsle.log(!(str.replace(pattern, '*')));
// if(!pattern.test(str)) {
//     alert('Vse verno');
// } else {
//     alert('Vvodite tolko chisla')
// }

let ref = /\d{2}\.\d{2}.\d{4}/gi

