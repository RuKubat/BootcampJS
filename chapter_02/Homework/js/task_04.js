/* Напишите функцию которая возвращает 
массив из целых чисел в диапазоне (x , y) */

function diapazone(a, b) {
    let arr = [a]; 
    while(a != b) {
        if(a < b) {
            arr.push(++a)
        } else if (a > b) {
            arr.push(--a)
        }
    }
    return arr
}
console.log(diapazone(9, 1)) 

// var randomBodyBodyParts = ['eye', 'nose', 'skull'];
// var randomAdjectives = ['stinky', 'boring', 'fooly'];
// var randomWords = ['fly', 'monkey', 'spade', 'fork', 'toilet'];
// var randomBodyBodyPart = randomBodyBodyParts[Math.floor(Math.random() * 3)];
// var randomAdjective = randomAdjectives[Math.floor(Math.random() * 3)]
// var randomWord = randomWords[Math.floor(Math.random() * 5)];
// var randomInsult = 'You have a ' + randomBodyBodyPart + ' like a ' + 
// randomAdjectives + ' ' + randomWord + '!!!';
// console.log(randomInsult);
 

// var generateRandomInsult = function() {
// var randomBodyParts = ['eye', 'nose', 'skull'];
// var randomAdjectives = ['stinky', 'boring', 'fooly'];
// var randomWords = ['fly', 'monkey', 'spade', 'fork', 'toilet'];
// var randomString = 'You have a ' + pickRandomWord(randomBodyParts) + 
// ' like a ' + pickRandomWord(randomAdjectives) + ' ' + 
// pickRandomWord(randomWords) + '!!!';
// return randomString;
// };
// console.log(generateRandomInsult());





