var arr = [8, 5, 3, 7, 6, 2, 2, 4, 11, 10, 20];

// var newArr = arr.sort(function(a,b){
//     return a - b;
// });
// console.log(newArr);

// var newArr = arr.map(function(item, index, array){
//     if(item < 10) {
//         return item
//     }
// });

// console.log(newArr);

// var newArr = arr.filter(function(item){
//     return item % 12 === 0 //!==0(nechet.chisla)
// })

// console.log(newArr);

// var arr = [8, 5, 3, 7];
// var animals = ['Dog', 'Cat', 'Horse'];

// var newArr = arr.slice(3, 6);
// var newArr = arr.splice(3, 3);

// console.log(arr);
// console.log(newArr);

// var newArr = arr.concat(animals);
// console.log(newArr);

// var arr = [1,2,3];

// arr.push('Dog');
// arr.shift('Cat');

// console.log(arr);

// arr.pop();
// arr.shift();

// console.log(arr);

// var arr = [1,2,3,4,5];

// var newArr = arr.reverse();
// console.log(newArr);

// var arr = ['Dog', 'Cat', 'Rabbit', 'Lama'];

// var str = arr.join('+');

// console.log(str);

var str = 'Hello World';
var arr = [];

for(var i = 0; i < str.length; i++) {
    if(str[i] !== '1') {
        arr.push(str[i]);
    }
}
var newStr = arr.join('');

console.log(newStr);