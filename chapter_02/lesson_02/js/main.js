/* function sayHello() {
    var name = 'Jack';
    console.log('Hello ' + name);
    function sayBye() {
        console.log('Bye ' + name);
    }
    sayBye();
}


sayHello(); */

 /*c {
    let name = 'Jack';
    return function() {
        name = 'Hello' + name;
        return name
    }
}
console.log(sayHello());

let helloFunc = sayHello();

function sumFunc(a) {
    return function(b) {
        return a + b
    }
}
const sum = sumFunc(5);
console.log(sum(2));
console.log(sum(5)); */

/* function stestReturn(a,b) {
    let sum = a + b;
    return sum
}
 let firstRes = testReturn(2,5);
 let secRes = testReturn(10,50);

console.log(firstRes * 2);
console.log(secRes / 2); */

/* function incEnv() {
    let num = 0;
    return function() {
        num++
        console.log(num);
    }

}
let count = incEnv();
count();
count();
count(); */

/* function sumFunc(a) {
    return function(b) {
        return a + b
    }
}
let sum =sumFunc(3)(5);
console.log(sum); */

/* let arrNum = [1,2,3,4,5];
function chekArr(arr, i = 0) {
if(i < arr.length) {
    console.log(arr[i])
    i++
    return chekArr(arr, i)
}
}
chekArr(arrNum); */

const countryArr = ['Russia', 'France', 'Kyrgyzstan', 'USA'];
const countryArr2 = ['Japan', 'Canada', 'China', 'Belarus'];

function longAndShort(countrylist) {

    countrylist.sort(function(a, b) {
        return a.length - b.length
    })

    let leng = countrylist.length

    return countrylist[0] + ' ' + countrylist[leng - 1]
}

const result1 = longAndShort(countryArr);
const result2 = longAndShort(countryArr2);
console.log(result1, result2);