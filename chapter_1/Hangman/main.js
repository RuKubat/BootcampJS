// const words = [
    
//     'asas'
// ]

// let word = words[Math.floor(Math.random()*words.length)];

// let answerArr = word.split('').map(function(item){
//     return '_'
// })

// let remainingLetters = word.length;

//     let attempts = 0;
//     let trueAttempts = 0;

// // console.log(word, answerArr);

// while(remainingLetters > 0 ) {
//     let guess = prompt('Ugadayte bukvu, \n' + answerArr.join('')).toLowerCase();
    
//     if(guess === '') continue;
//     if(guess === null) break;

//     if(guess === word){
//     remainingLetters = 0;
//     break;
//     }
//     if(guess.length !== 1) {
//         alert('Vvedite tolko odnu bukvu.');
//         continue;
//     }
//     let isTrueGuess = false;
//     word.split('').map(function(item, index) {
//         if(guess === item && answerArr[index] === '_'){
//             answerArr[index] = guess;
//             remainingLetters--;
//         }
//     })
//     if(isTrueGuess) {
//         trueAttempts++;
//     }
//     attempts++;
  
// }
// if(!remainingLetters) {
// alert('Hurrey!!! Vi ot gadali slovo: \n' + word)
// if(attempts) {
// alert('kolichestvo popytok: ' + attempts);
// alert('obshiy schet: '+ Math.floor(100/attempts*trueAttempts))
// } else {
//     alert('Chiter')
// }
// }

// var theNumber = prompt('Viberi chislo ', '');
// if(!isNaN(theNumber))
// alert('Tvoe chislo - kvadratnuy koren iz ' + theNumber * theNumber);
// else('Nu ti chto chislo-to ne vvel?');

// var num = Number(prompt('Viberi chislo', '0'));
//     if(num < 10)
//     alert('Malovato');
//     else if(num < 100)
//     alert('Normalno');
//     else
//     alert('Mnogovato');
    
// var number = 0;
// while(number <= 12) {
//     console.log(number);
//     number = number + 2
// }

// do{
//     var name = prompt('E Sen kimsin?');
// } while(!name);
// console.log(name);

var result = 1;
for(var counter = 0; counter < 10; counter + 1)
result = result * 2;
console.log(result);
